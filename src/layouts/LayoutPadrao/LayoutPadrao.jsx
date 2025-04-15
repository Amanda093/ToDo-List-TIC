import { Cabecalho, Conteudo, Rodape } from "../../components";
import { Outlet } from "react-router-dom";

const LayoutPadrao = () => {
  return (
    <>
      <Cabecalho username="Justine" />;
      <Conteudo>
        <Outlet />
      </Conteudo>
      <Rodape criador="Amanda" />
    </>
  );
};

export { LayoutPadrao };
