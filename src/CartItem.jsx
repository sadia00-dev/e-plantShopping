import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { decrementQuantity, incrementQuantity, removeItem } from './CartSlice'

function CartItem() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const handleCheckout = () => {
    alert('Checkout is coming soon! Thanks for shopping with Paradise Nursery.')
  }

  if (items.length === 0) {
    return (
      <main className="cart-page">
        <div className="cart-empty">
          <h1>Your cart is empty</h1>
          <p>Looks like you haven't added any plants yet.</p>
          <Link to="/plants" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="cart-page">
      <h1>Your Cart</h1>
      <p className="cart-total">
        Total: <strong>${totalAmount.toFixed(2)}</strong>
      </p>

      <div className="cart-list">
        {items.map((item) => (
          <div className="cart-row" key={item.id}>
            <div
              className="product-thumb cart-thumb"
              style={{ backgroundColor: item.tone }}
            >
              <img src={item.image} alt={item.name} />
            </div>

            <div className="cart-row-info">
              <h3>{item.name}</h3>
              <p className="cart-row-unit">
                ${item.price.toFixed(2)} each
              </p>
            </div>

            <div className="cart-row-quantity">
              <button
                className="qty-btn"
                onClick={() => dispatch(decrementQuantity(item.id))}
                aria-label={`Decrease quantity of ${item.name}`}
              >
                −
              </button>
              <span>{item.quantity}</span>
              <button
                className="qty-btn"
                onClick={() => dispatch(incrementQuantity(item.id))}
                aria-label={`Increase quantity of ${item.name}`}
              >
                +
              </button>
            </div>

            <p className="cart-row-subtotal">
              ${(item.price * item.quantity).toFixed(2)}
            </p>

            <button
              className="btn btn-danger"
              onClick={() => dispatch(removeItem(item.id))}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="cart-actions">
        <Link to="/plants" className="btn btn-secondary">
          Continue Shopping
        </Link>
        <button className="btn btn-primary" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </main>
  )
}

export default CartItem
