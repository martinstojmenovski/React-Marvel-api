import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Favorite from './Components/Favorite';
import AllMarvels from './Components/AllMarvels';
import { useState, useEffect }  from 'react'

const publicKey = "44d2d43ba9be5678fb9c06aa57e4bdcb"
const hash = "90a26c67e0b21e7532c4e3439210f3ea"


function App() {
  const [marvelList, setMarvelList] = useState([])
  const [selectedCharacter, setSelectedCharacter] = useState("")
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    fetch(`https://gateway.marvel.com/v1/public/characters?limit=50&ts=1&apikey=${publicKey}&hash=${hash}`)
        .then(response => response.json())
        .then(data => {
            // console.log(data.data.results)
            setMarvelList(data.data.results)
            setSelectedCharacter(data.data.results)
        }
        )
}, [])

const handlePosterClick = (character) => {
    // console.log(character)
    setSelectedCharacter(character)
    // console.log(favorites)
}


const marvelPics = marvelList.map((book) => {
    return <img key={book.id} onClick={() => {handlePosterClick(book)}}
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
        <Link to='/'>Marvel</Link>
        <Link to='/favorite'>Favorite</Link>
      </nav>
      <Routes>
        {/* 3. here the function is passed to the AllMarvels component*/}
      <Route exact path='/' element={ <AllMarvels addToFavorites={handleAddToFavorites} marvelPics={marvelPics} selectedCharacter={selectedCharacter} />} />
      {/* 8. here I am passing favorite */}
      <Route exact path='/favorite' element={ <Favorite  favorites={ favorites } /> } /> 
      </Routes>
    </div>
  );
}

export default App;
