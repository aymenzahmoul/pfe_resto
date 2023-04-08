import React, { useState } from 'react';


const MenuItemForm = ({ addItem }) => {
const [name, setName] = useState('');
const [price, setPrice] = useState('');
const [description, setDescription] = useState('');

const handleSubmit = (e) => {
e.preventDefault();
const isFloat = (value) => {
  // Vérifiez si la valeur est un nombre décimal valide
  return /^\d+(\.\d{1,2})?$/.test(value);
};
if (!name || !price || !isFloat(price) ) {
  alert("Veuillez remplir nom , Prix de plats correct . Et merci");
  return;
}

const item = { name, price, description };
addItem(item);
setName('');
setPrice('');
setDescription('');
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      <div className="form-group">
        <label htmlFor="price">Prix de plat</label>
        <input
          type="text"
          className="form-control"
          id="price"
          placeholder="Enter price (DT)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description </label>
        <textarea
          className="form-control"
          id="description"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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