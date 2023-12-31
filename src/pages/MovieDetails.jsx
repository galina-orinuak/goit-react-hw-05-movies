import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'service/Api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    getMovieById(movieId)
      .then(data => {
        setMovieInfo(data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setShowLoader(false);
      });
  }, [movieId]);

  return (
    <>
      {!showLoader && <Loader />}
      {movieInfo && <MovieCard movieInfo={movieInfo} />}
    </>
  );
};

export default MovieDetails;
