import React, { useState } from 'react';
import axios from 'axios';

const DataAdding = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/sell/update', { name });
      setName('');
    } catch (err) {
      setError('An error occurred while adding data');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default DataAdding;