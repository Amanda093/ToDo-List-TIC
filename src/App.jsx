import { Cabecalho, Conteudo, Rodape } from "./components";

import "./App.css";

const App = () => {
  return (
    <>
      <Cabecalho username="Justine" />;
      <Conteudo>
        <h1>Titulo</h1>
      </Conteudo>
      <Rodape criador="Amanda" />
    </>
  );
};

export { App };
