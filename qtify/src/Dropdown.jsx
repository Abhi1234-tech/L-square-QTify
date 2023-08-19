import React from "react";
import "./Dropdown.css";
//Dropdown after putting input in searchbar with regards to API
function Dropdown({ searchResults }) {
  return (
    <div className="drop">
      {searchResults.map((e) => (
        <div key={e.id} className="thing">
          <img src={e.image} alt={e.title} />
          <p>{e.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Dropdown;
