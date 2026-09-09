import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItem } from './CartSlice'
import { plantCategories } from './plantData'

function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  const cartIds = new Set(cartItems.map((item) => item.id))

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant))
  }

  return (
    <main className="product-page">
      <div className="product-page-intro">
        <h1>Shop the Collection</h1>
        <p>
          Browse plants by category and add your favorites to the cart.
          Every plant ships healthy, hydrated, and ready to settle into its
          new home.
        </p>
      </div>

      {plantCategories.map((group) => (
        <section key={group.category} className="product-category">
          <h2>{group.category}</h2>
          <div className="product-grid">
            {group.plants.map((plant) => {
              const inCart = cartIds.has(plant.id)
              return (
                <article className="product-card" key={plant.id}>
                  <div
                    className="product-thumb"
                    style={{ backgroundColor: plant.tone }}
                  >
                    <img src={plant.image} alt={plant.name} />
                  </div>
                  <h3>{plant.name}</h3>
                  <p className="product-price">${plant.price.toFixed(2)}</p>
                  <button
                    className="btn btn-primary"
                    disabled={inCart}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {inCart ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </article>
              )
            })}
          </div>
        </section>
      ))}

      <div className="product-page-footer">
        <Link to="/cart" className="btn btn-secondary">
          View Cart
        </Link>
      </div>
    </main>
  )
}

export default ProductList
