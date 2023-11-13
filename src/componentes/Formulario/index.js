import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {
    const times= [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'Ux e Designer',
        'Mobile',
        'Inovação e gestão'
    ]

    const [nome,setNome] = useState('')
    const [cargo,setCargo] = useState('')
    const [imagem,setImagem] = useState('')
    const [time,setTime] = useState('')


    const aoSalvar = (evento) =>{
        evento.preventDefault()
    
        console.log('Form foi submetido => ', nome, cargo, imagem, time)
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlTerado={valor => setNome(valor)} />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" aoAlTerado={valor =>setCargo(valor)} />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlTerado={valor => setImagem(valor)} />
                <CampoTexto label="Time" placeholder="Digite seu Time " valor={time} aoAlTerado={valor => setTime(valor)} />
                <ListaSuspensa itens={times}/>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario