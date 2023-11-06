import { useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Location } from "react-router-dom";
import styles from './MovieCard.module.css'


export const MovieCard =({movieInfo})=>{
  
const location = useLocation();
const backLInkHref = useRef(location.state?.from ?? '/')


    
    let nameOfMovie = null;
        if (movieInfo.title) {
          nameOfMovie = movieInfo.title;
        } else {
          nameOfMovie = movieInfo.name;
        }

        let userScore = Number(movieInfo.vote_average * 10).toFixed(0);
        let genres = movieInfo.genres.map(genre => genre.name).join(', ')

    return <><div>
        <div>
          <NavLink to={backLInkHref.current}>GO BACK</NavLink></div>
        <div><img srcSet={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`} alt="" /></div>
        <div>
            <h1>{nameOfMovie}</h1>
            <p>User Score: {userScore}%</p>
            <h2>Overwiev</h2>
            <p>{movieInfo.overwiev}</p>
            <h2>Genres</h2>
            <p>{genres}</p>
            <div>
               <h2>Additional information</h2>
               <NavLink to={`/movies/${movieInfo.id}/cast`} className={styles.cast}>Casts</NavLink>
               <NavLink to={`/movies/${movieInfo.id}/reviews`} className={styles.rewievs}>Reviews</NavLink>
            </div>
            <Outlet/>
        </div>
    </div>
    </>
}