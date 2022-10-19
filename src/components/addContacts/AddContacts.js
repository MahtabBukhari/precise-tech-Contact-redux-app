import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/actions/contactActions'
import {useNavigate} from 'react-router-dom'

// create dummy id udint npm i shortid
import shortid from 'shortid'

const AddContacts = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

const [name,setName]=useState('')
const [phone,setPhone]=useState('')
const [email,setEmail]=useState('')

const createContact=(e)=>{
  e.preventDefault()
  console.log(name,phone,email)
  const new_contact={
    id:shortid.generate(),
    name,
    phone,
    email
  }
  console.log(new_contact)
  dispatch(addContact(new_contact))
  navigate("/")

}

  return (
    <div className='card border-0 shadow'>
      <div className="card-header">
        Add a Contact
      </div>
      <div className="card-body">
        <form  onSubmit={createContact}>

          <div className="form-group">
            <input type="text" className="form-control" value={name} onChange={e=>setName(e.target.value)} required placeholder='Enter Your Name'/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" value={phone} onChange={e=>setPhone(e.target.value)} required placeholder='Enter Your Phone No.' />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" value={email} onChange={e=>setEmail(e.target.value)} required placeholder='Enter Your Email'/>
          </div>
           <button type='submit' className='btn btn-primary'>Add a Contact</button>

        </form>
      </div>
    </div>
  )
}

export default AddContacts