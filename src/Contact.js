import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact SkillSphere</h1>
      <p>
        Have questions or need support? We’re here to help you on your skills
        journey!
      </p>
      <form className="contact-form">
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
