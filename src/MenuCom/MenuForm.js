import React, { useState } from 'react';
import axios from 'axios';
const MenuForm = ({ addCategory }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convertir la imagen en base64
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      const imageData = reader.result;

      // Enviar lYYa imagen en base64 al backend
      const data = {
        name: name,
        image: imageData,
      };
      axios.post('http://localhost:8080/public-resources/categories', data)
      const category = { name, image };

  addCategory(category);
  setName("");
  setImage(null)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    reader.onerror = () => {
      console.log('Error');
    };
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
              value={name} onChange={(e) => setName(e.target.value)} 
              
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              className="form-control-file"
              id="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              
        />
      </div>
      <div> -------------------------------------------</div>
      <button type="submit" className="btn btn-primary" >
        Ajouter
      </button>
    </form>
  </div>
</div>
);
};

export default MenuForm;