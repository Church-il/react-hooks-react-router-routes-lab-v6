import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies") // Fetch movies from json-server
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <div>
          {movies.map(movie => (
            <MovieCard key={movie.id} title={movie.title} movieId={movie.id} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
