import React from 'react';
import { useSelector } from 'react-redux'; 
import ContactBody from './contactBody';

const Contact = () => {
    const contacts = useSelector(state=>state.contacts)
    console.log(contacts)
  return (
    <table className="table shadow ">
 <thead className='bg-danger color-light'>
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
        
          <ContactBody key={contact.id} contact={contact}/>

    ))}
  
  </tbody>
  </table>
  )
}

export default Contact