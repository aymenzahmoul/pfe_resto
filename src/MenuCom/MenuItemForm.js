import React, { useState ,useEffect} from 'react';
import axios from 'axios';

const MenuItemForm = ({ addItem }) => {

  const [meal, setMeal] = useState({
    name: '',
    price: '',
    desc: '',
    
  });

  useEffect(() => {
    async function fetchCategories() {
      const response = await axios.get('http://localhost:8080/public-resources/categories');
      setMeal({ ...meal, category: response.data });
      console.log(response)
    }
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    setMeal({ ...meal, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, price, desc, category_id } = meal;
    await axios.post('http://localhost:8080/meal-configuration/meal/create', { name, price, desc, category_id });
    setMeal({ ...meal, name: '', price: '', desc: '', category_id: '' });
    const item = { name, price, desc };
    addItem(item);
    setMeal({
      name: "",
      price: "",
      desc: "",

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
              value={meal.name}
              onChange={handleChange}
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
              value={meal.price}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="desc"
              rows="3"
              name="desc"
              value={meal.desc}
              onChange={handleChange}
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
