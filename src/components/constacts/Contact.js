import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux'; 
import { SelectAllContact } from '../../redux/actions/contactActions';
import ContactBody from './contactBody';


const Contact = () => {
const dispatch = useDispatch()
// how to select all contacts
const [selectAll,setSelectAll]=useState(false)
    const contacts = useSelector(state=>state.user.contacts)
    console.log(selectAll)

useEffect(()=>{
  if(selectAll){

    // the method to only send the ids of all contacts
    dispatch(SelectAllContact(contacts.map(contact=> contact.id)))
  }
},[selectAll])

  return (
    <table className="table shadow ">
 <thead className='bg-danger text-light'>
    <tr>
      <th>
        <div className="custom-control custom-checkbox">
        <input checked={selectAll} onClick={()=>setSelectAll(!selectAll)} id="selectAll" type="checkbox" className="custom-control-input"/>
        <label htmlFor='selectAll' className="custom-control-label"></label>
        </div>
     </th>
      <th>Name</th>
      <th>Phone</th>
      <th>E-mail</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {contacts.map(contact=>(
        
          <ContactBody key={contact.id} contact={contact} dispatch={dispatch} selectAll={selectAll}/>

    ))}
  
  </tbody>
  </table>
  )
}

export default Contact