import React from 'react'
import Contact from './components/constacts/Contact'
import Navbar from './layout/Navbar'
import './styles/App.scss'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='container'>

        <Contact/>



      </div>
    </div>
  )
}

export default App