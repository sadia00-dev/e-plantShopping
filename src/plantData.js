// Real plant photos used by the Paradise Nursery product catalog.
// The image URLs below point to real plant photographs.

export const plantCategories = [
  {
    category: 'Air-Purifying Plants',
    plants: [
      { id: 'ap-1', name: 'Snake Plant', price: 24, image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Snake_plant_(Sansevieria_trifasciata).jpg', tone: '#3E5C3A' },
      { id: 'ap-2', name: 'Peace Lily', price: 28, image: 'https://images.unsplash.com/photo-1761835250050-15826e2cafea?auto=format&fit=crop&w=700&q=80', tone: '#4A6B3E' },
      { id: 'ap-3', name: 'Spider Plant', price: 18, image: 'https://images.unsplash.com/photo-1723471719246-d8fa048f0ee0?auto=format&fit=crop&w=700&q=80', tone: '#5C7A45' },
      { id: 'ap-4', name: 'Areca Palm', price: 34, image: 'https://images.unsplash.com/photo-1630565945904-7e4220cadd0e?auto=format&fit=crop&w=700&q=80', tone: '#3B5E4C' },
      { id: 'ap-5', name: 'Rubber Plant', price: 30, image: 'https://images.unsplash.com/photo-1558596252-11da88a2d1c5?auto=format&fit=crop&w=700&q=80', tone: '#4C6E4A' },
      { id: 'ap-6', name: 'Boston Fern', price: 22, image: 'https://images.unsplash.com/photo-1511204880822-9c9c8620d8f8?auto=format&fit=crop&w=700&q=80', tone: '#537A4D' },
    ],
  },
  {
    category: 'Succulents & Cacti',
    plants: [
      { id: 'sc-1', name: 'Echeveria', price: 14, image: 'https://images.unsplash.com/photo-1724148893915-c3e5370067d5?auto=format&fit=crop&w=700&q=80', tone: '#7A8F5C' },
      { id: 'sc-2', name: 'Barrel Cactus', price: 20, image: 'https://images.unsplash.com/photo-1762450084123-fd633e400d3a?auto=format&fit=crop&w=700&q=80', tone: '#6E8558' },
      { id: 'sc-3', name: 'Jade Plant', price: 16, image: 'https://images.unsplash.com/photo-1751379275857-18bf63bd9f40?auto=format&fit=crop&w=700&q=80', tone: '#5E7C50' },
      { id: 'sc-4', name: 'Aloe Vera', price: 15, image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Aloe_vera_plant.JPG', tone: '#63855A' },
      { id: 'sc-5', name: 'Zebra Haworthia', price: 13, image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Zebra_Plant_(Haworthia_attenuata)_(3103281225)_(2).jpg', tone: '#728A5B' },
      { id: 'sc-6', name: "Burro's Tail", price: 17, image: 'https://images.unsplash.com/photo-1751379320647-db7bf0708ece?auto=format&fit=crop&w=700&q=80', tone: '#6A8452' },
    ],
  },
  {
    category: 'Flowering Plants',
    plants: [
      { id: 'fl-1', name: 'Orchid', price: 38, image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Orchid_Flower.jpg', tone: '#8B5A6E' },
      { id: 'fl-2', name: 'African Violet', price: 19, image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/African_Violet_with_Purple_Flowers.jpg', tone: '#7A5470' },
      { id: 'fl-3', name: 'Begonia', price: 21, image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Begonia_flower-.jpg', tone: '#8C5450' },
      { id: 'fl-4', name: 'Anthurium', price: 26, image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Anthurium_flower.jpg', tone: '#8C4F58' },
      { id: 'fl-5', name: 'Hibiscus', price: 23, image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Hibiscus_Flower_image.jpg', tone: '#945048' },
      { id: 'fl-6', name: 'Kalanchoe', price: 16, image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Kalanchoe_bloss.jpg', tone: '#7C6A3C' },
    ],
  },
]

export const allPlants = plantCategories.flatMap((c) => c.plants)
