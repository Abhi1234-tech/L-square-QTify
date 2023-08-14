import React from "react";
import "./card.css";

function Card({ topdata }) {
  return (
    <div className="container">
      <div className="row">
        {topdata.map((item) => (
          <div className="col-sm-4 col-md-3 col-lg-2" key={item.id}>
            <div className="card">
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-content">
                <div className="card-body">
                  <button className="btn btn-primary">
                    {item.follows} Follows
                  </button>
                </div>
                <div className="card-title">
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Card };
