import React from 'react';

const Items = (props) => {
    const {items, del, updateQuantity} = props;
    let length = items.length;
    const ListItem = length ? (
        items.map(item => {
            return(
                <div key={item.id} className="item">
                    <p>{item.product}</p>
                    <p>{item.price}</p>
                    <div className="quantity-controls">
                        <button onClick={() => updateQuantity(item.id, false)}>-</button>
                        <p>{item.quantity}</p>
                        <button onClick={() => updateQuantity(item.id, true)}>+</button>
                    </div>
                    <p className="delete" onClick={() => del(item.id)}>&times;</p>
                </div>
            )
        })
    ) : (
        <div className="text">There are no items, Try to add some.</div>
    )
    return (
        <div>
            <div className="header item">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Edit</p>
            </div>
            {ListItem}
        </div>
    )
}

export default Items;
