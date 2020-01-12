import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './App.css'

function ItemDetail({match}){

    const [item, setItem] = useState({
        images: {}
    });

    useEffect(()=>{
        fetchItem();
    })

    const fetchItem = async() =>{
        const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/store/get?ids=${match.params.id}`)
        const item = await fetchItem.json();
        setItem(item.data[0].item.images.icon)
        console.log(item.data[0].item.images.icon)
    }
 
    return(
        <div>
           <h1>{item.lanuage}</h1>
           <img src={item} alt=""/>
        </div>
    );
}

export default ItemDetail;