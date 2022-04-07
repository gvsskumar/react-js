import React,{useState,useEffect, useCallback} from 'react';
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
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

  
   const response = await fetch('https://rjs-movielist-default-rtdb.firebaseio.com/movies.json'); 
   if(!response.ok){
     throw new Error("Somthing went Wrong");
   }
   const data = await response.json();
   const loadedMovies = [];
    for(const key in data){
      loadedMovies.push({
        id:key,
        title : data[key].title,
        openingText : data[key].openingText,
        releaseDate : data[key].releaseDate
      })
    }
   /*const transformedMovies = data.results.map(movieData => {
    return {
      id:movieData.episode_id,
      title: movieData.title,
      openingText:movieData.openingText,
      releaseDate:movieData.opening_crawl
    };         

  }); */
  setMovie(loadedMovies);
  
    } catch (error) { setError(error.message)}
    setIsLoading(false);
  
  },[]);
  useEffect(()=>{
    fetchMovieHandler();
  },[fetchMovieHandler]);
  async function addMovieHandler(movie) {
  const response = await  fetch('https://rjs-movielist-default-rtdb.firebaseio.com/movies.json',{
      method : "POST",
      body : JSON.stringify(movie),
      headers : {
        'Content-Type' : 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  let content = <p>Found no movies.</p>;

  if (movie.length > 0) {
    content = <MoviesList movies={movie} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
       {content}
      </section>
    </React.Fragment>
  );
}

export default App;
