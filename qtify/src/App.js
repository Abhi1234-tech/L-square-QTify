import React from "react";
import { Header } from "./header.js";
import './App.css';
import {Card} from "./card.js"

function App() {
  return (
    <div className="App">
    
      <Header />
      <div className="Hero-Section">
        <div className="Hero-text">
        <p>     100 Thousand Songs,adfree</p>
        <p>Over thousands podcast episodes</p>
        </div>
        <div className="Hero-img">
          <img src="https://l-square-q-tify-pearl.vercel.app/static/media/hero-image.668784662a5b69d067ee.png"/>
        </div>
      </div>
      <div className="card-main">
       <h4>Top Albums</h4>
        <Card/>
      </div>
    </div>
  );
}

export default App;
