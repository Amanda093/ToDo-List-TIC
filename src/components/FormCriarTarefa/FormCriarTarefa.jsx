import { useState } from "react";
import { Botao, CampoTexto } from "../../components";
import style from "./FormCriarTarefa.module.css";
import { useAppContext } from "../../hooks";

const FormCriarTarefa = () => {
  const { adicionarTarefa } = useAppContext();

  const [nomeTarefa, setNomeTarefa] = useState("");

  const onChangeNomeTarefa = (event) => {
    setNomeTarefa(event.currentTarget.value);
  };

  const submeterFormulario = (event) => {
    event.preventDefault(); // para o navegador não recarregar

    if (!nomeTarefa) {
      return;
    }

    adicionarTarefa(nomeTarefa);

    setNomeTarefa("");
  };

  return (
    <form className={style.FormCriarTarefa} onSubmit={submeterFormulario}>
      <CampoTexto value={nomeTarefa} onChange={onChangeNomeTarefa} />
      <Botao texto="+" />
    </form>
  );
};

export { FormCriarTarefa };
