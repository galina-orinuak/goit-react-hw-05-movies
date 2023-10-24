// import {  Route, Routes } from 'react-router-dom';

// import { Home } from 'pages/Home';
// import { Movies } from 'pages/Movies';
// import { MovieDetails } from 'pages/MovieDetails';

// export const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/movies" element={<Movies/>} />
//         <Route path="/movies/:movieId" element ={<MovieDetails/>}/>
//       </Routes>
//     </div>
//   )
// };
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};