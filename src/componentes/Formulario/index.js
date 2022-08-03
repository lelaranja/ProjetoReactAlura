import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import "./Formulario.css"


const Formulario = () => {
    const times = ['Programação', 'Front-End', 'Data Science', 'Devops', 'Ux e Design', 'Mobile']
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar seu card</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Times" itens={times} />
                <Botao texto="Criar card" />
            </form>
        </section>
    )

}

export default Formulario