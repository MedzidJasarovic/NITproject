import { useLocation, Link } from "react-router-dom";
import style from "./index.module.css";
const Article = () => {
  const location = useLocation();
  const state = location.state;
  console.log(state);
  return (
    <div className={style.back}>
      <div className={style.articleDiv}>
        <div className={style.naslov}> {state.title}</div>
        <div>
          <img className={style.pictures} src={state.urlToImage} alt="nema" />
        </div>
        <div className={style.description}>{state.description}</div>
        <div className={style.content}>{state.content}</div>
        <div className={style.combine}>
          <div className={style.source}>Source:{state.source.name}</div>
          <div className={style.author}>Author: {state.author}</div>
        </div>
      </div>
      ;
    </div>
  );
};
export default Article;
