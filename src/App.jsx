import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './Navbar'
import AboutUs from './AboutUs'
import ProductList from './ProductList'
import CartItem from './CartItem'
import './App.css'

function Landing() {
  return (
    <main className="landing">
      <div className="landing-overlay">
        <p className="landing-eyebrow">Home &amp; garden, reimagined</p>
        <h1 className="landing-title">Paradise Nursery</h1>
        <p className="landing-tagline">
          Thoughtfully grown houseplants, delivered to your door and ready
          to thrive from day one.
        </p>
        <Link to="/plants" className="btn btn-primary btn-large">
          Get Started
        </Link>
      </div>
    </main>
  )
}

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/plants"
          element={
            <>
              <Navbar />
              <ProductList />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <CartItem />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <AboutUs />
            </>
          }
        />
      </Routes>
    </div>
  )
}

export default App
