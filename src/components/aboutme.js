import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Surya Karanam</h2>
            <img
              src="https://scontent.fhyd1-2.fna.fbcdn.net/v/t1.0-9/40498846_595189457545980_8130458208989872128_n.jpg?_nc_cat=111&_nc_sid=8024bb&_nc_oc=AQnrWO34atNby1FHOoAClUU3Qx9EWkm6gu4yzAtdEBBc7fm9cgdvf0VUW-qXVY_7vMIgzsk0SClzcmsBSpas4Feo&_nc_ht=scontent.fhyd1-2.fna&oh=acedcb4e59b7f0283d831dd9e17007ab&oe=5ECCF56A"
              alt="avatar"
              style={{ height: "500px" }}
              style={{ width: "350px" }}
            />
            <p style={{ width: "100%", margin: "auto", paddingTop: "1em" }}>
              My Name is Surya Karanam and Im from EastGodavari,Kakinada I
              always try to learn new technilogies,programming challenges
              Developing Games,Web Apps. I have strong skills in Programming
              Languages such as (i) Python Problem Sloving (ii) Advanced Python
              Concepts (iii) Python Django Web Development (iv) Web Desiging
              Using ReactJs (v) HTML and JAVA SCRIPT.
            </p>
          </Cell>
          <Cell col={6}></Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
