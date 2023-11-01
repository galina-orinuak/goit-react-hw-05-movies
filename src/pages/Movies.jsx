import { SearchingForm } from "components/SearchingForm/SearchingForm";
import { Title } from "components/Title/Title";
import { useState, useEffect } from "react";
import { findMovie } from "components/Api";
import { MoviesLayout } from "components/MoviesLayout/MoviesLayout";
// import { useSearchParams } from "react-router-dom";
// import { toast } from 'react-toastify';


export const Movies =()=>{

const [query, setQuery]= useState('');
const [arrayOfMovies, setArrayOfMovies]= useState(null);
// const [searchParams] =useSearchParams();
// const query = searchParams.get('query')


// useEffect(() =>{

//  if (query){
//     findMovie(res).then(data =>{
//         setArrayOfMovies(data.results)
//     })
//  }


// }, [query])


function onSubmitForm (res) {
setQuery(res);

findMovie(res).then(data =>{
    setArrayOfMovies(data.results)
})
      };


//     useEffect(() =>{
//         if (query === '') return;
//         setQuery(query);
//         const params = 'search/movie';
//     const queryParams = `query=${query}`;

//     async function fetch() {
//         try {
//           const { data } = await getMovies(params, queryParams);
//           setListOfMovies(data.results);
  
//           if (data.results.length === 0) {
//             toast('Sorry, but nothing found'); 
//             return;
//           }
//         } catch (error) {
//           console.log(error);
//         }
//       }
//       fetch();
//     }, [query]);

//     const onSubmitForm = event => {
//         event.preventDefault();
//         const searchQuery = event.target.elements.movies.value;
//         setQuery({ query: searchQuery });
//       };






    return (<div>
        <Title text="search movie"/>
        <SearchingForm onSubmit={onSubmitForm}/>
        {arrayOfMovies && <MoviesLayout arrayOfMovies={arrayOfMovies}/>}
        </div>);
}