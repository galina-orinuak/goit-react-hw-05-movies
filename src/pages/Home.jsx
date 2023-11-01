import { getPopularMovies } from 'components/Api';
import { MoviesLayout } from 'components/MoviesLayout/MoviesLayout';
import { Title } from 'components/Title/Title';
import { useEffect, useState } from 'react';

// const params = 'trending/movie/day';

export const Home = () => {
  const [arrayOfMovies, setArrayOfMovies] = useState(null);

  useEffect(() => {
    getPopularMovies().then( data => {
      setArrayOfMovies(data.results)
    })
  },[])

  // useEffect(() => {
  //   async function fetch() {
  //     try {
  //       const { data } = await getMovies(params);
  //       console.log(data);
  //       setArrayOfMovies(data.results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetch();
  // }, []);

  return (
    <>
      {!arrayOfMovies && <p>NO RESULTS</p>}
      {arrayOfMovies && <Title text='Trending today' />}
      {arrayOfMovies && <MoviesLayout arrayOfMovies={arrayOfMovies} />}
      <div>HOME</div>
    </>
  );
};
