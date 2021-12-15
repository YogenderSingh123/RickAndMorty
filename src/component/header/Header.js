import React from 'react'
import './Header.style.css'
import logo from '../../assets/logo.png';
function Header() {
    return (
        <div>
            <img src={logo} width={40} height={40} style={{margin:"10px 0px 10px 30px"}}/>
            <ul style={{float:"right"}}>
             <li><a href='#'>Docs</a></li>
            <li><a href="#about">About</a></li>
            <li>
                <a className='helpUS' href='#'>Help US!</a>
            </li>
        </ul>
        </div>
    )
}

export default Header
