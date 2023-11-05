import React, { useState } from 'react';
import TextInput from '../common/TextInput';
import TextArea from '../common/TextArea';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', name, email, message);
  };

  return (
    <div className="contact-page">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Name"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <TextInput
          label="Email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <TextArea
          label="Message"
          name="message"
          value={message}
          onChange={handleMessageChange}
        />
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
}

export default ContactPage;
