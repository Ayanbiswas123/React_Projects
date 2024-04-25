import { useState } from 'react'

import './App.css'
import Pokedex from './components/pokedex/Pokedex'
import CustomRoute from './Routs/CustomRoute'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Link to="/">
      <h1>
        Pokemon
      </h1>
      </Link>
      <CustomRoute/>
    </>
  )
}

export default App
