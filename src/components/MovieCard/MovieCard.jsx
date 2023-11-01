export const MovieCard =({movieInfo})=>{
    console.log('movieInfo', movieInfo)

    let nameOfMovie = null;
        if (movieInfo.title) {
          nameOfMovie = movieInfo.title;
        } else {
          nameOfMovie = movieInfo.name;
        }

        let userScore = Number(movieInfo.vote_average * 10).toFixed(0);
        let genres = movieInfo.genres.map(genre => genre.name).join(', ')

    return <><div>
        <div><p>GO BACK</p></div>
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
               <p>Casts</p>
               <p>Reviews</p>
            </div>
        </div>
    </div>
    </>
}