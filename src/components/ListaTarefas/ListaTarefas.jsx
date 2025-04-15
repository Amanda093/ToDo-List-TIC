import { Botao, TIPO_BOTAO } from "../../components";
import style from "./ListaTarefas.module.css";

const ListaTarefas = () => {
  return (
    <ul className={style.ListaTarefas}>
      <li>
        Item 1
        <Botao texto="-" tipo={TIPO_BOTAO.SECUNDARIO} />
      </li>
      <li>
        Item 2
        <Botao texto="-" tipo={TIPO_BOTAO.SECUNDARIO} />
      </li>
      <li>
        Item 3
        <Botao texto="-" tipo={TIPO_BOTAO.SECUNDARIO} />
      </li>
    </ul>
  );
};

export { ListaTarefas };
