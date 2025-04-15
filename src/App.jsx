import { Cabecalho, Conteudo, Rodape } from "./components";
import { Inicial } from "./pages";

import "./App.css";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Router />
      {/*<Cabecalho username="Justine" />;
      <Conteudo>
        <Inicial />
      </Conteudo>
      <Rodape criador="Amanda" /> */}
    </BrowserRouter>
  );
};

export { App };
