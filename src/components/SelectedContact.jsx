import {useState, useEffect} from 'react';
import ContactRow from './ContactRow';

function SelectedContact({selectedContactId, setSelectedContactId}){
    
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchContact() {
            console.log(selectedContactId)
          try {
            const response = await fetch(
              `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
            )
            const result = await response.json();
            setContact(result)
            console.log(result)
          } catch (error) {
            console.error(error);
          }
        }
        fetchContact()
      }, []);

    return(
        <>
            {contact && (
                <>
                    <div className='card'>
                        <h1>{contact.name}</h1>
                        <p>Address: {contact.address.street} {contact.address.suite} {contact.address.city}, {contact.address.zipcode}</p>
                        <p>User Name: {contact.username}</p>
                        <p>Website: {contact.website}</p>
                        <p>Phone Number: {contact.phone}</p>
            
                        <h2>Company Information</h2>
                        <p>Company Name: {contact.company.name}</p>
                        <p>Catch Phrase: {contact.company.catchPhrase}</p>

                        <button onClick={() => setSelectedContactId(null)}>Return to List View</button>
                    </div>
                </>
            )}
        </>
    )
}

export default SelectedContact;