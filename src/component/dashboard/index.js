import React, { useState, useEffect } from "react";
import { Card } from "..";
import "./DashBoard.style.css";
const DashBoard = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [getData, setgetData] = useState([]);
  const groupData=(finalData)=>{
    let array = [];
          let array1 = [];
         
          console.log(finalData);
  
          for (let i = 0; i < finalData.length/2; i++) {
            array.push(finalData[i]);
          }
          setData(array);
  
          for (let j = Math.round(finalData.length/2); j < finalData.length; j++) {
            array1.push(finalData[j]);
          }
         setData1(array1);
  }
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) =>
      {
        res.json().then((finalData) => {
          // console.log("json", json.results);
          groupData(finalData.results);
          setgetData(finalData.results);
        });
      }
      );
  },[]);
  const filterData=(search)=>{
    search=search.toLowerCase();
    let result=getData.filter((d)=>{
      let str=d.name;
      str=str.toLowerCase();
     return str.includes(search)
    });
    groupData(result);
  }
  return (
    <>
      <form>
        <label>
          TO Get Ricky:
          <input type="text"  autoComplete="true" onChange={(event) => {
            event.preventDefault();
            filterData(event.target.value);
          }} name="name" />
        </label>
      </form>
      <span className="heading">The Rick and Morty API</span>

      <div className="main">
        <div className="container">
          {data.length>0 && data.map((row) => {
            return <Card data={row} />;
          })}
        </div>
        <div className="container1">
          {data1.length>0 && data1.map((row) => {
            return <Card data={row} />;
          })}
        </div>
      </div>
    </>
  );
};

export default DashBoard;
