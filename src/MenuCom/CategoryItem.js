import React, { useState } from 'react';
import MenuItemList from './MenuItemList';
import MenuItemForm from './MenuItemForm';

const ImagePreview = ({ image }) => {
    return (
      <div style={{
        width: 100,
        height: 100,
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "right",
        alignItems: "right"
      }}>
        <img src={URL.createObjectURL(image)} 
       
        alt="{category.name}"
          style={{
            maxWidth: "100%",
            maxHeight: "100%"
          }} />
      </div>
    );
  };


const CategoryItem = ({ index, category, deleteCategory }) => {
const [items, setItems] = useState([]);

const addItem = (item) => {
setItems([...items, item]);
};

const deleteItem = (index) => {
const newItems = [...items];
newItems.splice(index, 1);
setItems(newItems);
};

return (
<div className="card mb-3">
<div className="card-body">
<h5 className="card-title">{category.name} <ImagePreview image={category.image} /></h5>



<button className="btn btn-danger" onClick={() => deleteCategory(index)}>
Delete
</button>
<MenuItemList items={items} deleteItem={deleteItem} />
<MenuItemForm addItem={addItem} />
</div>
</div>
);
};

export default CategoryItem;