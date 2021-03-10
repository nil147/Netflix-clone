import React from "react";
import request from "./requests";
import './App.css';
import Row from "./components/Row";
import Banner from "./components/Banner";
import Nav from "./components/Nav";


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row isLargeRow title="Most Popular" fetchUrl={request.fetchPopular} />
      <Row title="Latest" fetchUrl={request.fetchToprated} />
      <Row title="Now Playing" fetchUrl={request.fetchNow} />
      <Row title="Up Coming" fetchUrl={request.fetchComing} />
    </div>
  );
}

export default App;
