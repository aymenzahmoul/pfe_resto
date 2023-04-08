import React, { useState } from 'react';




const MenuForm = ({ addCategory }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);



  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!name || !image ) {
      alert("Veuillez remplir nom , et image de catégorie");
      return;
    }
    const category = { name, image };
    addCategory(category);
    setName('');
  
    setImage(null); 
    document.getElementById('image').value = '';
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image :  </label>
            <input
              type="file"
              className="form-control-file"
              id="image"
              onChange={(e) => setImage(e.target.files[0]) }
              
              
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