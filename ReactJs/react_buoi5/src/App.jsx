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
import './App.css'

function App() {
  const navigate = useNavigate()

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='profile' element={<Profile/>}/>
          <Route path='orders' element={<Orders/>}/>
          <Route path='settings' element={<Settings/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>

      {/* Header Navigation */}
      <header className='header'>
        <nav className='main-nav'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/products'>Products</Link>
        </nav>
      </header>

      {/* Sidebar Navigation */}
      <aside className='sidebar'>
        <h3>Dashboard</h3>
        <nav className='dashboard-nav'>
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/dashboard/profile'>Profile</Link>
          <Link to='/dashboard/orders'>Orders</Link>
          <Link to='/dashboard/settings'>Settings</Link>
        </nav>
      </aside>

      {/* Quick Actions */}
      <div className='quick-actions'>
        <button onClick={() => navigate('/dashboard/profile')}>Profile</button>
        <button onClick={() => navigate('/dashboard/orders')}>Orders</button>
        <button onClick={() => navigate('/dashboard/settings')}>Settings</button>
      </div>
    </>
  )
}

export default App