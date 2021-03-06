import React,{useState,useEffect, useCallback} from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movie,setMovie] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [error,setError] = useState(null);
  
  const fetchMovieHandler = useCallback(async ()=>{
    setIsLoading(true);
    setError(null);
    /*   --- Method -1 ---
      fetch('https://swapi.dev/api/films')
      .then((response)=> {  `
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map(movieData => {
          return {
            id:movieData.episode_id,
            title: movieData.title,
            openingText:movieData.openingText,
            releaseDate:movieData.opening_crawl
          };         

        });
        setMovie(transformedMovies);
      });
    */
   /*   Method-2 */
   try {

  
   const response = await fetch('https://swapi.dev/api/films'); 
   if(!response.ok){
     throw new Error("Somthing went Wrong");
   }
   const data = await response.json();
   const transformedMovies = data.results.map(movieData => {
    return {
      id:movieData.episode_id,
      title: movieData.title,
      openingText:movieData.openingText,
      releaseDate:movieData.opening_crawl
    };         

  });
  setMovie(transformedMovies);
  
    } catch (error) { setError(error.message)}
    setIsLoading(false);
  
  },[]);
  useEffect(()=>{
    fetchMovieHandler();
  },[fetchMovieHandler]);
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movie.length>0 && <MoviesList movies={movie} /> }
        {!isLoading && movie.length===0 && <p>Found No Movie!</p> }
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading....</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
