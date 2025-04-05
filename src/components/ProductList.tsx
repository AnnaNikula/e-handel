import React from "react";

const ProductList: React.FC = () => {
  // Example product data
  const products = [
    { id: 1, name: "Produkt 1", price: 100 },
    { id: 2, name: "Produkt 2", price: 200 },
    { id: 3, name: "Produkt 3", price: 300 },
  ];

  return (
    <div className="product-list-container">
      <h1>Produkter</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <h2>{product.name}</h2>
            <p>Pris: {product.price} kr</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
