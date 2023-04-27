import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MenuForm = ({ addCategory }) => {
  const [category, setCategory] = useState({ name: '', image: null, restaurantId: null });

  useEffect(() => {
    // retrieve restaurant ID from API endpoint
    axios.get('http://localhost:8080/restaurant-configuration/restaurant/getRestaurantIdByUserId/1', { withCredentials: true })
      .then(response => {
        setCategory(prevCategory => ({ ...prevCategory, restaurantId: response.data.restaurantId }));
      })
      .catch(error => {
        console.log(error);
      });
  }, []); // only run on component mount

  const handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', category.name);
    formData.append('image', category.image);
    formData.append('restaurantId', category.restaurantId);

    axios.post('http://localhost:8080/category-configuration/category/create', formData)
      .then(response => {
        console.log(response.data);
        const newCategory = response.data;
        addCategory(newCategory);
        setCategory({ name: '', image: null, restaurantId: category.restaurantId });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCategory(prevCategory => ({ ...prevCategory, [name]: value }));
  };

  const handleImageChange = event => {
    setCategory(prevCategory => ({ ...prevCategory, image: event.target.files[0] }));
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
              onChange={handleImageChange}
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
