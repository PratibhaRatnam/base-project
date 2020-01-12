import React from 'react';
import './App.css'
import {Link} from 'react-router-dom';
import { whileStatement } from '@babel/types';
import { createBrowserHistory } from 'history';
let history = createBrowserHistory();

function Nav(){
      
    const navStyle = {
        color: 'white'
    }

    console.log()

    return(
    <nav>
       <Link style={navStyle} to='/'> <h3>Logo</h3></Link>
       <button onClick={()=>{history.push("/home")}}>Home</button>
        <ul className="nav-links">
            <Link style={navStyle} to='/about'><li>about</li></Link>
            <Link style={navStyle} to='/shop'><li>shop</li></Link>
        </ul>
    </nav>
    );
}
//https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get
export default Nav;