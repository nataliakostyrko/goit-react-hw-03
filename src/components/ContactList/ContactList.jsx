
import Contact from "../Contact/Contact";

const ContactList = ({ contact, deleteContact }) => {
  return (
    <>
      <ul>
        {contact.map((contact, index) => {
          return (
            <Contact
              key={index}
              contact={contact}
              deleteContact={deleteContact}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
