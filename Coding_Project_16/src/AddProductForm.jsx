import React, { useState } from 'react';

function AddProductForm({ addProduct }) {
  // State variables to manage the input values for the form fields
  const [name, setName] = useState(''); // State for product name
  const [price, setPrice] = useState(''); // State for product price
  const [description, setDescription] = useState(''); // State for product description

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Temporary alert to display entered values (data not yet passed to App)
    alert(`Product added: ${name}, ${price}, ${description}`);
    // Reset all form fields to empty values after submission
    setName('');
    setPrice('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name} // Bind the input value to the name state
            onChange={(e) => setName(e.target.value)} // Update name state on input change
          />
        </label>
      </div>
      <div>
        <label>
          Price:
          <input
            type="number"
            value={price} // Bind the input value to the price state
            onChange={(e) => setPrice(e.target.value)} // Update price state on input change
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea
            value={description} // Bind the textarea value to the description state
            onChange={(e) => setDescription(e.target.value)} // Update description state on input change
          />
        </label>
      </div>
      <button type="submit">Add Product</button> {/* Submit button for the form */}
    </form>
  );
}

export default AddProductForm;
