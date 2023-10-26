import React from 'react'

const MiniButton = (props) => {
  const {type, label, icon, additionalClass, onClickFunction} = props;
  return (
    <div onClick={onClickFunction} className={`mini-button ${type} ${additionalClass}`}>
      {icon}
      <span>
        {label}
      </span>
    </div>
  )
}

export default MiniButton