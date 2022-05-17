import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Favorite from './Components/Favorite';
import AllMarvels from './Components/AllMarvels';





function App() {
  
  

    


  return (
    <div className="App">
      <nav>
        <Link to='/'>Marvel</Link>
        <Link to='/favorite'>Favorite</Link>
      </nav>
      <Routes>
      <Route exact path='/' element={<AllMarvels />} />
      <Route exact path='/favorite' element={ <Favorite />} /> 
      </Routes>
    </div>
  );
}

export default App;
