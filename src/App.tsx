import { useState } from 'react'
import Footer from './components/layout/footer/Footer'
import Header from './components/layout/header/Header'
import Content from './components/layout/content/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Content /> 
    <Footer />
    </>
  )
}

export default App
