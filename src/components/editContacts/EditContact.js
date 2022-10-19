import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addContact, getContact } from '../../redux/actions/contactActions'
import {useNavigate, useParams} from 'react-router-dom'

// create dummy id udint npm i shortid
import shortid from 'shortid'

const EditContact = () => {
    const arrcontact=useSelector(state=>state.user.contact)
     const contact = arrcontact[0]
    console.log("contact",contact)
    
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {id}=useParams()
  console.log(id)

const [name,setName]=useState(contact.name?contact.name:'')
const [phone,setPhone]=useState(contact.phone?contact.phone:'')
const [email,setEmail]=useState(contact.email?contact.email:'')

const updateContact=(e)=>{
  e.preventDefault()
 
  console.log(name,phone,email)
  const update_contact={
    id:shortid.generate(),
    name,
    phone,
    email
  }
  console.log(update_contact)
//   dispatch(addContact(new_contact))
//   navigate("/")

}

//as this component load first useEffect run  and so dispatch id to reducer so that we will able to get data from redux store
useEffect(()=>{
    dispatch(getContact(id))
},[id,dispatch])

  return (
    <div className='card border-0 shadow'>
      <div className="card-header">
        Add a Contact
      </div>
      <div className="card-body">
        <form  onSubmit={updateContact}>

          <div className="form-group">
            <input type="text" className="form-control" required value={name} onChange={e=>setName(e.target.value)} placeholder='Enter Your Name'/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" required value={phone} onChange={e=>setPhone(e.target.value)} placeholder='Enter Your Phone No.' />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" required value={email} onChange={e=>setEmail(e.target.value)} placeholder='Enter Your Email'/>
          </div>
           <button type='submit' className='btn btn-primary'>Update a Contact</button>

        </form>
      </div>
    </div>
  )
}

export default EditContact