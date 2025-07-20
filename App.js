import vector from './vector.svg';
import './App.css';
import MovieCard from './component/MovieCard.js';
import React,{useState, useEffect} from 'react';

const API_URL ="http://www.omdbapi.com/?i=tt3896198&apikey=c2f89947";


 const  App=()=>{
     const [searchTerm, setSearchTerm]= useState("");
     const [movies, setMovies] = useState([]);
     useEffect(()=>{
 searchMovies("superman");
         
     },[]);
     const searchMovies = async (title) => {
         const response = await fetch(`${API_URL}&s=${title}`);
         const data = await response.json();
 
         setMovies(data.Search);
     }
  return (
   <div className='main'>
    <div className='navbar'>
      <div className='logo'>
    <h1><i>Movie Pro</i></h1>
    </div>
    <div className='search'>
                    <input
                    value={searchTerm}
                     className='input' 
                   onChange={(e)=> setSearchTerm(e.target.value)}
                      placeholder='Search for movies, series, etc..'/>
                    <img  
                    src={vector} 
                    className='icon' 
                    alt="search"
                    onClick={()=> searchMovies(searchTerm)}
                    />
                </div>
                </div>

{movies?.length>0 ? (
<div className='content'>
  {movies.map((movie)=>(
  <MovieCard movie={movie}/>
  ))}

</div>
):(
  <div className='empty'>
  <h2>No Movie Found</h2>
  </div>
)}

   </div>
  );
}

export default App;