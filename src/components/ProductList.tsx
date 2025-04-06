import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProductList.css";

const ProductList: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in by verifying localStorage data
    const storedData = JSON.parse(localStorage.getItem("userData") || "{}");
    if (!storedData.email || !storedData.password) {
      alert("Du måste logga in för att se produkterna.");
      navigate("/"); // Redirect to login page if not logged in
    }
  }, [navigate]);

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
