import React from 'react'

function ContactRow( { setSelectedContactId, contact }){

return(
    <tr className='table-row-link'
    onClick={() =>{
        setSelectedContactId(contact.id);
    }}>
    <td>{contact.name}</td>
    <td>{contact.email}</td>
    <td>{contact.phone}</td>
  </tr>
)
}

export default ContactRow