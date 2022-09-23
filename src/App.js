import "./App.css";
import News from "./components/unite";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Article from "./components/Article";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
