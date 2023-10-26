import React from 'react'

const Button = (props) => {
  const { label, icon, type, additionalClass, onClickFunction } = props;

  return (
    <div onClick={onClickFunction} className={`button ${type} ${additionalClass}`}>
      {icon}
      <span>
        {label}
      </span>
    </div>
  )
}

export default Button