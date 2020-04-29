import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://scontent.fhyd1-2.fna.fbcdn.net/v/t1.0-9/s960x960/95093521_2730050273787989_6769415388221407232_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_oc=AQlMFgUekuX813JbSzZPLyvknroi9MAHOt6KEtpVwdO1imV8s0R_4q8tlyNAxdJiI4LS9G5sT2GDK6BZTjJhS2zG&_nc_ht=scontent.fhyd1-2.fna&_nc_tp=7&oh=76359a4381aed8f372e9b2410674430c&oe=5ECFF67D"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1> Surya Karanam </h1>
              <p> Technical Skill Trainer</p>
              <hr />
              <p>
                | HTML/CSS | JavaScript | React | NodeJS | Django | Gaming |
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/suryakaranam5/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/surya123S"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Freecodecamp */}
                <a
                  href="https://www.freecodecamp.org/surya_karanam"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/SuryaDLeader/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
