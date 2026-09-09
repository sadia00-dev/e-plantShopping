
import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      const plant = action.payload

      const existing = state.items.find(
        (item) => item.id === plant.id
      )

      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({
          ...plant,
          quantity: 1,
        })
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      )
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload

      const item = state.items.find(
        (item) => item.id === id
      )

      if (item) {
        if (quantity > 0) {
          item.quantity = quantity
        } else {
          state.items = state.items.filter(
            (item) => item.id !== id
          )
        }
      }
    },

    incrementQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      )

      if (item) {
        item.quantity += 1
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      )

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1
        } else {
          state.items = state.items.filter(
            (i) => i.id !== action.payload
          )
        }
      }
    },

    clearCart: (state) => {
      state.items = []
    },
  },
})

export const {
  addItem,
  removeItem,
  updateQuantity,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer

