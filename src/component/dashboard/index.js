import React, { useState, useEffect } from 'react';
import { Card } from '..';
import './DashBoard.style.css';
const DashBoard = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{

      fetch(
        "https://rickandmortyapi.com/api/character")
                    .then((res) => res.json())
                    .then((json) => {
                       console.log('json',json.results)
                       setData(json.results)
                    })
    },[])
    return ( 
      <div className='main'>
            <span className="heading">
            The Rick and Morty API
        </span>
        <div className='cards'>
        {data.map((d)=>{
            return <div><Card data={d}/></div>
        })}
        </div>
      </div>
     );
}
 
export default DashBoard;