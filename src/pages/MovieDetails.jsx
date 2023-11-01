import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'components/Api';
import { MovieCard } from 'components/MovieCard/MovieCard';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  // useEffect(() => {
  //     const params = `movie/${movieId}`;
  //     async function fetch() {
  //       try {
  //         const { data } = await getMovies(params);
  //         setMovieInfo(data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //     fetch();
  //   }, [movieId]);

  useEffect(() => {
    getMovieById(movieId).then(data => {
  
      setMovieInfo(data);
    });
  }, [movieId]);

  return <>{movieInfo && <MovieCard movieInfo={movieInfo} />}</>;
};
