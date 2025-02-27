// Write your code here
import Popup from 'reactjs-popup'
import CartContext from '../../context/CartContext'

import Payment from '../Payment'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachItem => {
        total += eachItem.price * eachItem.quantity
      })
      return (
        <div className="cartSummary-container">
          <div className="total-container">
            <h1 className="order-total">Order Total:</h1>
            <h1 className="total">Rs {total}/-</h1>
          </div>
          <p className="items-count">{cartList.length} items in cart</p>
          <Popup
            modal
            trigger={
              <button className="checkout-btn" type="button">
                Checkout
              </button>
            }
            position="top left"
          >
            {close => <Payment close={close} />}
          </Popup>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
