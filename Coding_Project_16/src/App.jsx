// Importing React and useState for managing component state 
import React, { useState } from 'react';

// Importing custom components for displaying the product list and adding new products
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

// Main App component fun app
function App() {
  // State products to manage the list of products 
  const [products, setProducts] = useState([
    // Initial product list with id, name, price, and description 
    { id: 1, name: 'Product 1', price: 100, description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', price: 200, description: 'Description for Product 2' },
  ]);

  // Function to add a new product to the product list
  const addProduct = (newProduct) => {
    // Update the state by appending the new product to the existing array of information
    // Assign a unique ID to the new product based on the current product count 
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
  };

  return (
    <div>
      {/* Main heading of the dashboard as guided in the assighment*/}
      <h1>Product Dashboard</h1>

      {/* Rendering the ProductList component and passing the product list as props */}
      <ProductList products={products} />

      {/* Rendering the AddProductForm component and passing the addProduct function as a prop */}
      <AddProductForm addProduct={addProduct} />
    </div>
  );
}

// Exporting the App component as the default export
export default App;
