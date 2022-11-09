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
  const [state, setState] = useState(data.length - 1);
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
    console.log(enemyTurn,"name")
    // console.log(sake,"sake")
  }, [enemyTurn]);

  function increment() {
    if (data[state].battleReady && enemyScore>0){
      return alert("you have to win to proceed")
    }
    if (state === data.length - 1) {
      setState(0);
      setEnemyScore(20)

    } else {
      setState(state + 1);
    }    
  }

  function attackPoints(attackPoints,attackName){
    setAttackName(attackName)
    setSake(true)
    setTimeout(()=>setSake(false), 1000)
   if(!enemyTurn){
    if (attackPoints > battleMode.enemyLife){      
      setBattleMode({
        ...battleMode,enemyLife:0
      })      
    } else{
      setBattleMode({
        ...battleMode,enemyLife:battleMode.enemyLife-5
      })
    }
   } 

   setEnemyTurn(!enemyTurn)
    // setTimeout(()=>setBattleMode({enemyTurn:false}), 2000)
    if(enemyTurn){
      setBattleMode({
        ...battleMode,playerLife:battleMode.playerLife-5
      })
    }
  }

  // function attackPoints(attackPoints,attackName){
  //   setAttackName(attackName)
  //   setSake(true)
 
 
  


  // setBattleMode({
  //     ...battleMode,enemyTurn:!battleMode.enemyTurn
  //   })
  //   // setTimeout(()=>setBattleMode({enemyTurn:false}), 2000)
  //   // if(battleMode.enemyTurn){
  //   //   setBattleMode({
  //   //     ...battleMode,playerLife:battleMode.playerLife-5
  //   //   })
  //   // }
  // }

  function fightCard(){
    
    return(
   <FightCard attack1={data[state].attack1} attack2={data[state].attack2} 
            className={data[state].dialogBoxCss}
              attackPoints={attackPoints} />
             
    )
  }

  function battleDetailCard(){
    let cardData={}
if(battleMode.enemyTurn===false){
  cardData.characterName=battleMode.playerPetName
  cardData.attackName=attackName
}else{
  cardData.characterName=battleMode.enemyPetName
  cardData.attackName=battleMode.enemyPetAttackList[0].name
}
// console.log(battleMode,'91')
    return(
      <BattleDetailCard characterName={cardData.characterName} attackName={cardData.attackName} className={`battleDetailCard  `} />
    )
  }

  return (
    <div className="App">
      <div className="mainFrame">       
        {/* <img src={turtle} alt='sample' className="leftImage" />         */}
        {/* <img src={turtle} alt='sample' className="rightImage" />    */}
        <img src={data[state].characterImg} alt='sample' className={`${data[state].characterCss} ${!enemyTurn&&'horizontal-shake attackEffect'}`} /> 
        {
        data[state].battleReady?
        fightCard()
            : <Card body={data[state].dialog} className={data[state].dialogBoxCss} />
        } 
        <button onClick={() => increment()} className='btn btn-primary nextButton'>Next</button>
      {/* <BoostrapModel buttonName='Next' message="work in progress" />   */}
        {data[state].battleReady && 
          <img src={data[state].enemyImg} alt='sample' className={`${data[state].enemyCss} ${enemyTurn&&'horizontal-shake attackEffect'}`} />         
          }
          {/* enemy score */}
        {data[state].battleReady&&
          <button className='rounded-pill playerLife' >{battleMode.playerLife}</button>}
        {/* player score */}
        {data[state].battleReady&&
        <><div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${percentage(battleMode.enemyLife,battlePetsData[petId.enemy].lifeCount)}%` }}
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
      
       {data[state].battleReady       
       && 
       battleDetailCard()
              }
      
      </div>      
    </div>
  );
}

export default App;
