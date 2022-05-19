import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Favorite from './Components/Favorite';
import AllMarvels from './Components/AllMarvels';
import { useState, useEffect } from 'react'
import About from './Components/About';

const publicKey = "44d2d43ba9be5678fb9c06aa57e4bdcb"
const hash = "90a26c67e0b21e7532c4e3439210f3ea"


function App() {
  const [marvelList, setMarvelList] = useState([])
  const [selectedCharacter, setSelectedCharacter] = useState("")
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    fetch(`https://gateway.marvel.com/v1/public/characters?&ts=1&apikey=${publicKey}&hash=${hash}`)
      .then(response => response.json())
      .then(data => {
        setMarvelList(data.data.results)
        setSelectedCharacter(data.data.results)
      }
      )
  }, [])


  const handlePosterClick = (character) => {
    setSelectedCharacter(character)
  }


  const marvelPics = marvelList.map((book) => {
    return <img key={book.id} onClick={() => { handlePosterClick(book) }}
      src={book.thumbnail.path + '.' + book.thumbnail.extension}
      alt="Marvel commic posters"
      style={{ height: "100px" }} />
  })


  const handleAddToFavorites = (character) => {
    setFavorites([...favorites, character])

  }

  return (
    <div className="App">
      <nav>
        <Link to='/' style={{textDecoration: 'none', color: 'white'}}><h1 className='navigation'>Marvel</h1></Link>
        <Link to='/favorite' style={{textDecoration: 'none', color: 'white'}}><h1 className='navigation'>Favorite</h1></Link>
        <Link to='/about' style={{textDecoration: 'none', color: 'white'}} ><h1 className='navigation'>About</h1></Link>
      </nav>
      <Routes>
        <Route exact path='/' element={
          <AllMarvels
            addToFavorites={handleAddToFavorites}
            marvelPics={marvelPics}
            selectedCharacter={selectedCharacter} />}
        />
        <Route exact path='/favorite' element={
          <Favorite
            favorites={favorites}
            setFavorites={setFavorites} />}
        />
      <Route exact path='/about' element={ <About />}
        />
      </Routes>
    </div>
  );
}

export default App;
