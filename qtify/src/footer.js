import React from "react";
import "./footer.css";

function Footer({searchResults}) {
    return(
        <div className="footer">
            <div className="song-card">
            < img src="https://images.pexels.com/photos/1995730/pexels-photo-1995730.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"/>   
            </div>
            <div className="song-text">
                <h5>Song Name</h5>
                <p>Album Name</p>
            </div>
            <div className="play">
                <div className="play-pause">
                    <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX26341451.jpg"/>
                     
                </div>
                <div className="progress">
  <div
    className="progress-bar bg-success"
    role="progressbar"
    style={{ width: "25%" }}
    aria-valuenow={44}
    aria-valuemin={0}
    aria-valuemax={100}
  />
</div>
            </div>

        </div>

    );
}

export default Footer;