import { useState, useEffect } from "react";
import newsApi from "../../api/data";
import style from "./index.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [articles, setArticles] = useState([]);

  //"/v2/top-headlines?country=us&apiKey=264cabd561ff4c999a860373c835c773"
  //"/v2/everything?q=serbia&apiKey=264cabd561ff4c999a860373c835c773"
  const [search, setSearch] = useState("");

  const onSubmit = () => {
    newsApi
      .get(`/v2/everything?q=${search}&apiKey=264cabd561ff4c999a860373c835c773`)
      .then((res) => {
        console.log(res);
        setArticles(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getNews = () => {
    newsApi
      .get(
        "/v2/top-headlines?country=us&apiKey=264cabd561ff4c999a860373c835c773"
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
    <div className={style.homediv}>
      <input
        id="srch"
        type="text"
        className={style.searchInput}
        placeholder="Search for news"
        onChange={(e) => {
          console.log(e.target.value);
          setSearch(e.target.value);
        }}
        value={search}
      />
      <button className={style.searchbtn} onClick={onSubmit}>
        Search
      </button>
      {articles.map((article) => {
        return (
          <Link to="/article" state={article}>
            <div className={style.karticaManja}>
              <p className={style.deskripcijaa}>{article.description}</p>
              {/* <p className={style.autor}>{article.author}</p> */}
              <div>
                <img
                  className={style.slike}
                  src={article.urlToImage}
                  alt="nema"
                />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Home;
