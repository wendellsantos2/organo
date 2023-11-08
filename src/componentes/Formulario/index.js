import React from 'react'
import CampoTexto from '../CampoTexto'

export default function Formulario() {
  return (
    <>
    <section className='formulario'>
        <form>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto label='Nome' placeholder="Digite seu nome" />
            <CampoTexto label='Cargo' placeholder="Digite seu Cargo" />
            <CampoTexto label='Imagem' placeholder="Digite sua Imagem" />
        </form>
    </section>
    
    </>
    
  )
}
