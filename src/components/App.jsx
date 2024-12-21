import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import contact from "..//assets/contact.json";



function App()  {
    return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox />
  <ContactList />
</div>
);
}

export default App;