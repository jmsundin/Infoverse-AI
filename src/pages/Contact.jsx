import React, { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import "./Contact.css";

import profilePic from "../assets/me-profile1-bg-200x267.jpeg";

const ContactPage = () => {
  const [page, setPage] = useState("Contact");
  return (
    <React.Fragment>
      <NavBar page={page}/>
      <div className="gradient__bg contact-section">
        <div className="contact-section__header">
          <div className="card">
            <img
              src={profilePic}
              width="200"  
              height="200"
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
          </div>
        </div>
        <div className="gradient__bg contact-section__footer">
          <div className="card">
            <div>
              <strong>E-Mail: </strong>
              jon [at] infoverse [dot] ai
            </div>
            <div>
              <strong>LinkedIn: </strong>
              <a href="https://www.linkedin.com/in/jonsundin/" target="_blank">
                Jon Sundin
              </a>
            </div>

            <div>
              <strong>GitHub: </strong>
              <a href="https://github.com/jmsundin" target="_blank">
                jmsundin
              </a>
            </div>
            <div>
              <strong>Twitter: </strong>
              <a href="https://twitter.com/JonSundin" target="_blank">
                @JonSundin
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactPage;
