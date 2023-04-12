import React, { useState } from 'react';
import axios from 'axios';

const MenuItemForm = ({ addItem }) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });
  
  const { name, price, description } = product;
  
  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/products", product);
    const item = { name, price, description };
    addItem(item);
    setProduct({
      name: "",
      price: "",
      description: "",
    });
  };
  
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">Ajouter Un plat</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom de plat</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              name="name"
              value={name}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Prix de plat</label>
            <input
              type="text"
              className="form-control"
              id="price"
              placeholder="Enter price"
              name="price"
              value={price}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              name="description"
              value={description}
              onChange={onInputChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Ajouters
          </button>
        </form>
      </div>
    </div>
  );
};

export default MenuItemForm;
