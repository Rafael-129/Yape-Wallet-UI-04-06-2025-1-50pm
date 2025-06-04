import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import CardList from './components/CardList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
 
      <CardList />
    </>
  )
}

export default App
