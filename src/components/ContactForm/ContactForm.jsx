import React from "react";
import { Formik, Form } from "formik";




const ContactForm = () => {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name"/>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};










export default ContactForm;