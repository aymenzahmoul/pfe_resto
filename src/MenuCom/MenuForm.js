import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MenuForm = ({ addCategory }) => {
  const { id } = useParams();
  
  const [category, setCategory] = useState({ name: '', image: null , restaurantId:'1' });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCategory(prevCategory => ({ ...prevCategory, [name]: value }));
  };
  const handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:8080/category-configuration/category/create',category)
      .then(response => {
        console.log(response.data);
        const newCategory = response.data;
        addCategory(newCategory);
        setCategory({ name: '', image: null });
      })
      .catch(error => {
        console.log(error);
      });
  };
  

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Ajouter catégorie </h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom de catégorie </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={category.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              className="form-control-file"
              id="image"
              accept="image/*"
              onChange={event => setCategory({ ...category, image: event.target.files[0] })}
            />
          </div>
          <div> -------------------------------------------</div>
          <button type="submit" className="btn btn-primary">
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
};

export default MenuForm;
