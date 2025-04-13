import style from "./Rodape.module.css";

const Rodape = (props) => {
  const anoAtual = new Date().getFullYear();
  const { criador } = props;

  return (
    <div className={style.Rodape}>
      React Básico - {anoAtual} - {criador}
    </div>
  );
};

export { Rodape };
