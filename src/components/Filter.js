import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Filter = ({ handleSubmit }) => {
  const [filter, setFilter] = useState({
    title: '',
    brand: 0,
  });

  const handleFilter = (e, option) => {
    setFilter((prev) => ({
      ...prev,
      [option]: e.target.value,
    }));
  };

  const handleFilterSubmit = (value) => {
    handleSubmit(value);
  };

  return (
    <div>
      <Popup trigger={<button> Filter </button>} position="right top">
        <div>
          <div>
            <span>Product Title</span>
            <input
              type="text"
              placeholder="title..."
              id="title"
              onChange={(e) => handleFilter(e, 'title')}
            />
          </div>
          <select onChange={(e) => handleFilter(e, 'brand')}>
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
              handleFilterSubmit(filter);
            }}
          >
            Submit
          </button>
        </div>
      </Popup>
    </div>
  );
};

export default Filter;