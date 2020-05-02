import React from "react";

function MovieDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <ul>
        <li>Director(s): {props.director}</li>
        <li>Genre: {props.genre}</li>
        <li>Released: {props.released}</li>
      </ul>
    </div>
  );
}

export default MovieDetail;