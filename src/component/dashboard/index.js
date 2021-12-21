import React, { useState, useEffect } from "react";
import { Card } from "..";
import "./DashBoard.style.css";
const DashBoard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json.results);
        let groupedData = [];

        for (let i = 0; i < json.results.length; i++) {
          if (i + 1 < json.results.length) {
            groupedData.push([json.results[i], json.results[i + 1]]);
            i++;
          } else {
            groupedData.push([json.results[i]]);
          }
        }
        setData(groupedData);
        console.log("grouped data", groupedData);
      });
  }, []);
  return (
    <div className="main">
      <span className="heading">The Rick and Morty API</span>
      {data.map((row) => {
        return (
          <div className="cards">
            {row.map((d) => {
              return <Card data={d} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default DashBoard;
