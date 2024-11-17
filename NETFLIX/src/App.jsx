import './App.css'

import InstagramIcon from "@mui/icons-material/Instagram";
import Home from './Home/Home';
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

function App() {
  
  return (
    <div className="app">
      
      <Home/>
      
      
     
    </div>
  );
}

export default App
// npm install @mui/icons-material @mui/material @emotion/styled @emotion/react


// import "./App.css";
// import Banner from "./Banner";
// import Nav from "./Nav";
// import Row from "./Row";

// function App() {
//   return (
//     <div className="App">
//       <Nav />
//       <Banner />
//       <Row
//         title="NETFLIX ORIGINALS"
//         fetchUrl="fetchNetflixOriginals"
//         isLargeRow={true}
//       />
//       <Row title="Trending Now" fetchUrl="fetchTrending" />
//       <Row title="Top Rated" fetchUrl="fetchTopRatedMovies" />
//       <Row title="Action Movies" fetchUrl="fetchActionMovies" />
//       <Row title="Comedy Movies" fetchUrl="fetchComedyMovies" />
//       <Row title="Horror Movies" fetchUrl="fetchHorrorMovies" />
//       <Row title="Romance Movies" fetchUrl="fetchRomanceMovies" />
//       <Row title="Documentaries" fetchUrl="fetchDocumentaries" />
//     </div>
//   );
// }