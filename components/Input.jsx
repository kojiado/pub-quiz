import React from 'react'

const Input = ({label, placeholder, type, id, textarea, additionalClass, onChange, value}) => {
  return (
    <div className={`${additionalClass} input-box`}>
      {textarea ? (
        <div className={`${additionalClass} input-box`}>
          <label for={id}>{label}</label>
          <textarea onChange={onChange} value={value} rows={4} placeholder={placeholder} type={type} id={id}/>
        </div>
      ):(
        <div className={`${additionalClass} input-box`}>
          <label for={id}>{label}</label>
          <input onChange={onChange} value={value} placeholder={placeholder} type={type} id={id}/>
        </div>
      )}
    </div>
  )
}

export default Input