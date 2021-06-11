import React from "react";
import NavBar from "./Component/NavBar/NavBar";
import "./App.css";
import {originals,actions,ComedyMovies,HorrorMovies,ActionMovies,RomanceMovies,Documentaries} from './urls'
import Banner from "./Component/Banner/Banner";
import RowPost from "./Component/RowPost/RowPost";
import Footer from "./Component/Footer/footer"
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals"/>
      <RowPost url={actions} title="Action" isSmall />
      <RowPost url={ComedyMovies} title="Comedy Movies" isSmall />
      <RowPost url={HorrorMovies} title="Horror Movies" isSmall />
      <RowPost url={ActionMovies} title="Action Movies" isSmall />
      <RowPost url={RomanceMovies} title="Romance Movies" isSmall />
      <RowPost url={Documentaries} title="Documentaries" isSmall />
      <Footer />
    </div>
  );
}

export default App;
