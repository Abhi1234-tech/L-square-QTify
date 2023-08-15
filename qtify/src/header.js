import React, { useState } from "react";
import "./header.css";

function Header() {
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    
    console.log("Search Query:", searchQuery);
  };

  return (
    <div className="header">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0GpgTZdIlebkTxiAfBcD_Isp6DrWaSreT9w&usqp=CAU" alt="Logo" />
        <p>Q Tify</p>
      </div>
      <div className="searchbar">
        <nav className="navbar navbar-custom">
          <div className="container-fluid">
            <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search an album of your choice"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                <svg
                  fill="black"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" />
                </svg>
              </button>
            </form>
          </div>
        </nav>
      </div>
      <div className="feedback">
        <button>Give Feedback</button>
      </div>
    </div>
  );
}

export { Header };
