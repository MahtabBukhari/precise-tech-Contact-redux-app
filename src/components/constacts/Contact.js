import React from 'react';
import { useSelector,useDispatch } from 'react-redux'; 
import ContactBody from './contactBody';


const Contact = () => {
const dispatch = useDispatch()
    const contacts = useSelector(state=>state.user.contacts)
    console.log(contacts)
  return (
    <table className="table shadow ">
 <thead className='bg-danger text-light'>
    <tr>
      <th>
        <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input"/>
        <label className="custom-control-label"></label>
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
        
          <ContactBody key={contact.id} contact={contact} dispatch={dispatch}/>

    ))}
  
  </tbody>
  </table>
  )
}

export default Contact