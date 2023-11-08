import React from 'react'

export default function CampoTexto(props) {
  const placeholderModificada = `${props.placeholder}...`
  return (
   <div className='campo-texto'>
    <label>{props.label}</label>
    <input placeholder={placeholderModificada}/>
   </div>
  )
}
