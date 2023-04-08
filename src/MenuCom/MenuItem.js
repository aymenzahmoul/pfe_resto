import React from 'react';

const MenuItem = ({ index, item, deleteItem }) => {
return (
<div className="card mb-3">
<div className="card-body">
<h5 className="card-title">{item.name}</h5>
<h6 className="card-subtitle mb-2 text-muted">Prix : {item.price} DT</h6>
<p className="card-text">Description : {item.description}</p>
<button className="btn btn-danger" onClick={() => deleteItem(index)}>
Delete
</button>
</div>
</div>
);
};

export default MenuItem;