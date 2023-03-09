import React, { useState } from "react";
import NavMenu from "../components/NavMenu";
import "../assets/Contact.css";

import profilePic from "../assets/profile-pic.png";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // send formData to server or API here
  };
  return (
    <React.Fragment>
      <NavMenu />
      <section className="contact-section">
        <article className="contact-section__article-top">
          <img
            src={profilePic}
            className="profile-pic"
            alt="A picture of Jon Sundin"
          />
          <ul className="contact-section__list">
            <li className="contact-section__list--item">
              <h1>Jon Sundin</h1>
            </li>
            <li className="contact-section__list--item">
              <h3>Software Engineer</h3>
            </li>
          </ul>
        </article>
     <article className="contact-section__article-bottom">
        <div>
          <strong>Twitter: </strong>
          <a href="https://twitter.com/JonSundin" target="_blank">
            @JonSundin
          </a>
        </div>
        <div>
          <strong>GitHub: </strong>
          <a href="https://github.com/jmsundin" target="_blank">
            jmsundin
          </a>
        </div>
        <div>
          <strong>LinkedIn: </strong>
          <a href="https://www.linkedin.com/in/jonsundin/" target="_blank">
            Jon Sundin
          </a>
        </div>
        </article>
        </section>
        {/* <form onSubmit={handleSubmit} className="contact-form">
                <label for="name">Name</label><input className="contact-form__input" type="text" id="name" name="name" placeholder="Your name..."></input>
                <label for="email">Email</label><input className="contact-form__input" type="text" id="email" name="email" placeholder="Your email..."></input>
                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="What would you like to share or ask?"></textarea>
                <input type="submit" value="Submit"></input>
            </form> */}
    </React.Fragment>
  );
};

export default ContactPage;
