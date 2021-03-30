import React, { useEffect, useState } from "react";
import { ItemCount } from "../ItemCount";
import {ItemList} from "../ItemList/index";



export default function ItemListContainer () {

  const [items, setItems] = useState ([])

  
  useEffect ( ()=> { 

    const promesa =new Promise ( (resolve, reject)=> { 

            setTimeout ( ()=> { resolve ( [
                             
              {id:1, nombre:"Velas", precio:200, pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_859251-MLA26646040874_012018-O.webp" },
              {id:2, nombre:"Sahumerios", precio:150, pictureUrl:"http://d3ugyf2ht6aenh.cloudfront.net/stores/604/489/products/sahucanva1-cfacf168fcd896de0715221684219844-640-0.jpg" },
              {id:3, nombre:"Sales", precio:350, pictureUrl:"https://http2.mlstatic.com/sales-de-bano-D_NQ_NP_822421-MLM20754894508_062016-O.jpg" },
              {id:4, nombre:"Bombitas", precio:350, pictureUrl:"https://th.bing.com/th/id/OIP.JuEZdzo9OFiu_JUNbwVPigHaFj?pid=ImgDet&rs=1" },
              {id:5, nombre:"Carbones", precio:350, pictureUrl:"https://www.eldurapi.be/cms/CustomMedia/photos/Pages/es-eldurapi-AROMATICO-CARBON-DE-COCO_389_2.jpg" }
              
             
            
                                                
                                                ])    } , 3000  )
       }  )

       promesa.then ( (resultado)=> { setItems (resultado) } )

                   

       } )

return <div class= "itemLista" >
    
        <ItemList items={items}> </ItemList>

        <ItemCount stock="8" inicial="1"></ItemCount>
  
       </div>




;
}

