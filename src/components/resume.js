import React, { Component } from 'react';

import react from "react";

class Resume extends React.Component {
  render() {
    return (
      <diV className="resumeContainer">

        <div className="resumeHeader">
          <h1 className="resumeName">Thuy Nguyen</h1>
          <h3 className="resumeTitle">Front-End Developer</h3>
        </div>

        <div className="contactContainer">
          <h3 className="phone">(832)860-3836</h3>
          <h3 className="email">ngtan3@gmail.com</h3>
          <h3 className="website">www.thuyanguyen.com</h3>
          <h3 className="github">Github: https://github.com/thuy-n3</h3>
        </div>

        <div className="summaryContainer">
          <h1 className="summaryTitle">Summary</h1>
          <p className="summaryText">I am a creative front-end developer with a business background. Utilizing techincal skills to develop websites and applications to solve wide range of needs. Seeking a company to apply my abilitiess in key roles that help the company's growth, and to grow as a developer.</p>
        </div>

        <div className="skillsContainer">
          <h1 className="skillsTitle">Skills</h1>
          <ul className="skillsList">
            <li className="progLanguage">
              Programming Languages: Javascript(React.JS, Node.Js), HTML, CSS, Sass, JQuery, PHP
            </li>
            <li className="technologies">
              Technologies: Webflow, Sketch, WordPress, Drupal, Bootstrap, MongoDB, Git, Github, Firebase, NPM
            </li>
            <li className="operatingSystems">
              Operating Systems/ Cloud Platform: Heroku
            </li>
            <li className="design">
              Design: Responsive Design, UI/UX Design
            </li>
            <li className="accounting">
              Accounting: PeopleSoft Accounting, QuickBooks
            </li>
            <li className="other">
              Other: Microsoft Suite, Adobe Acrobat, Mac OS
            </li>
          </ul>
        </div>

        <div className="education">
          <h1 className="educationTitle">Education</h1>
          <h3 className="eduName">C.T. Bauer College of Business, University of Houston, BA Finance and Marketing</h3>
          <h3 className="eduName">The Iron Yard Houston, Front-End Engineering</h3>
        </div>

      </diV>
    )
  }
}

export default Resume;