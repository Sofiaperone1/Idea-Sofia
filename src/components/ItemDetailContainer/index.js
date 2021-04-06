import React , {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail'

const datos1 = 
        {id:1, 
        nombre:"Velas", 
        precio:200, 
        pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_859251-MLA26646040874_012018-O.webp" ,
        descripcion: "Para todos los ambientes de tu casa. Disponible en fragancia limon, pino y lavanda"  }


const getItems = () => { return new Promise ( (resolve, reject)=> { 

            setTimeout ( ()=> { resolve (datos1) } , 3000  )  }  )  }

        
       
      
     export default function ItemDetailContainer() {

    const [datosDelItem, setDatosDelItem] = useState ({}) ;


useEffect ( ()=> { getItems ()
                  .then ( (datos1) => {setDatosDelItem (datos1)} )


                        }, []     )                                                           

return <ItemDetail item= {datosDelItem} />   }                      