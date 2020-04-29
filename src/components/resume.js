import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://scontent.fhyd1-2.fna.fbcdn.net/v/t1.0-9/s960x960/95093521_2730050273787989_6769415388221407232_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_oc=AQlMFgUekuX813JbSzZPLyvknroi9MAHOt6KEtpVwdO1imV8s0R_4q8tlyNAxdJiI4LS9G5sT2GDK6BZTjJhS2zG&_nc_ht=scontent.fhyd1-2.fna&_nc_tp=7&oh=76359a4381aed8f372e9b2410674430c&oe=5ECFF67D"
                alt="avatar"
                style={{ height: "350px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Surya Karanam</h2>
            <h4 style={{ color: "grey" }}>
              Techinical Skill Trainer (Python){" "}
            </h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Im Working in APSSDC SKILL Organization.APSSDC is a not-for-profit
              organization (Section-8 company) formed as a Public–Private
              Partnership (PPP) corporation to promote Skill Development &
              Entrepreneurship in the state of Andhra Pradesh. The corporation
              is incorporated as a with a 49% stake holding by Govt of AP and
              51% private equity component Headquarters location: Tadepalle
              mandal, Guntur district Founded: 2015
            </p>
            ->
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Kakinada, EastGodavari</p>
            <h5>Phone</h5>
            <p>8382401910</p>
            <h5>Email</h5>
            <p>karanam.s@apssdc.in</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2017}
              endYear={2019}
              schoolName="ADITYA ENGINEERING COLLEGE-[M.TECH] "
              schoolDescription="Aditya Engineering College is an Autonomous engineering college in Surampalem, Peddapuram, East Godavari district, Andhra Pradesh, India."
            />

            <Education
              startYear={2011}
              endYear={2015}
              schoolName="ADITYA ENGINEERING COLLEGE- [B.TECH] "
              schoolDescription="Aditya Engineering College is an Autonomous engineering college in Surampalem, Peddapuram, East Godavari district, Andhra Pradesh, India."
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2016}
              endYear={2018}
              jobName="Technical Trainee In T-Hub ADITYA"
              jobDescription="Responsible for preparing, conducting, and evaluating technical training programs. Writes literature and materials to be used in programs and designs exercises to enhance lectures. Conducts classes regarding safety, security, installation, programming, maintenance, and repair of software, machinery, and equipment.
              "
            />

            <Experience
              startYear={2018}
              endYear={2020}
              jobName="Techinical Skill Trainee in APSSDC"
              jobDescription="Conducts training classes by presenting job-specific, company-specific, and generic software applications and personal computer classes.Maintains quality service by establishing and enforcing organization standards.
              Evaluates training by evaluating effectiveness of training to specific job applications.
              Maintains technical knowledge by attending educational workshops; reviewing publications.
              Contributes to team effort by accomplishing related results as needed."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="Python" progress={100} />
            <Skills skill="Django" progress={60} />
            <Skills skill="javascript" progress={90} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="NodeJS" progress={50} />
            <Skills skill="React" progress={30} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
