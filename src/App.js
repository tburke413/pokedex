import "./globals.css";
import Home from "./pages/Home";
import Team from "./pages/Team";
import PokeProfile from "./pages/PokeProfile";
import Nav from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/team" exact component={Team} />
        <Route path="/pokemon/:pokemon" exact component={PokeProfile} />
      </Switch>
    </div>
  );
}

export default App;
