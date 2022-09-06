import { useState, useEffect } from "react";
import newsApi from "../../api/data";
import style from "./index.module.css";

const Home = () => {
  const [articles, setArticles] = useState([]);
  //"/v2/top-headlines?country=us&apiKey=a3ab634aacf04e55b898475a2c594dd6"

  const getNews = () => {
    newsApi
      .get(
        "/v2/top-headlines?country=us&apiKey=a3ab634aacf04e55b898475a2c594dd6"
      )
      .then((res) => {
        console.log(res);
        setArticles(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      {articles.map((article) => {
        return (
          <div className={style.kartica}>
            <p className={style.deskripcijaa}>{article.description}</p>
            <p className={style.autor}>{article.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
