import React from "react";
import "./Card.Style.css";
function Card({ data }) {
  console.log(data);
  return (
    <div className="card">
      <div style={{ width: "50%" }}>
        <img
          src={data.image}
          style={{ width: "100%", height: "100%", borderRadius: "20px" }}
        />
      </div>
      <div style={{ textAlign: "left", width: "50%", padding: "15px" }}>
        <span className="name">{data.name}</span>
        <br />
        <span className="status">
          {data.status}-{data.species}
        </span>
        <br />
        <br />
        <span className="lastLocation">Last Known localtion:</span>
        <br />
        <span className="origin">{data.origin.name}</span>
        <br />
        <br />
        <span className="firstSeen">First seen in:</span>
        <br />
        <span>{data.location.name}</span>
      </div>
    </div>
  );
}

export default Card;
