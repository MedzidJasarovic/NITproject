import { useState, useEffect } from "react";
import newsApi from "../../api/data";
import style from "./index.module.css";

const Home = () => {
  const [articles, setArticles] = useState([]);

  //"/v2/top-headlines?country=us&apiKey=a3ab634aacf04e55b898475a2c594dd6"

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
      {articles.map((article, index) => {
        if (index >= 15) {
          if (index - 15 > 2) {
            return (
              <div className={style.kartica}>
                <p className={style.deskripcijaa}>{article.description}</p>
                <p className={style.autor}>{article.author}</p>
                <div>
                  <img
                    className={style.slike}
                    src={article.urlToImage}
                    alt="nema"
                  />
                </div>
                <div>
                  <button
                    onClick={() => {
                      console.log("kliknuto");
                    }}
                    className={style.dugme}
                  >
                    Read more
                  </button>
                </div>
              </div>
            );
          } else {
            return (
              <div className={style.karticaManja}>
                <p className={style.deskripcijaa}>{article.description}</p>
                <p className={style.autor}>{article.author}</p>
                <div>
                  <img
                    className={style.slike}
                    src={article.urlToImage}
                    alt="nema"
                  />
                </div>
                <div>
                  <button
                    onClick={() => {
                      console.log("kliknuto");
                    }}
                    className={style.dugme}
                  >
                    Read more
                  </button>
                </div>
              </div>
            );
          }
        } else if (index >= 10) {
          if (index - 10 > 2) {
            return (
              <div className={style.kartica}>
                <p className={style.deskripcijaa}>{article.description}</p>
                <p className={style.autor}>{article.author}</p>
                <div>
                  <img
                    className={style.slike}
                    src={article.urlToImage}
                    alt="nema"
                  />
                </div>
                <div>
                  <button
                    onClick={() => {
                      console.log("kliknuto");
                    }}
                    className={style.dugme}
                  >
                    Read more
                  </button>
                </div>
              </div>
            );
          } else {
            return (
              <div className={style.karticaManja}>
                <p className={style.deskripcijaa}>{article.description}</p>
                <p className={style.autor}>{article.author}</p>
                <div>
                  <img
                    className={style.slike}
                    src={article.urlToImage}
                    alt="nema"
                  />
                </div>
                <div>
                  <button
                    onClick={() => {
                      console.log("kliknuto");
                    }}
                    className={style.dugme}
                  >
                    Read more
                  </button>
                </div>
              </div>
            );
          }
        } else if (index >= 5) {
          if (index - 5 > 2) {
            return (
              <div className={style.kartica}>
                <p className={style.deskripcijaa}>{article.description}</p>
                <p className={style.autor}>{article.author}</p>
                <div>
                  <img
                    className={style.slike}
                    src={article.urlToImage}
                    alt="nema"
                  />
                </div>
                <div>
                  <button
                    onClick={() => {
                      console.log("kliknuto");
                    }}
                    className={style.dugme}
                  >
                    Read more
                  </button>
                </div>
              </div>
            );
          } else {
            return (
              <div className={style.karticaManja}>
                <p className={style.deskripcijaa}>{article.description}</p>
                <p className={style.autor}>{article.author}</p>
                <div>
                  <img
                    className={style.slike}
                    src={article.urlToImage}
                    alt="nema"
                  />
                </div>
                <div>
                  <button
                    onClick={() => {
                      console.log("kliknuto");
                    }}
                    className={style.dugme}
                  >
                    Read more
                  </button>
                </div>
              </div>
            );
          }
        } else if (index <= 5) {
          if (index > 2) {
            return (
              <div className={style.kartica}>
                <p className={style.deskripcijaa}>{article.description}</p>
                <p className={style.autor}>{article.author}</p>
                <div>
                  <img
                    className={style.slike}
                    src={article.urlToImage}
                    alt="nema"
                  />
                </div>
                <div>
                  <button
                    onClick={() => {
                      console.log("kliknuto");
                    }}
                    className={style.dugme}
                  >
                    Read more
                  </button>
                </div>
              </div>
            );
          } else {
            return (
              <div className={style.karticaManja}>
                <p className={style.deskripcijaa}>{article.description}</p>
                <p className={style.autor}>{article.author}</p>
                <div className={style.slike}>
                  <img
                    className={style.slike}
                    src={article.urlToImage}
                    alt="nema"
                  />
                </div>
                <div>
                  <button
                    onClick={() => {
                      console.log("kliknuto");
                    }}
                    className={style.dugme}
                  >
                    Read more
                  </button>
                </div>
              </div>
            );
          }
        }
      })}
    </div>
  );
};

export default Home;
