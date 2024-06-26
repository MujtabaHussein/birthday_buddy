import { useState } from 'react'
import data from './data'

function App() {
  const [items, setItems] = useState(data)
  const clearItems = () => {
    setItems([])
  }
  return (
    <main>
      <div className='container'>
        <h3>5 birthday today</h3>
        <div className='people_container'>
          {items.map((user) => {
            const { id, name, age, image } = user
            return (
              <div className='person' key={id}>
                <img src={image} alt={name} className='img' />
                <div className='info'>
                  <span>{name}</span>
                  <p>{age} years</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className='button_container'>
          <button className='btn' onClick={() => clearItems()}>
            Clear All
          </button>
        </div>
      </div>
    </main>
  )
}
export default App
