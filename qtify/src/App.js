import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "./header.js";
import { Card } from "./card.js";
import './App.css';

function App() {
  const [topdata, setTopdata] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [showAllTopCards, setShowAllTopCards] = useState(false);
  const [showAllNewCards, setShowAllNewCards] = useState(false);
  const [showAllSongs, setShowAllSongs] = useState(false);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(""); // Store the selected genre

  useEffect(() => {
    axios.get("https://qtify-backend-labs.crio.do/albums/top")
      .then(response => {
        setTopdata(response.data);
      })
      .catch(error => {
        console.error("Error fetching top albums:", error);
      });

    axios.get("https://qtify-backend-labs.crio.do/albums/new")
      .then(response => {
        setNewAlbums(response.data);
      })
      .catch(error => {
        console.error("Error fetching new albums:", error);
      });

    axios.get("https://qtify-backend-labs.crio.do/songs")
      .then(response => {
        setSongs(response.data);
      })
      .catch(error => {
        console.error("Error fetching songs:", error);
      });

    axios.get("https://qtify-backend-labs.crio.do/genres") // Fetch genres data
      .then(response => {
        setGenres(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching genres:", error);
      });
  }, []);

  const toggleShowAllTopCards = () => {
    setShowAllTopCards(!showAllTopCards);
  };

  const toggleShowAllNewCards = () => {
    setShowAllNewCards(!showAllNewCards);
  };

  const toggleShowAllSongs = () => {
    setShowAllSongs(!showAllSongs);
  };

  const filteredSongs = selectedGenre
    ? songs.filter(song => song.genre.key === selectedGenre)
    : songs;

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
            onClick={toggleShowAllTopCards}
          >
            {showAllTopCards ? "Collapse" : "Show More"}
          </p>
        </div>
        <Card topdata={showAllTopCards ? topdata : topdata.slice(0, 6)} />
      </div>
      <div className="card-new">
        <div className="card-headers">
          <h4>New Albums</h4>
          <p
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
            onClick={toggleShowAllNewCards}
          >
            {showAllNewCards ? "Collapse" : "Show More"}
          </p>
        </div>
        <Card topdata={showAllNewCards ? newAlbums : newAlbums.slice(0, 6)} />
      </div>
      <div className="card-songs">
        <div className="card-headers">
          <h4>Songs</h4>
          <div className="genre-buttons">
            <button
              className={`genre-button ${selectedGenre === "" ? "selected" : ""}`}
              onClick={() => setSelectedGenre("")}
            >
              All
            </button>
            {genres.map(genre => (
              <button
                key={genre.key}
                className={`genre-button ${selectedGenre === genre.key ? "selected" : ""}`}
                onClick={() => setSelectedGenre(genre.key)}
              >
                {genre.label}
              </button>
            ))}
          </div>
          <p
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
            onClick={toggleShowAllSongs}
          >
            {showAllSongs ? "Collapse" : "Show More"}
          </p>
        </div>
        <Card topdata={showAllSongs ? filteredSongs : filteredSongs.slice(0, 6)} />
      </div>
    </div>
  );
}

export default App;
