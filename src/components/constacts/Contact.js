import React from 'react';
import { useSelector } from 'react-redux'; 

const Contact = () => {
    const contacts = useSelector(state=>state.contacts)
    console.log(contacts)
  return (
    <table className="table shadow ">
 <thead className='bg-danger'>
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
    </tr>
  </thead>
  <tbody>
    {contacts.map(contact=>(
          <tr>
          <th scope="row">1</th>
          <td>{contact.name}</td>
          <td>{contact.phone}</td>
          <td>{contact.email}</td>
        </tr>

    ))}
  
  </tbody>
  </table>
  )
}

export default Contact