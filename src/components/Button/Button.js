import React from 'react'
import "./button.css"
const Button = ({title, bgBtn}) => {
  return (
    <>
    <button className= { bgBtn ? "btn-blue" :"btn-orange"}> {title}</button>
    </>
  )
}

export default Button