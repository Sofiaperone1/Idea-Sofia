import React from 'react'
import {ItemCount} from "../ItemCount"
import {useState} from 'react';  
import { Link } from 'react-router-dom';

export default function ItemDetail ( {item}  ) {
 
  const [count, setCount] = useState (0)
  
  const addHandler = (e) => {  console.log ("se agrego un item", e) ; setCount (e)   }

  return <ul>  
                  <li> {item.id} </li>
                  <li> {item.nombre} </li>
                  <li> ${item.precio}</li> 
                  <li>{item.descripcion}</li>
                  <li> <img src={item.pictureUrl} alt ="aca va una img"  style= { {width: "10rem"} } /></li>
                 
                 {count == 0 ? 
                     <ItemCount stock="8" inicial="0" onAdd= {addHandler} ></ItemCount> :
                    <Link to='/cart' >  <button> Finalizar compra </button> </Link> 
                }
                  
                  
    
    
  </ul> 
  
  }


