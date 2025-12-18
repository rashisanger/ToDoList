import React from 'react'
import style from './Style1.module.css'
const Child = (props) => {
  return (
    <div className={style.container}>
        <h2>CHARACTER PROFILE</h2>
        <img src={props.image}/>
        <h3>Name: {props.name}</h3>
        <h3>Power Level: {props.level}</h3>
        <h3>Skill: {props.skill}</h3>
    </div>
  )
}

export default Child