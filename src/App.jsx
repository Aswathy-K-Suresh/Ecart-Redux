
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Wishlist from './Pages/Wishlist'
import Footer from './Components/Footer'
import Pagenotfound from './Pages/Pagenotfound'

function App() {


  return (
    <>
    <Header/>
     <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'cart'} element={<Cart />} />
        <Route path={'wishlist'} element={<Wishlist />} />
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
