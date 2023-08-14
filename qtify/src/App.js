import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "./header.js";
import { Card } from "./card.js";
import './App.css';

function App() {
  const [topdata, setTopdata] = useState([]);
  const [showAllCards, setShowAllCards] = useState(false);

  useEffect(() => {
    axios.get("https://qtify-backend-labs.crio.do/albums/top")
      .then(response => {
        setTopdata(response.data);
      })
      .catch(error => {
        console.error("Error fetching top albums:", error);
      });
  }, []);

  const toggleShowAllCards = () => {
    setShowAllCards(!showAllCards);
  };

  return (
    <div className="App">
      <Header />
      <div className="Hero-Section">
        <div className="Hero-text">
          <p>100 Thousand Songs, ad-free</p>
          <p>Over thousands podcast episodes</p>
        </div>
        <div className="Hero-img">
          <img src="https://l-square-q-tify-pearl.vercel.app/static/media/hero-image.668784662a5b69d067ee.png" alt="Hero" />
        </div>
      </div>
      <div className="card-main">
        <div className="card-headers">
          <h4>Top Albums</h4>
          <p
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
            onClick={toggleShowAllCards}
          >
            {showAllCards ? "Collapse" : "Show More"}
          </p>
        </div>
        <Card topdata={showAllCards ? topdata : topdata.slice(0, 12)} />
      </div>
    </div>
  );
}

export default App;
