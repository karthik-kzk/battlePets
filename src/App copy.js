import React, { useState,useEffect } from 'react';
import './App.css';

// components
// import turtle from './images/turtle.jpg';
// import BoostrapModel from './components/model';
import Card from './components/card';
import BattleDetailCard from './components/battleDetailCard';
import FightCard from './components/fightCard';
import {data} from './data';



function App() {
  const [nextClick, setNextClick] = useState(false);
  
  const [state, setState] = useState(0);
  const [enemyScore, setEnemyScore] = useState(20);
  const [attackName, setAttackName] = useState("");
  const [sake, setSake] = useState(false);


  useEffect(() => {
    // console.log(state, "count");
    // console.log(data[0])
    // console.log(data[state].battleReady && enemyScore > 0,'stop')
    console.log(sake,"sake")
  }, [state,sake]);

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
    if (attackPoints > enemyScore){
      setEnemyScore(0)
      
    }else{
      setEnemyScore(enemyScore - attackPoints)
    }
  }

  return (
    <div className="App">
      <div className="mainFrame">       
        {/* <img src={turtle} alt='sample' className="leftImage" />         */}
        {/* <img src={turtle} alt='sample' className="rightImage" />    */}
        <img src={data[state].characterImg} alt='sample' className={data[state].characterCss} /> 
        {
        data[state].battleReady?
            <FightCard attack1={data[state].attack1} attack2={data[state].attack2} 
            className={data[state].dialogBoxCss}
              attackPoints={attackPoints} />
            : <Card body={data[state].dialog} className={data[state].dialogBoxCss} />
        } 
        <button onClick={() => increment()} className='btn btn-primary nextButton'>Next</button>
      {/* <BoostrapModel buttonName='Next' message="work in progress" />   */}
        {data[state].battleReady && 
          <img src={data[state].enemyImg} alt='sample' className={data[state].enemyCss} />         
          }
        {data[state].battleReady&&
          <button className='rounded-pill enemyLife' >{enemyScore}</button>}
       {data[state].battleReady&& <BattleDetailCard characterName={data[state].characterName} attackName={attackName} className={`battleDetailCard ${sake&&'horizontal-shake'} `} />}
      </div>      
    </div>
  );
}

export default App;
