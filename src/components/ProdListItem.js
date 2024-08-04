import React, {useState} from "react";
import PopupChange from "./PopupChange";
import PopupDelete from "./PopupDelete";

function ProdListItem ({product, onDelete, poxvac, manufacturers}) {
     return (
         <div className="prod-list-itemn">
             <ul>
                 <li>{product.Title}</li>
                 <li>{product.Description}</li>
                 <li>{product.Content}</li>
                 <li>{product.Price}</li>
                 <li>{product.Quantity}</li>
                 <PopupChange product={product} poxvac={poxvac} manufacturers={manufacturers}/>
                 <PopupDelete product={product} onDelete={onDelete}  />
             </ul>
         </div>
     );
}

export default ProdListItem;