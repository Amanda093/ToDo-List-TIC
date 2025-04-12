import { Cabecalho, Conteudo } from "./components";

import "./App.css";

const App = () => {
  return (
    <>
      <Cabecalho username="Justine" />;
      <Conteudo>
        <h1>Titulo</h1>
      </Conteudo>
    </>
  );
};

export { App };
