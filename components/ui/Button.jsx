import React from 'react'

const Button = (props) => {
  const { label, icon, type, additionalClass, onClickFunction, miniButton } = props;

  return (
    <div onClick={onClickFunction} className={`${miniButton ? 'mini-button' : 'button'} ${type} ${additionalClass}`}>
      {icon}
      <span>
        {label}
      </span>
    </div>
  )
}

export default Button