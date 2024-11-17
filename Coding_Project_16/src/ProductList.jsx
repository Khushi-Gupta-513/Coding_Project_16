// Importing React to define the component 
import React from 'react';

// Importing the ProductItem component to display individual product details 
import ProductItem from './ProductItem';

// ProductList component
// This component receives a list of products as props and renders each product using the ProductItem component 
function ProductList({ products }) {
  return (
    <div>
      {/* Heading for the product list */}
      <h2>Product List</h2>

      {/* Mapping over the products array to render a ProductItem component for each product */}
      {products.map((product) => (
        // Each ProductItem component is passed a unique key (product.id) and props for product data
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

// Exporting the ProductList component as the default export 
export default ProductList;
