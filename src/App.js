import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColabAdd = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])//espalhando colaboradores antigos e add um novo no final
  }
  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={aoNovoColabAdd} />
      <Time nome="Programação" />
      <Time nome="FrontEnd" />
      <Time nome="DevOps" />
    </div>
  );
}

export default App;
