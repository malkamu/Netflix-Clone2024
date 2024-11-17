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

// const requests = {
//   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//   fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
// };

// const movies = (word) => {
//   console.log(requests[word]);
//   return axios
//     .get(`${base_url}${requests[word]}`)
//     .then((res) => {
//       // console.log('hello');
//       return res.data;
//     })
//     .catch((error) => console.log(error));
// };
// router.get(`/api/:searchTerm`, async (req, res) => {
//   try {
//     // console.log(req.params.searchTerm)
//     res.json(await movies(req.params.searchTerm));
//   } catch (err) {
//     res.json(err);
//   }
// });
// module.exports = router;


//Server.js
// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const app = express();
// const port = process.env.PORT || 4000;
// // const routes = require('./server/routes')
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cors());
// app.use(require("./server/routes"));
// app.listen(port, () => console.log(`Listening at http://localhost:${port}`));