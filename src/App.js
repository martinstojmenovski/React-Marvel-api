import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Favorite from './Components/Favorite';
import AllMarvels from './Components/AllMarvels';
import { useState }  from 'react'




function App() {
  // 1. state declared
  const [favorites, setFavorites] = useState([])

  // 2. function declared and passed as props
  const handleAddToFavorites = (character) => {
    // console.log(this.character)
    // character.filter((name) => {name === name.name})
    // 7.  the first state is now filled with the fetched data in a new array and is passed as a props in Favorite.js
    setFavorites([...favorites, character])
  }




  return (
    <div className="App">
      <nav>
        <Link to='/'>Marvel</Link>
        <Link to='/favorite'>Favorite</Link>
      </nav>
      <Routes>
        {/* 3. here the function is passed to the AllMarvels component*/}
      <Route exact path='/' element={ <AllMarvels addToFavorites={handleAddToFavorites} />} />
      {/* 8. here I am passing favorite */}
      <Route exact path='/favorite' element={ <Favorite  favorites={favorites}/>} /> 
      </Routes>
    </div>
  );
}

export default App;
