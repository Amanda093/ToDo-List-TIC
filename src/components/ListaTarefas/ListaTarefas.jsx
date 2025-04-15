import style from "./ListaTarefas.module.css";
import { ListaTarefasItem } from "./ListaTarefasItem";
import { useAppContext } from "../../hooks";

const ListaTarefas = () => {
  const { tarefas } = useAppContext();

  return (
    <ul className={style.ListaTarefas}>
      {tarefas.map((item) => (
        <ListaTarefasItem key={item.id} nome={item.nome} />
      ))}
    </ul>
  );
};

export { ListaTarefas };
