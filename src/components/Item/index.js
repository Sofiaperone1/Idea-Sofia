import React from 'react';

export const Item = ({item}) => {

    return (            

<div class="row">
    <div class="col s8 m3">
      <div class="card">
        <div class="card-image">
        <img src={item.pictureUrl} alt ="aca va una img"  style= { {width: "21rem"} } /> 
         
        </div>
        <div class="card-content">
        <h5 class="card-title"> {item.nombre} </h5>
          <p> ${item.precio} </p>
        </div>
      </div>
    </div>
  </div>




    )







}
export default Item;