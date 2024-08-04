import React, {useState} from "react";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';


function Filter ({products, toFilterByTitle, manufacturers}) {

    const [searchedBrandID, setSearchBrandID] = useState('');    

    return(
        <div>
              <Popup trigger={<button> Filter </button>} position="right top">
              <div>
              <div>
                <span>Product Title</span>
                <input type="text" placeholder="title..." id="title"></input>
                </div>
                <select onChange={(e) => setSearchBrandID(e.target.value)}> 
                        <option value={0}>Select brand:</option>
                        <option value={1}>Nike</option>
                        <option value={2}>Adidas</option>
                        <option value={3}>Puma</option>
                        <option value={4}>Fila</option>
                        <option value={5}>Armani</option>
                        <option value={6}>Gucci</option>
                        <option value={7}>Zara</option>
                        <option value={8}>Lacoste</option>
                        <option value={9}>Louis Vuitton</option>
                        <option value={10}>Balenciaga</option>
                    </select>
                    <button onClick={() => {
                        let searchedTitle = document.getElementById("title").value;
                        console.log(searchedTitle)
                        toFilterByTitle(searchedTitle)
                    }}>Submit</button>
                    </div>
              </Popup>
    </div>

    )
}

export default Filter;
