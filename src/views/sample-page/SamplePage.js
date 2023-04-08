import React, { useState } from 'react';
import CategoryList from '../../MenuCom/CategoryList';
import MenuForm from '../../MenuCom/MenuForm';

const SamplePage = () => {
  const [categories, setCategories] = useState([]);

  const addCategory = (category) => {
    setCategories([...categories, category]);
  };

  const deleteCategory = (index) => {
    const newCategories = [...categories];
    newCategories.splice(index, 1);
    setCategories(newCategories);
  };

  return (
    <div className="container">
      <h1>Pizzeria Menu</h1>
      <CategoryList categories={categories} deleteCategory={deleteCategory} />
      <MenuForm addCategory={addCategory} />
    </div>
  );
};

export default SamplePage;
