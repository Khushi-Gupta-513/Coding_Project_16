// Importing React to define the component
import React from 'react';

// ProductItem component
// This component receives a single product's data as a prop and displays its details
function ProductItem({ product }) {
  return (
    <div 
      // Inline styling for the product item container with border, margin, and padding for better visibility
      style={{ border: '1px solid black', margin: '10px', padding: '10px' }}
    >
      {/* Displaying the product name */}
      <h3>{product.name}</h3>

      {/* Displaying the product price */}
      <p>Price: ${product.price}</p>

      {/* Displaying the product description */}
      <p>Description: {product.description}</p>
    </div>
  );
}

// Exporting the ProductItem component as the default export for use in other components
export default ProductItem;
