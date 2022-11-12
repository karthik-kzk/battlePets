import React, { useState, useEffect } from 'react';
import './App.css';

// components
// import turtle from './images/turtle.jpg';
// import BoostrapModel from './components/model';
import Card from './components/card';
import BattleDetailCard from './components/battleDetailCard';
import FightCard from './components/fightCard';
import { data, battlePetsData } from './data';
import { permutation } from './permutation';


function percentage(val, totalValue) {
  return (val / totalValue * 100)
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function App() {
let   randomNo= getRandomInt(90);
console.log(randomNo)
  console.log(permutation[`${randomNo}`][0])
  console.log(battlePetsData[permutation[`${randomNo}`][0]])

  const [nextClick, setNextClick] = useState(false);
  const [enemyTurn, setEnemyTurn] = useState(false);
  const [petId, setPetId] = useState({   
    player: permutation[`${randomNo}`][0],
    enemy: permutation[`${randomNo}`][1],
  })
  const [state, setState] = useState(data.length-1);
  const [enemyScore, setEnemyScore] = useState(20);
  const [attackName, setAttackName] = useState("");
  const [battleMode, setBattleMode] = useState({
    start: false,
    end: false,
    playerTurn: false,
    enemyTurn: 0,
    playerLife: battlePetsData[petId.player].lifeCount,
    enemyLife: battlePetsData[petId.enemy].lifeCount,
    enemyPetName: battlePetsData[petId.enemy].battlePetName,
    playerPetName: battlePetsData[petId.player].battlePetName,
    enemyPetAttackList: battlePetsData[petId.enemy].attackList,
    playerPetAttackList: battlePetsData[petId.player].attackList,
    enemyImg: battlePetsData[petId.enemy].characterImg,
    playerImg: battlePetsData[petId.player].characterImg,
    showBattleLog: false,
  });
  const [sake, setSake] = useState(false);


  useEffect(() => {
    // console.log(state, "count");
    // console.log(data[0])
    // console.log(data[state].battleReady && enemyScore > 0,'stop')
    console.log(battleMode, "battle1")
    console.log(enemyTurn, "enemyTurn")
    battleDetailCard()
    // console.log(sake,"sake")
  }, [enemyTurn]);

  function increment() {
    if (data[state].battleReady && enemyScore > 0) {
      return alert("you have to win to proceed")
    }
    if (state === data.length - 1) {
      setState(0);
      // setEnemyScore(20)

    } else {
      setState(state + 1);
    }
  }

  function battleDetailCard() {
    let cardData = {}
    if (enemyTurn) {
      cardData.characterName = battleMode.playerPetName
      cardData.attackName = attackName
    } else {
      cardData.characterName = battleMode.enemyPetName
      cardData.attackName = battleMode.enemyPetAttackList[getRandomInt(2)].name

    }

    return (
      <BattleDetailCard characterName={cardData.characterName} attackName={cardData.attackName} className={` cardSize`} />
    )
  }

  function attackPoints(attackPoints, attackName) {
    setAttackName(attackName)
    // setSake(true)
    // setTimeout(()=>setSake(false), 1000)
    if (battleMode.enemyLife == 0) {
      setTimeout(() => {
        window.location.reload()
      }, 2000)
      return alert("you have won the game")

    }
    if (attackPoints >= battleMode.enemyLife) {
      setBattleMode({
        ...battleMode, enemyLife: 0,
        showBattleLog: true,
      })
      alert("you have won the game")
    } else {
      // if(!enemyTurn){
      setBattleMode((previousVal) => ({
        ...previousVal, enemyLife: previousVal.enemyLife - 5,
        showBattleLog: true,
      }))
    }
    setEnemyTurn((previousVal) => !previousVal)
    // }   

    if (battleMode.enemyLife != 0) {
      setTimeout(() => {


        setEnemyTurn(enemyTurn => !enemyTurn)
        setBattleMode((previousVal) => ({
          ...previousVal, playerLife: previousVal.playerLife - 5,

        }))
        setTimeout(() => {
          setBattleMode((previousVal) => ({
            ...previousVal,
            showBattleLog: false,
          }))
        }, 2000)
      }, 3000)
    }

  }

  function fightCard() {
    let card
    if (!battleMode.showBattleLog) {
      card = <FightCard attack1={battleMode.playerPetAttackList[0].name} attack2={battleMode.playerPetAttackList[1].name}
        className={'cardSize'}
        attackPoints={attackPoints} />
    } else {
      card = battleDetailCard()
    }
    return (card


    )
  }



  return (

    <div className="container minWidth " >
      <div className="enemyBar enemy ">
        {/* enemy pokemon name */}
       
        {data[state].battleReady && 
          <>{battleMode.enemyPetName}<div className="progress ">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${percentage(battleMode.enemyLife, battlePetsData[petId.enemy].lifeCount)}%` }}
              aria-valuenow={battleMode.enemyLife}
              aria-valuemin={0}
              aria-valuemax={battlePetsData[petId.enemy].lifeCount}
            >
              {battleMode.enemyLife}
            </div>
          </div>
            <button className='rounded-pill ' >{battleMode.enemyLife}</button>
          </>
        }

      </div>
      <div className="enemyImage enemy ">
        {/* enemy image */}
        {data[state].battleReady &&
          <>    <img src={battleMode.enemyImg} alt='sample' className={`enemyImageTag ${enemyTurn && 'horizontal-shake attackEffect'}`} />
            <span className='dot'></span></>}

      </div>

      <div className="playerImage player" >
        {/* player image */}
        <img src={battleMode.playerImg} alt='sample' className={`image ${!enemyTurn && 'horizontal-shake attackEffect'}`} />
      </div>

      <div className="playerBar player">
        {/* playerPokemon name */}
        
        {data[state].battleReady &&
          <>{battleMode.playerPetName}
            <div className="progress ">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${percentage(battleMode.playerLife, battlePetsData[petId.player].lifeCount)}%` }}
                aria-valuenow={battleMode.playerLife}
                aria-valuemin={0}
                aria-valuemax={battlePetsData[petId.player].lifeCount}
              >
                {battleMode.playerLife}
              </div>
            </div>
            <button className='rounded-pill ' >{battleMode.playerLife}</button>
          </>
        }
      </div>

      <div className="battleLog">
        {/* battle log */}
        {
          data[state].battleReady ?
            fightCard()
            : <Card body={data[state].dialog} />
        }
        <button onClick={() => increment()} className='btn btn-primary '>Next</button>
        <button onClick={() => setState(data.length-1)} className='btn btn-primary '>Skip</button>

      </div>
    </div>
  );
}

export default App;
