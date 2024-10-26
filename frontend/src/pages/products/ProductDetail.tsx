import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail(): JSX.Element {
  const { id } = useParams();

  const [product, setProduct] = useState<null>(null);

  async function getProduct(): Promise<void> {
    try {
      const response = await fetch(`/data/db.json`);
      if (!response.ok) throw new Error("Failed to fetch");

      const data = await response.json();

      const product = data.products.find(
        (product) => product.id === Number(id)
      );

      setProduct(product);
      console.log(product);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProduct();
  });

  if (product === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <article className="product-card">

        <div className="product-images">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>


          {/* Product Details */}

        <div className="product-details">
          <h3>{product.name}</h3>
          <p>{product.price}KZ</p>
        

          {/* Quantity Selector */}
          <div className="quantity-container">
            <label htmlFor="quantity">quantity</label>
            <input
              type="number"
              id="quantity"
              value={1}
              min="1"
              // onChange={}
            />
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="add-to-cart">Add To Cart</button>
            <button className="buy-now" >Buy Now</button>
          </div>

          {/* Product Description */}
          <p className="description">
          <span>Description</span> <br />
            {product.description}
          </p>
        </div>
      </article>
    </div>
  );
}

/**
 * import React, { useState } from 'react';
import './ProductCard.css'; // Estilos personalizados

const ProductCard = () => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) to cart!`);
  };

//   const handleBuyNow = () => {
//     alert('Proceeding to checkout!');
//   };

//   return (
//     <div className="product-card">
//       {/* Header */
//       <div className="store-info">
//         <span className="store-name">ITFON, ELSALG</span>
//         <button className="visit-store-btn">Visit store</button>
//       </div>

//       {/* Product Images */}
//       <div className="product-images">
//         <img src="https://via.placeholder.com/100" alt="Print 1" />
//         <img src="https://via.placeholder.com/100" alt="Print 2" />
//         <img src="https://via.placeholder.com/100" alt="Print 3" />
//       </div>

//       {/* Product Details */}
//       <div className="product-details">
//         <h3>Foto print A4 29,7x21 cm Premium (Blank)</h3>
//         <p className="price">59,95 DKK</p>
// {/*
//         {/* Quantity Selector */}
//         <div className="quantity-container">
//           <label htmlFor="quantity">Quantity</label>
//           <input
//             type="number"
//             id="quantity"
//             value={quantity}
//             min="1"
//             onChange={(e) => setQuantity(parseInt(e.target.value))}
//           />
//         </div>

//         {/* Action Buttons */}
//         <div className="action-buttons">
//           <button className="add-to-cart" onClick={handleAddToCart}>
//             Add to cart
//           </button>
//           <button className="buy-now" onClick={handleBuyNow}>
//             Buy now
//           </button>
//         </div>

//         {/* Product Description */}
//         <p className="description">
//           Upload dine billeder eller kig ind med din mobil, SD-kort...
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;*/
