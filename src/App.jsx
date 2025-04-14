import { Cabecalho, Conteudo, Rodape } from "./components";
import { Inicial } from "./pages"

import "./App.css";

const App = () => {
  return (
    <>
      <Cabecalho username="Justine" />;
      <Conteudo>
        <Inicial />
      </Conteudo>
      <Rodape criador="Amanda" />
    </>
  );
};

export { App };
