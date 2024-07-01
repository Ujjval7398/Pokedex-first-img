

//import Pokedex from './assets/Components/Pokedex'
import './App.css'
import CustomRoutes from './assets/routes/CustomRoutes';
import { Link } from "react-router-dom";

function App() {
  return (
    <>
    <h1 id="heading">
      <Link to="/">Pokedex</Link>
      
    </h1>
     <CustomRoutes />
    </>
  )
}

export default App;


