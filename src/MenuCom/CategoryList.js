import React from 'react';
import CategoryItem from './CategoryItem';

const CategoryList = ({ categories, deleteCategory }) => {
  return (
    <div>
      {categories.map((category, index) => (
        <CategoryItem key={index} index={index} category={category} deleteCategory={deleteCategory} />
      ))}
    </div>
  );
};

export default CategoryList;
