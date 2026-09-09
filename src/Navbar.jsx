import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
  const items = useSelector((state) => state.cart.items)
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="navbar-mark" aria-hidden="true">P</span> Paradise Nursery
      </Link>
      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart" className="navbar-cart">
          Cart
          <span className="cart-badge">{totalCount}</span>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
