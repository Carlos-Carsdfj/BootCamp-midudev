
import React, { useState } from 'react'


const Statictis = (props) =>{
  const numberGood = props.goodNum;
  const numberNeutral = props.neutralNum;
  const numberbad = props.badNum;
  const plusAll =numberGood+numberNeutral+numberbad;
  const positiveNumb = (numberGood*100)/plusAll;
  const averageAll =((numberGood-numberbad)/plusAll);
  return   plusAll>0 ?
(
    <div>
      <h1>Statictis</h1>   
      <p>average :{averageAll} %</p>
      <p>total :{plusAll}</p>
      <p>positive :{positiveNumb} %</p>
    </div>
  ):
  (
    <div>
      <h1>Statictis</h1>
      <h2>no feedback given </h2>
    </div>
  )
}
  
const App = () => {
  const [comment, setGComment] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });
  const onGood = ()=>{
    setGComment({
      ...comment,
      good:comment.good+1
    });
  }
  const onNeutral =() =>{
    setGComment({
      ...comment,
      neutral:comment.neutral+1
    });
  }
  const onBad =() =>{
    setGComment({
      ...comment,
      bad:comment.bad+1
    });  
  }
  return (

    <div>
      <h1>given feedback</h1>
      <button onClick={onGood}  >Good</button>
      <button onClick={onNeutral} >Neutral</button>
      <button onClick={onBad} >Bad</button>
      <p>good : {comment.good} </p>
      <p>neutral :{comment.neutral}</p>
      <p>bad :{comment.bad}</p>
      <Statictis goodNum={comment.good} neutralNum={comment.neutral} badNum={comment.bad}></Statictis>
    </div>
  )
}


export default App;
