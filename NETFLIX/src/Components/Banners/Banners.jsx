import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "./Banners.css"

const Banner = () => {
  const [movie, setMovies] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchTopRatedMovies);
        console.log(axios.defaults.baseURL);
        // console.log(request);
        setMovies(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button play">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBotton" />
    </div>
  );
};

export default Banner;

// import React, { useEffect, useState } from 'react';
// import axios from "../../Utils/Axios"
// import Requests from '../../Utils/Requests';
// const Banners = () => {
//     const [Movie, setMovie]=useState({});

//    return(
//     <div>

//     </div>
//    )     }
// export default Banners;

//  useEffect(() => {
//    fetch(`https://api.themoviedb.org/3/${requests.fetchTrending}`)
//      .then((res) => res.json())
//      .then((data) => {
//        console.log(data.Requests);
//      });
//  }, []);

// import React, { useEffect, useState } from 'react'
// import "./Banner.css";
// import axios from "axios";

// const Banner = () => {
//     const [movie, setMovie] = useState({});

//     useEffect(() => {
//         (async () => {
//             try {
//                 const request = await axios.get(`http://localhost:4000/api/fetchNetflixOriginals`)
//                 setMovie(request.data.results[
//                     Math.floor(Math.random() * request.data.results.length)
//                 ]);
//             } catch (error) {
//                 console.log("error",error);
//             }
//         })()
//     }, []);

//     function truncate(str, n) {
//         return str?.length > n ? str.substr(0, n - 1) + '...' : str;
//     }

//     return (
//         <header
//             className="banner"
//             style={{
//                 backgroundSize: "cover",
//                 backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
//                 backgroundPosition: "center",
//             }}
//         >
//             <div className="banner__contents">
//                 <h1 className="banner__title">
//                     {movie?.title || movie?.name || movie?.original_name}
//                 </h1>
//                 <div className="banner__buttons">
//                     <button className="banner__button">Play</button>
//                     <button className="banner__button">My List</button>
//                 </div>
//                 <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
//             </div>
//             <div className="banner__fadeBottom" />
//         </header>
//     )
// }

// export default Banner
