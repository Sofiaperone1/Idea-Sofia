import React, { useContext, useEffect, useState } from "react"
import {Link} from "react-router-dom" 
import { CartContext } from "../../context/CartContext"



export const Cart = () => {       
    
    const {cart, addItem, removeItem, clear, isInCart  } = useContext (CartContext)

    const [totalItems, setTotalItems] = useState (0) ;
    const [totalPrecio, setTotalPrecio] = useState (0) ;

    useEffect (()=> { 
                    let precio = 0;
                    let totItems = 0;

                            for (let cartItem of cart) {  totItems += cartItem.quantity ;
                                                          precio +=   cartItem.quantity * cartItem.item.precio ;
                                                         } 
                            
                            setTotalItems (totItems);
                            setTotalPrecio (precio) 
                             }, [cart] )

                return (
                    <div> 
                       
                       { !cart.length ?   
                                 <h2> No hay items en el carrito <Link to="/"> Ir al home  </Link> </h2>
                        : ( <> 

                            {cart.map (cartItem =>
                                   
                                    <div key={cartItem.item.id} >
                                    <div>Titulo:{cartItem.item.nombre}  </div>  
                                    <div>Cantidad:{cartItem.quantity} </div>
                                    <button onClick={() => removeItem (cartItem.item.id) }>Borrar</button>
                                    </div>
                                   
                                )}
                           

                                <div>Total:{totalItems} y {totalPrecio}  </div>

                            </>
                           ) }  )
                        

      

                       
                    </div>




                ) }
                       
                        
                



