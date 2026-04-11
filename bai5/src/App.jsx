import { useState } from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import NotFound from './components/NotFound'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import ProductDetails from './components/ProductDetails'
import Products from './components/Products'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Orders from './components/Orders'
import Settings from './components/Settings'
import Checkout from './components/Checkout'



function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  function handleProfile(){
    navigate('/dashboard/profile')
  }
  function handleOrders(){
    navigate('/dashboard/orders')
  }
  function handleSettings(){
    navigate('/dashboard/settings')
  }
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/product/:id' element={<ProductDetails/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
      <Route path='/checkout' element={<Checkout/>}/>
      
      <Route path='/dashboard' element={<Dashboard/>}>
        <Route path='profile' element={<Profile/>}></Route>
        <Route path='orders' element={<Orders/>}></Route>
        <Route path='settings' element={<Settings/>}></Route>
      </Route>
     </Routes>
     <nav>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/contact'}>Contact</Link>
      <Link to={'/products'}>Products</Link>
     </nav>

    <nav>
      <Link to={'/dashboard'}>Dashboard</Link>
      <Link to={'/dashboard/profile'}>Profile</Link>
      <Link to={'/dashboard/orders'}>Orders</Link>
      <Link to={'/dashboard/settings'}>Settings</Link>
    </nav>

    <button onClick={handleProfile}>Profile</button>
    <button onClick={handleOrders}>Orders</button>
    <button onClick={handleSettings}>Settings</button>
    </>
  )
}

export default App
