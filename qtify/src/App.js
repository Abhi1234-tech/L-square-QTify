import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "./header.js";
import { Card } from "./card.js";
import './App.css';
import Faq from "./faq.js"
import Footer from "./footer.js"

function App() {
  const [topdata, setTopdata] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [topCurrentIndex, setTopCurrentIndex] = useState(0);
  const [newCurrentIndex, setNewCurrentIndex] = useState(0);
  const [songCurrentIndex, setSongCurrentIndex] = useState(0);
  const [showAllTopCards, setShowAllTopCards] = useState(false);
  const [showAllNewCards, setShowAllNewCards] = useState(false);
  const [showAllSongs, setShowAllSongs] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios.get("https://qtify-backend-labs.crio.do/albums/top")
      .then(response => setTopdata(response.data))
      .catch(error => console.error("Error fetching top albums:", error));

    axios.get("https://qtify-backend-labs.crio.do/albums/new")
      .then(response => setNewAlbums(response.data))
      .catch(error => console.error("Error fetching new albums:", error));

    axios.get("https://qtify-backend-labs.crio.do/songs")
      .then(response => setSongs(response.data))
      .catch(error => console.error("Error fetching songs:", error));

    axios.get("https://qtify-backend-labs.crio.do/genres")
      .then(response => setGenres(response.data.data))
      .catch(error => console.error("Error fetching genres:", error));
  }, []);

  const toggleShowAllTopCards = () => setShowAllTopCards(!showAllTopCards);
  const toggleShowAllNewCards = () => setShowAllNewCards(!showAllNewCards);
  const toggleShowAllSongs = () => setShowAllSongs(!showAllSongs);

  const handleMoveLeft = (setter, currentIndex) => () => setter(prevIndex => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  const handleMoveRight = (setter, currentIndex, maxIndex) => () => setter(prevIndex => (prevIndex < maxIndex ? prevIndex + 1 : prevIndex));

  const maxTopIndex = topdata.length - 1;
  const maxNewIndex = newAlbums.length - 1;
  const maxSongIndex = songs.length - 1;

  const filteredSongs = selectedGenre
    ? songs.filter(song => song.genre.key === selectedGenre)
    : songs;

  return (
    <div className="App">
      <Header />
      <div className="card-main">
        <div className="card-headers">
          <h4>Top Albums</h4>
          <p data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" onClick={toggleShowAllTopCards}>
            {showAllTopCards ? "Collapse" : "Show More"}
          </p>
        </div>
        <Card topdata={showAllTopCards ? topdata : topdata.slice(topCurrentIndex, topCurrentIndex + 6)} />
        <div className="card-controls">
          <button onClick={handleMoveLeft(setTopCurrentIndex, topCurrentIndex)}>&lt;</button>
          <button onClick={handleMoveRight(setTopCurrentIndex, topCurrentIndex, maxTopIndex)}>&gt;</button>
        </div>
      </div>
      <div className="card-new">
        <div className="card-headers">
          <h4>New Albums</h4>
          <p data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" onClick={toggleShowAllNewCards}>
            {showAllNewCards ? "Collapse" : "Show More"}
          </p>
        </div>
        <Card topdata={showAllNewCards ? newAlbums : newAlbums.slice(newCurrentIndex, newCurrentIndex + 6)} />
        <div className="card-controls">
          <button onClick={handleMoveLeft(setNewCurrentIndex, newCurrentIndex)}>&lt;</button>
          <button onClick={handleMoveRight(setNewCurrentIndex, newCurrentIndex, maxNewIndex)}>&gt;</button>
        </div>
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
          <p data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" onClick={toggleShowAllSongs}>
            {showAllSongs ? "Collapse" : "Show More"}
          </p>
        </div>
        <Card topdata={showAllSongs ? filteredSongs : filteredSongs.slice(songCurrentIndex, songCurrentIndex + 6)} />
        <div className="card-controls">
          <button onClick={handleMoveLeft(setSongCurrentIndex, songCurrentIndex)}>&lt;</button>
          <button onClick={handleMoveRight(setSongCurrentIndex, songCurrentIndex, maxSongIndex)}>&gt;</button>
        </div>
      </div>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
