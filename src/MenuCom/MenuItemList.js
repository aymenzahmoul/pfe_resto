import React from 'react';
import MenuItem from './MenuItem';

const MenuItemList = ({ items, deleteItem }) => {
return (
<div>
{items.map((item, index) => (
<MenuItem key={index} index={index} item={item} deleteItem={deleteItem} />
))}
</div>
);
};

export default MenuItemList;