import style from "./ListaTarefas.module.css";
import { ListaTarefasItem } from "./ListaTarefasItem";

const ListaTarefas = (props) => {
  const { tarefas } = props;
  return (
    <ul className={style.ListaTarefas}>
      {tarefas.map((item) => (
        <ListaTarefasItem key={item.id} nome={item.nome} />
      ))}
    </ul>
  );
};

export { ListaTarefas };
