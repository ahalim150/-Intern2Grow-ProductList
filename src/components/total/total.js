import React from 'react';

const Total = (props) => {
    const {items} = props;
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += parseFloat(items[i].price) * items[i].quantity;  // Multiply price by quantity
    }
    return (
        <div>
            <p className="text">Total Price: {total}</p>
        </div>
    )
}

export default Total;
