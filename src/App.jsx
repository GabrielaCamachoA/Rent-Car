import { useContext} from 'react'
import './App.css'
import { context } from './context/ModoDark'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Header from './components/Header'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  const {oscuro, setOscuro} = useContext(context)
  return (
    <>
      <main className={oscuro ? "dark" : ""}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element= {<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </main> 
    </>
  )
}

export default App
