import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import "./Formulario.css"
import { useState } from 'react'



const Formulario = (props) => {
    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")

    const toSave = (e) => {
        e.preventDefault()
        props.aoColaboradorCadastrado({
            nome, cargo, imagem, time
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={toSave}>
                <h2>Preencha os dados para criar seu card</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)} />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)} />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa label="Times" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)} />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )

}

export default Formulario