import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import { Switch, Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <Work />
        </Route>
        <Route path="/work/:id">
          <MovieDetail />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
