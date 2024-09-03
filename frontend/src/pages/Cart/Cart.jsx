import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount,url } = useContext(StoreContext);

  const navigate = useNavigate();

  const subtotal = food_list.reduce((acc, item) => {
    const quantity = cartItems[item._id] || 0;
    return acc + item.price * quantity;
  }, 0);

  const deliveryFee = 2; // Example fixed delivery fee
  const total = subtotal + deliveryFee;

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.length > 0 ? (
          food_list.map((item, index) => {
            const quantity = cartItems[item._id];
            if (quantity > 0) {
              return (
                <div key={item._id}>
                  <div className='cart-items-title cart-items-item'>
                    <img src={url +"/images/"+item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p>${item.price.toFixed(2)}</p> 
                    <p>{quantity}</p> {/* Display item quantity */}
                    <p>${(item.price * quantity).toFixed(2)}</p> {/* Display total price for the item */}
                    <button onClick={() => removeFromCart(item._id)}>X</button> {/* Remove button */}
                  </div>
                  <hr />
                </div>
              );
            }
            return null;
          })
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(getTotalCartAmount)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount()===0?0:total.toFixed(getTotalCartAmount)}</p>
            </div>
            <hr />
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promocode' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
