import React from 'react'

const Input = ({labelText, htmlFor, className, name, type, value , onChange, id}) => {
  return (
    <div className='form__custom-input'>
     <label className='from__label' htmlFor={htmlFor}>
          {labelText}:
      </label>
            <input
                    className={className}
                    id={id}
                    name={name}
                    type={type}
                    autoComplete='off'
                    value={value}
                    onChange={onChange}
            /></div>
  )
}

export default Input