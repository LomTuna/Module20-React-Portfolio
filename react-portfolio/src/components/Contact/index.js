import React from "react";

function ContactForm() {
  return(
    <section>
      <h1>Contact Me!</h1>
      <form id="contact-form">
        <div>
          <lable htmlFor="name">Name:</lable>
          <input type="text" name="name"/>
        </div>
        <div>
          <lable htmlFor="email">Email:</lable>
          <input type="email" name="email"/>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5"  />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  )

  //JSX
}

export default ContactForm;