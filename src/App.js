import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="app-container">
      <Header />
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onDelete={handleDelete} 
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
