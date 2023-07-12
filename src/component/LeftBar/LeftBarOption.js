import React from 'react'
import '../LeftBar/LeftBarOption.css'

const LeftBarOption = ({Icon,title,number,IsActive}) => {
  return (
    <div className={`left_option ${IsActive && 'leftbaroptions--active'}`}>
        <Icon/>
        <h4>{title}</h4>
        <p>{number}</p>


    </div>
  )
}

export default LeftBarOption