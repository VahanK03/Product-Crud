import React, {useState} from "react";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';


function PopupDelete ({product, onDelete}) {

    const [isPopupVisible, setIsPopupVisible] = useState(false);
   
    return (
        <div>
           <button onClick={() => {setIsPopupVisible(true)}}>Delete</button>
           {isPopupVisible && (<div>
            <span>Are you sure?</span>
            <button onClick={() => {onDelete(product)}}>Yes</button>
            <button onClick={() => {setIsPopupVisible(false)}}>No</button>
           </div>)}
        </div>
    )
}

export default PopupDelete;