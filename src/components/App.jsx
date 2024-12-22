import { useEffect, useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import contacts from "..//assets/contact.json";



function App() {
    const localeContacts = () => {
    const savedContacts = localStorage.getItem("Contacts");
    return savedContacts ? JSON.parse(savedContacts) : contacts;
  };

useEffect(() => {
    window.localStorage.setItem("Contacts", JSON.stringify(contact));
  }, [contacts]);
    const [contact, setContact] = useState(localeContacts);
    const [filter, setFilter] = useState("");


    const addContact = (newContact) => {
        setContact((prevContact) => {
            return [...prevContact, newContact];
        })
    };


    const deleteContact = (contactId) => {
        setContact((prevContact) => {
            return prevContact.filter((contact) => contact.id !== contactId);
        });
    };
    const searchContact = contact.filter((contacts) =>
        contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
    
    
    
    return (
    <div>
  <h1>Phonebook</h1>
            <ContactForm addContact={addContact} />
            <SearchBox value={filter} onFilter={setFilter} />
            <ContactList deleteContact={deleteContact} contact={searchContact} />
    </div>
);
}

export default App;