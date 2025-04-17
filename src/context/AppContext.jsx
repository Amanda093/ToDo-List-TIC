import { createContext, useEffect, useState } from "react";
import { api } from "../services";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const { children } = props;

  const [criador] = useState("Amanda");

  const [tarefas, setTarefas] = useState([]);

  const carregarTarefas = async () => {
    const { data = [] } = await api.get("/tarefas");

    setTarefas([...data]);
  };

  // create
  const adicionarTarefa = async (nomeTarefa) => {
    const { data: tarefa } = await api.post("./tarefas", {
      nome: nomeTarefa,
    });

    setTarefas((estadoAtual) => {
      return [...estadoAtual, tarefa];
    });
  };

  // delete
  const removerTarefa = (idTarefa) => {
    setTarefas((estadoAtual) => {
      const tarefasAtualizadas = estadoAtual.filter(
        (tarefa) => tarefa.id != idTarefa
      );

      return [...tarefasAtualizadas];
    });
  };

  //edit
  const editarTarefa = async (idTarefa, nomeTarefa) => {
    const { data: tarefaAtualizada } = await api.put(`tarefas/${idTarefa}`, {
      nome: nomeTarefa,
    });

    setTarefas((estadoAtual) => {
      const tarefasAtualizadas = estadoAtual.map((tarefa) => {
        return tarefa.id == idTarefa
          ? {
              ...tarefa,
              nome: tarefaAtualizada.nome,
            }
          : tarefa;
      });

      return [...tarefasAtualizadas];
    });
  };

  useEffect(() => {
    carregarTarefas();
  }, []);

  return (
    <AppContext.Provider
      value={{ criador, tarefas, adicionarTarefa, removerTarefa, editarTarefa }}
    >
      {children}
    </AppContext.Provider>
  );
};
