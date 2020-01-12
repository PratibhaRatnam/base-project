import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './App.css'

function Shop(){

    useEffect(()=>{
        fetchItems();
    })

    const [items, setItems] = useState([]);
    const fetchItems = async() =>{
        const data = await fetch('https://fortnite-api.theapinetwork.com/store/get')
        const items = await data.json();
        setItems(items.data)
        console.log(items.data)
    }
    return(
        <div>
            {items.map(i=>(
                <h1 key={i.item.itemId}>
                    <Link to={`/shop/${i.itemId}`}>{i.item.name}</Link>
                    </h1>
            ))}
        </div>
    );
}

export default Shop;