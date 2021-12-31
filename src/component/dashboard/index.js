import React, { useState, useEffect } from "react";
import { Card } from "..";
import "./DashBoard.style.css";
const DashBoard = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json.results);
        let array=[]
        let array1=[]
        for (let i =0 ; i<10;i++)
        {
          array.push(json.results[i])
        }
        setData(array)

        for (let j =10 ; j<20;j++)
        {
          array1.push(json.results[j])
        }
        setData1(array1)
      console.log('data',data)
      console.log('data1',data1)
    
      //  setData(groupedData);
      
      });
     
  },[] );
  return (
    <>
      <span className="heading">The Rick and Morty API</span>
    <div className="main">
      <div className="container">
      {data.map((row) => { 
       return <Card data={row} />;
          })}
      </div>
      <div className="container1">
      {data1.map((row) => { 
       return <Card data={row} />;
          })}
      </div>

   
     </div>
  
    </>
  );
};

export default DashBoard;
