import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

  export default function CartWidget () {   
  

    const {totalItems} = useContext (CartContext)


    
  
    return <> 
          { totalItems? 
               <a class="btn-floating pulse"><i class="material-icons">shopping_cart</i></a> 
            :   null }

      </>   }