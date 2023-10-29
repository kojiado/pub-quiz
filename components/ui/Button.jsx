import React from 'react'

const Button = (props) => {
  const {type, label, icon, style, additionalClass, onClickFunction, miniButton } = props;

  return (
    <button type={type} onClick={onClickFunction} className={`${miniButton ? 'mini-button' : 'button'} ${style} ${additionalClass}`}>
      {icon}
      <span>
        {label}
      </span>
    </button>
  )
}

export default Button