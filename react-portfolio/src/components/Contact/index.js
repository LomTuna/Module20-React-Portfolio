import React, { useState } from "react";


function ContactForm() {
  const [formState, setFormState] = useState({name: '', email: '', message: '',}); 
  const {name, email, message } = formState; 
  function handleChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value  })
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  
  return(
    <section>
      <h1>Contact Me!</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <lable htmlFor="name">Name:</lable>
          <input type="text" name="name" defaultValue={name} onChange={handleChange}/>
        </div>
        <div>
          <lable htmlFor="email">Email:</lable>
          <input type="email" name="email" defaultValue={email} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  )

  //JSX
}

export default ContactForm;