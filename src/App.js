import React, { useState,useEffect } from 'react';
import './App.css';

// components
// import turtle from './images/turtle.jpg';
// import BoostrapModel from './components/model';
import Card from './components/card';
import BattleDetailCard from './components/battleDetailCard';
import FightCard from './components/fightCard';
import {data,battlePetsData} from './data';


function percentage(val,totalValue){
 return (val/totalValue*100)
}

function App() {
  const [nextClick, setNextClick] = useState(false);
  const [enemyTurn, setEnemyTurn] = useState(false);
  const[petId,setPetId]=useState({
    player:1,
    enemy:0
  })
  const [state, setState] = useState(0);
  const [enemyScore, setEnemyScore] = useState(20);
  const [attackName, setAttackName] = useState("");
  const [battleMode, setBattleMode] = useState({
    start:false,
    end:false,
    playerTurn:false,
    enemyTurn:0,
    playerLife:battlePetsData[petId.player].lifeCount,
    enemyLife:battlePetsData[petId.enemy].lifeCount,
    enemyPetName:battlePetsData[petId.enemy].battlePetName,
    playerPetName:battlePetsData[petId.player].battlePetName,
    enemyPetAttackList:battlePetsData[petId.enemy].attackList,
    playerPetAttackList:battlePetsData[petId.player].attackList,    
  });
  const [sake, setSake] = useState(false);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  useEffect(() => {
    // console.log(state, "count");
    // console.log(data[0])
    // console.log(data[state].battleReady && enemyScore > 0,'stop')
    console.log(battleMode,"battle1")
    console.log(enemyTurn,"enemyTurn")
    battleDetailCard()
    // console.log(sake,"sake")
  }, [enemyTurn]);

  function increment() {
    if (data[state].battleReady && enemyScore>0){
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
      <BattleDetailCard characterName={cardData.characterName} attackName={cardData.attackName} className={`battleDetailCard  `} />
    )
  }

  function attackPoints(attackPoints,attackName){
    setAttackName(attackName)
    // setSake(true)
    // setTimeout(()=>setSake(false), 1000)
    if (battleMode.enemyLife == 0){
      setTimeout(()=>{
        window.location.reload()
      },2000)
      return alert("you have won the game")
      
   }
    if (attackPoints >= battleMode.enemyLife){      
      setBattleMode({
        ...battleMode,enemyLife:0
      })  
      alert("you have won the game")    
    } else {
    // if(!enemyTurn){
    setBattleMode((previousVal)=>({
      ...previousVal, enemyLife: previousVal.enemyLife-5
    })) 
  }
    setEnemyTurn((previousVal) => !previousVal)
    // }   
    
    if (battleMode.enemyLife != 0) {
      setTimeout(() =>{
      
       
        setEnemyTurn(enemyTurn => !enemyTurn)
        setBattleMode((previousVal) =>({
          ...previousVal, playerLife: previousVal.playerLife - 5
        }))       
    }, 2000) 
  }

  } 

  function fightCard(){
    
    return(
   <FightCard attack1={data[state].attack1} attack2={data[state].attack2} 
            className={''}
              attackPoints={attackPoints} />
             
    )
  }



  return (
    <div className="App minWidth">
      <div className="container">
        <div className="row">
          <div className="col test">
            <div className="row">
              <div className="col " style={{ 'background-color': "red" }} >
                {data[state].battleReady &&
                  <>
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
                    <button className='rounded-pill playerLife' >{battleMode.playerLife}</button>
                  </>
                }     
              </div>
            </div>
 
            
            <img src={data[state].characterImg} alt='sample' className={`${data[state].characterCss} ${!enemyTurn && 'horizontal-shake attackEffect'}`} /> 
           
          </div>
          <div className="col test">
            <div className="row">
              <div className="col " style={{ 'background-color': "red" }} >
                progressbar
              </div>
            </div>
            2
            {data[state].battleReady &&
              <img src={data[state].enemyImg} alt='sample' className={`${data[state].enemyCss} ${enemyTurn && 'horizontal-shake attackEffect'}`} />
            }
            {data[state].battleReady &&
              <><div className="progress enemyLifeBar">
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
                <button className='rounded-pill enemyLife' >{battleMode.enemyLife}</button>
              </>
            } 
           
          </div>
         
        </div>  
        <div className="row justify-content-center">
          <div className="col-6" style={{'background-color':"red"}}>
            {
              data[state].battleReady ?
                fightCard()
                : <Card body={data[state].dialog}  />
            } 
            </div>        
          </div>   
        <div className="row justify-content-center">
          <div className="col-4" style={{'background-color':""}}>
            <button onClick={() => increment()} className='btn btn-primary '>Next</button>
            </div>        
          </div>   
      </div>
    </div>
  );
}

export default App;
