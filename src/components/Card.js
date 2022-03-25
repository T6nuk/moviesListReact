import React from "react";

export default function Card(props) {
    return <div className="gallery_item">
      <h3>{props.movieName}</h3>
      <div className="gallery_item_image">
          <img src={props.mSrc} alt={props.movieName}/>
      </div>
      
  </div>
}