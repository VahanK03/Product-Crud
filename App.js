import './App.css';
import Filter from './components/Filter';
import PopupAdd from './components/PopupAdd';
import ProdList from './components/ProdList';
import React, { useState } from 'react';

function App() {

  const manufacturers = [
    {
      id: 1,
      name: "Nike"
    },
    {
      id: 2,
      name: "Adidas"
    },
    {
      id: 3,
      name: "Puma"
    },
    {
      id: 4,
      name: "Fila"
    },
    {
      id: 5,
      name: "Armani"
    },
    {
      id: 6,
      name: "Gucci"
    },
    {
      id: 7,
      name: "Zara"
    },
    {
      id: 8,
      name: "Lacoste"
    },
    {
      id: 9,
      name: "Louis Vuitton"
    },
    {
      id: 10,
      name: "Balenciaga"
    }
  ];



  const [products, setProducts] = useState([
    {
      "ID": Math.random(),
      "Title": "Nike Air Force 1' 07",
      "Description": "The radiance lives on in the Nike Air Force 1 ’07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
      "Content": "good",
      "Price": 150,
      "Manufacturer": 1,
      "Quantity": 1000
    },
    {
      "ID": Math.random(),
      "Title": "Nike Air Force 1' 07",
      "Description": "The radiance lives on in the Nike Air Force 1 ’07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
      "Content": "good",
      "Price": 150,
      "Manufacturer": 1,
      "Quantity": 1000
    }
  ]);

  const [filterText, setFilterText] = useState('')

  const filteredProducts = products.filter((product) =>
    product.Title.toLowerCase().includes(filterText.toLowerCase()));


  console.log(filteredProducts)

  return (
    <div>
      <PopupAdd onAdd={(newProd) => {
        setProducts([...products, newProd])
      }} />

      <Filter products={products} toFilterByTitle={(searchedTitle) => { setFilterText(searchedTitle) }}
        manufacturers={manufacturers} />

      <ProdList products={filteredProducts} manufacturers={manufacturers} onDelete={(product) => {
        setProducts(products.filter((prod) => prod.ID !== product.ID))
      }}
        poxvac={(product) => {

          const updatedProds = products.map((prod) =>
            prod.ID === product.ID ? product : prod
          )

          console.log(updatedProds)
          setProducts(updatedProds)
        }}
      />


    </div>
  );
}

export default App;
