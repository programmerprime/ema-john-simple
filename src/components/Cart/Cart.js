import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce((total, prd) => total + prd.price, 0);

    let shipping = 0;
    if(total > 50) {
        shipping = 0;
    } else if(total > 20) {
        shipping = 3.99;
    } else if(total > 0) {
        shipping = 12.99;
    }

    let tax = (total / 10).toFixed(2);

    let grandTotal = (total+shipping+Number(tax)).toFixed(2);

    return (
        <div>
            <h1>Order summary</h1>
            <h2>Items ordered: {cart.length}</h2>
            <h3>Product(s) price: {total}</h3>
            <h3>Shipping cost: {shipping}</h3>
            <h3><small>VAT: {tax}</small></h3>
            <h3>Subtotal price: {grandTotal}</h3>
        </div>
    );
};

export default Cart;