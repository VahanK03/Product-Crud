import React from "react";
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';

function PopupChange ({manufacturers, product, poxvac}) {

    return (
        <div>
            <Popup trigger={<button> Change </button>} position="right top">
                <div>
                    <div>
                    <span>Title:</span>
                    <input defaultValue={product.Title} type='text' id="title"></input>
                    </div>
                    <div>
                    <span>Description:</span>
                    <textarea defaultValue={product.Description} type='text' id="description"></textarea>
                    </div>
                    <div>
                    <span>Content:</span>
                    <textarea defaultValue={product.Content} type='textarea' id="content"></textarea>
                    </div>
                    <div>
                    <span>Price:</span>
                    <input defaultValue={product.Price} type='number' id="price"></input>
                    </div>
                    <div>
                    <div>
                    <span>Quantity:</span>
                    <input defaultValue={product.Quantity} type='number' id="quantity"></input>
                    </div>
                    <span>Brand:</span>
                    <select onChange={(e) => {product.Manufacturer = e.target.value}} >
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
                    <button onClick={ () => {
                         product.Title = document.getElementById('title').value;
                         product.Description = document.getElementById('description').value;
                         product.Content = document.getElementById('content').value;
                         product.Price = document.getElementById('price').value;
                         product.Quantity = document.getElementById('quantity').value; 
                         poxvac(product)
                    }
                        
                        }>Submit</button>
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export default PopupChange;