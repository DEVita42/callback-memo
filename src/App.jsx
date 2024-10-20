import { useState } from 'react'
import './App.css'
import CounterNew from './CounterNew'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterNew/>
    </>
  )
}

export default App
