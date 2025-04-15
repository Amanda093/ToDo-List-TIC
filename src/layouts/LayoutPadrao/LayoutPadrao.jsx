import { Cabecalho, Conteudo, Rodape } from "../../components";
import { Outlet } from "react-router-dom";
import { useAppContext } from "../../hooks";

const LayoutPadrao = () => {
  const { criador } = useAppContext();

  return (
    <>
      <Cabecalho username="Justine" />;
      <Conteudo>
        <Outlet />
      </Conteudo>
      <Rodape criador={criador} />
    </>
  );
};

export { LayoutPadrao };
