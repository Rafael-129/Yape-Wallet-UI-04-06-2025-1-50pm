import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import CardsGrid from './components/CardList'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
 
      <CardsGrid />
      <Footer />
    </>
  )
}

export default App
