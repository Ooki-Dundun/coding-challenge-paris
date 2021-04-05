import { Switch, Route } from "react-router-dom";
import Home from "./../src/Components/Home";
import Temperature from "./../src/Components/Temperature";
import Custom from "./Components/Custom.jsx";
import Nav from "./Components/Nav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/temperature" component={Temperature} />
        <Route exact path="/customize-image" component={Custom} />
      </Switch>
    </div>
  );
}

export default App;
