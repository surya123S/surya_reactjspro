import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              React is a JavaScript library for building user interfaces. It is
              maintained by Facebook and a community of individual developers
              and companies. React can be used as a base in the development of
              single-page or mobile applications.{" "}
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>
              React is a JavaScript library for building user interfaces. It is
              maintained by Facebook and a community of individual developers
              and companies. React can be used as a base in the development of
              single-page or mobile applications.{""}
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
              }}
            >
              Reactjs Project #3
            </CardTitle>
            <CardText>
              React is a JavaScript library for building user interfaces. It is
              maintained by Facebook and a community of individual developers
              and companies. React can be used as a base in the development of
              single-page or mobile applications.{""}
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn.hipwallpaper.com/i/90/0/NRb37z.jpg) center / cover",
              }}
            >
              Gaming Using Unity Project #1
            </CardTitle>
            <CardText>
              Unity is a cross-platform game engine developed by Unity
              Technologies, first announced and released in June 2005 at Apple
              Inc.'s Worldwide Developers Conference as a Mac OS X-exclusive
              game engine. As of 2018, the engine had been extended to support
              more than 25 platforms.{" "}
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn.hipwallpaper.com/i/90/0/NRb37z.jpg) center / cover",
              }}
            >
              Gaming Using Unity Project #2
            </CardTitle>
            <CardText>
              Unity is a cross-platform game engine developed by Unity
              Technologies, first announced and released in June 2005 at Apple
              Inc.'s Worldwide Developers Conference as a Mac OS X-exclusive
              game engine. As of 2018, the engine had been extended to support
              more than 25 platforms.{""}
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn.hipwallpaper.com/i/90/0/NRb37z.jpg) center / cover",
              }}
            >
              Gaming Using Unity Project #3
            </CardTitle>
            <CardText>
              Unity is a cross-platform game engine developed by Unity
              Technologies, first announced and released in June 2005 at Apple
              Inc.'s Worldwide Developers Conference as a Mac OS X-exclusive
              game engine. As of 2018, the engine had been extended to support
              more than 25 platforms.{""}
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://media.cloudbooklet.com/wp-content/uploads/2018/12/03053805/75006572-how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-18.04-in-google-cloud-1024x576.jpg) center / cover",
              }}
            >
              Django Web Project #1
            </CardTitle>
            <CardText>
              Django is a Python-based free and open-source web framework, which
              follows the model-template-view architectural pattern. It is
              maintained by the Django Software Foundation, an independent
              organization established as a 501 non-profit. Django's primary
              goal is to ease the creation of complex, database-driven websites.{" "}
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://media.cloudbooklet.com/wp-content/uploads/2018/12/03053805/75006572-how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-18.04-in-google-cloud-1024x576.jpg) center / cover",
              }}
            >
              Django Web Project #2
            </CardTitle>
            <CardText>
              Django is a Python-based free and open-source web framework, which
              follows the model-template-view architectural pattern. It is
              maintained by the Django Software Foundation, an independent
              organization established as a 501 non-profit. Django's primary
              goal is to ease the creation of complex, database-driven websites.
              {""}
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://media.cloudbooklet.com/wp-content/uploads/2018/12/03053805/75006572-how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-18.04-in-google-cloud-1024x576.jpg) center / cover",
              }}
            >
              Django Web Project #3
            </CardTitle>
            <CardText>
              Django is a Python-based free and open-source web framework, which
              follows the model-template-view architectural pattern. It is
              maintained by the Django Software Foundation, an independent
              organization established as a 501 non-profit. Django's primary
              goal is to ease the creation of complex, database-driven websites.
              {""}
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Gaming</Tab>
          <Tab>Django</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
