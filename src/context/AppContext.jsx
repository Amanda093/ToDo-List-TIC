import { createContext, useEffect, useState } from "react";
import { api } from "../services";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const { children } = props;

  const [criador] = useState("Amanda");

  const [tarefas, setTarefas] = useState([]);

  const [loadingCriar, setLoadingCriar] = useState(false);
  const [loadingEditar, setLoadingEditar] = useState(false);
  const [loadingDeletar, setLoadingDeletar] = useState(null);
  const [loadingCarregar, setLoadingCarregar] = useState(null);

  const carregarTarefas = async () => {
    setLoadingCarregar(true);

    const { data = [] } = await api.get("/tarefas");

    setTarefas([...data]);

    setLoadingCarregar(false);
  };

  // create
  const adicionarTarefa = async (nomeTarefa) => {
    setLoadingCriar(true);

    const { data: tarefa } = await api.post("./tarefas", {
      nome: nomeTarefa,
    });

    setTarefas((estadoAtual) => {
      return [...estadoAtual, tarefa];
    });

    setLoadingCriar(false);
  };

  // delete
  const removerTarefa = (idTarefa) => {
    setLoadingDeletar(idTarefa);

    setTarefas((estadoAtual) => {
      const tarefasAtualizadas = estadoAtual.filter(
        (tarefa) => tarefa.id != idTarefa
      );

      return [...tarefasAtualizadas];
    });

    setLoadingDeletar(null);
  };

  //edit
  const editarTarefa = async (idTarefa, nomeTarefa) => {
    setLoadingEditar(true);

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

    setLoadingEditar(null);
  };

  useEffect(() => {
    carregarTarefas();
  }, []);

  return (
    <AppContext.Provider
      value={{
        criador,
        tarefas,
        adicionarTarefa,
        removerTarefa,
        editarTarefa,
        loadingCriar,
        loadingDeletar,
        loadingEditar,
        loadingCarregar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
