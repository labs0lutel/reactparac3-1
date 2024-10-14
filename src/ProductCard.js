import React from "react";
import Stars from "./Stars";

function ProductCard({ product, onDelete }) {
  const handleDoubleClick = () => {
    onDelete(product.id);
  };

  return (
    <div className="product-card" onDoubleClick={handleDoubleClick}>
      <img src={product.thumbnail} alt={product.title} className="product-image" />
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <Stars rating={product.rating} />
    </div>
  );
}

export default ProductCard;
