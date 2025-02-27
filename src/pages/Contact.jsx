import React from 'react';

const Contact = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    const formData = new FormData(event.target); // Get form data
    const formInputData = Object.fromEntries(formData.entries()); // Convert to object
    console.log(formInputData); // Log the form data
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Name</label>
          <input
            className="form-control"
            type="text"
            required
            autoComplete="off"
            placeholder="Enter your name"
            name="username"
            id="username"
          />

          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            required
            autoComplete="off"
            placeholder="Enter your email"
            name="email"
            id="email"
          />

          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            rows="10"
            required
            autoComplete="off"
            placeholder="Enter your message"
            name="message"
            id="message"
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;