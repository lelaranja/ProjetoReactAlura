import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import "./Formulario.css"

const toSave = (e) => {
    e.preventDefault()
    console.log('Form foi submetido')
}

const Formulario = () => {
    const times = ['Programação', 'Front-End', 'Data Science', 'Devops', 'Ux e Design', 'Mobile']
    return (
        <section className='formulario'>
            <form onSubmit={toSave}>
                <h2>Preencha os dados para criar seu card</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Times" itens={times} />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )

}

export default Formulario