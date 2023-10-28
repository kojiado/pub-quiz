import React from 'react'

const Input = ({label, placeholder, type, id, textarea, additionalClass, onChange, value}) => {
  return (
    <div className={`${additionalClass} input-box`}>
      {textarea ? (
        <div className={`${additionalClass} input-box`}>
          <label htmlFor={id}>{label}</label>
          <textarea required onChange={onChange} value={value} rows={4} placeholder={placeholder} type={type} id={id}/>
        </div>
      ):(
        <div className={`${additionalClass} input-box`}>
          <label htmlFor={id}>{label}</label>
          <input required onChange={onChange} value={value} placeholder={placeholder} type={type} id={id}/>
        </div>
      )}
    </div>
  )
}

export default Input