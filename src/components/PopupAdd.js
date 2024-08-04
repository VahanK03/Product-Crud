import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React, { useState } from 'react';

function PopupAdd({ brands, products, onAdd }) {
  const newProd = {
    ID: Math.random(),
    Title: '',
    Description: '',
    Content: '',
    Price: 0,
    Manufacturer: 0,
    Quantity: 0,
  };

  return (
    <div>
      <Popup trigger={<button> Add </button>} position="right top">
        <div>
          <div>
            <span>Title:</span>
            <input placeholder="Title..." type="text" id="title"></input>
          </div>
          <div>
            <span>Description:</span>
            <textarea
              placeholder="Description..."
              type="text"
              id="description"
            ></textarea>
          </div>
          <div>
            <span>Content:</span>
            <textarea
              placeholder="Content..."
              type="textarea"
              id="content"
            ></textarea>
          </div>
          <div>
            <span>Price:</span>
            <input placeholder="Price..." type="number" id="price"></input>
          </div>
          <div>
            <div>
              <span>Quantity:</span>
              <input
                placeholder="Quantity..."
                type="number"
                id="quantity"
              ></input>
            </div>
            <span>Brand:</span>
            <select
              onChange={(e) => {
                newProd.Manufacturer = e.target.value;
              }}
            >
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
            <button
              onClick={() => {
                newProd.Title = document.getElementById('title').value;
                newProd.Description =
                  document.getElementById('description').value;
                newProd.Content = document.getElementById('content').value;
                newProd.Price = document.getElementById('price').value;
                newProd.Quantity = document.getElementById('quantity').value;
                onAdd(newProd);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default PopupAdd;