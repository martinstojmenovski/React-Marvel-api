import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Favorite from './Components/Favorite';
import AllMarvels from './Components/AllMarvels';
import { useState }  from 'react'




function App() {
  const [favorite, setFavorite] = useState([])
  
  const handleAddToFavorite = (character) => {
    console.log(character)
    setFavorite([...favorite, character])
  }
    


  return (
    <div className="App">
      <nav>
        <Link to='/'>Marvel</Link>
        <Link to='/favorite'>Favorite</Link>
      </nav>
      <Routes>
      <Route exact path='/' element={ <AllMarvels addToFavorite={handleAddToFavorite} />} />
      <Route exact path='/favorite' element={ <Favorite  favorite={favorite}/>} /> 
      </Routes>
    </div>
  );
}

export default App;
