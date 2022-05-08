import './App.css';

import CharactersList from "./pages/CharactersList.js";
import Character from "./pages/Character.js";
import Search from "./pages/Search.js";

import {Routes, Route} from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" component={CharactersList} />
        <Route strict exact path="/search" component={Search} />
        <Route strict exact path="/:id" component={Character} />
      </Routes>
    </div>
  );
}

export default App;
