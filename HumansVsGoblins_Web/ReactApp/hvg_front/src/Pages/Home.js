import React from 'react'
import Service from '../Services/ScoreService'
import { State, useState } from 'react'

const Home = () => {

  const [score, setScore] = useState({
    name:"",
    score: 0
  })

  const nameChangeHandler = async(e) => {
    await setScore({...score, name: e.target.value});
    console.log(e.target.value);
  }

  const scoreChangeHandler = async(e) => {
    await setScore({...score, score: e.target.valueAsNumber});
    console.log(e.target.valueAsNumber);
  }

  const scoreSubmit = async(e) => {
    e.preventDefault();
    await Service.addScore({name: score.name, score: score.score});
    console.log(score);
  }

  return (
    <div>
      <h1>Home</h1>
      <div className='position-absolute top-0 start-50 translate-middle'>
        This will eventually show the controls, guidelines, and whatnot
        <br/>
        But for now, I have score input for full-stack testing purposes
      </div>
      <form onSubmit={(e) => scoreSubmit(e)}>
        <input type='text' placeholder='Name' onChange={(e)=>{nameChangeHandler(e)}}required/>
        <input type='number' placeholder='Score' onChange={(e)=>{scoreChangeHandler(e)}} required/>
        <input type='submit' value='Add Score to List'/>
      </form>
    </div>
  )
}

export default Home