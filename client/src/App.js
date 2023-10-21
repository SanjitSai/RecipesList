
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import { Route, Routes } from 'react-router';
import { Home } from './pages/home';
import { Auth } from './pages/auth';
import { CreateRecipe } from './pages/create-recipe';
import { SavedRecipes } from './pages/saved-recipe';
import {Navbar} from "./components/navbar.js"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/auth" element={<Auth />}/>
          <Route path="/create-recipe" element={<CreateRecipe />}/>
          <Route path="/saved-recipes" element={<SavedRecipes />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
