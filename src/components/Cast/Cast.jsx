import { getMovieCast } from 'service/Api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import styles from './Cast.module.css';

import noActorPhoto from 'images/images.png';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    getMovieCast(movieId)
      .then(data => {
        setCast(data.cast);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setShowLoader(false);
      });
  }, [movieId]);

  return (
    <div>
      {!showLoader && <Loader />}
      {!cast && <p>there is no cast</p>}
      {cast && (
        <ul className={styles.cast}>
          {cast.map(actor => {
            let actorPhoto = noActorPhoto;
            if (actor.profile_path) {
              actorPhoto = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
            }

            return (
              <li key={actor.id}>
                <div>
                  <div>
                    <img
                      srcSet={actorPhoto}
                      alt=""
                      width="300px"
                      height="450px"
                    />
                  </div>
                  <div>
                    <p>{actor.name}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default Cast;
