import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddContacts from './components/addContacts/AddContacts'
import Contact from './components/constacts/Contact'
import Navbar from './layout/Navbar'
import './styles/App.scss'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='container'>

        <Routes>
          <Route exact path='/' element={ <Contact/>}/>
          <Route exact path='/contacts/add' element={<AddContacts/>}/>
        </Routes>

      



      </div>
    </div>
  )
}

export default App