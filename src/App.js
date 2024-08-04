import './App.css';
import Filter from './components/Filter';
import PopupAdd from './components/PopupAdd';
import ProdList from './components/ProdList';
import React, { useEffect, useMemo, useState } from 'react';

import { productsMockData, manufacturers } from './mockData';

function App() {
  const [filter, setFilter] = useState({
    title: '',
    brand: 0,
  });

  const [products, setProducts] = useState(productsMockData);

  const handleFilter = (value) => {
    setFilter(value);
  };

  const handleFilterLogic = (data, filter) => {
    if (filter.title === '' && +filter.brand === 0) {
      return productsMockData;
    }
    const filteredProducts = data
      .filter((product) =>
        product.Title.toLowerCase().includes(filter.title.toLowerCase())
      )
      .filter((product) => product.Manufacturer === filter.brand);
    return filteredProducts;
  };

  useEffect(() => {
    setProducts((prev) => handleFilterLogic(prev, filter));
  }, [filter]);

  return (
    <div>
      <PopupAdd
        onAdd={(newProd) => {
          setProducts([...products, newProd]);
        }}
      />
      <Filter handleSubmit={handleFilter} />
      <ProdList
        products={products}
        manufacturers={manufacturers}
        onDelete={(product) => {
          setProducts(products.filter((prod) => prod.ID !== product.ID));
        }}
        poxvac={(product) => {
          const updatedProds = products.map((prod) =>
            prod.ID === product.ID ? product : prod
          );
          setProducts(updatedProds);
        }}
      />
    </div>
  );
}

export default App;
