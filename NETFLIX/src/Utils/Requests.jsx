import React from 'react';
//API_KEY=AIzaSyCX1KndO_Vx10gIj2OwJ8RzXEcY9ZM6-5w =for youtube

const API_KEY = import.meta.env.VITE_API_KEY;

const Requests= {
   
  fetchTrending: ``,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    
}

export default Requests;
//7b73d43ab52dd91db8e3f23a0184ffdc= my API_KEY for netflix 7b73d43ab52dd91db8e3f23a0184ffdc

//https://www.themoviedb.org/


// const base_url = "https://api.themoviedb.org/3";

