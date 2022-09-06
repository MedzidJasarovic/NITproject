import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";

const News = (props) => {
  return (
    <div>
      <Nav />
      <Home />
    </div>
  );
};

export default News;
