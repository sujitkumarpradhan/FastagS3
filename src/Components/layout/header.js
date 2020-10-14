import React, { Component } from "react";
import { Grid, Row, Col, Button, Navbar, Nav, NavItem } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import Amazonlogo from "../../assets/Amazon.svg";
import "../../style/global.css";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Save================", this.props.pageType);
  }

  render() {
    return (
      <Grid>
        <Col xs={12} md={12}>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <span
                style={{
                  ...styles.headline,
                  fontWeight: "500"
                }}
              >
                FAST
              </span>

              <span
                style={{
                  ...styles.headline,
                  fontWeight: "200"
                }}
              >
                ag
              </span>
            </Col>

            <Col xs={12} md={12}>
              <Link
                className="headerTabbutton tabbutton"
                to={"/"}
                style={{
                  background: this.props.pageType == "home" ? "#E07414" : "#fff",
                  color: this.props.pageType == "home" ? "#fff" : "#000000"
                }}
              >
                Download
              </Link>
              <Link
                className="headerTabbutton tabbutton"
                to={"/upload"}
                style={{
                  background: this.props.pageType == "upload" ? "#E07414" : "#fff",
                  color: this.props.pageType == "upload" ? "#fff" : "#000000"
                }}
              >
                Upload
              </Link>
            </Col>
          </Row>
        </Col>
      </Grid>
    );
  }
}

const styles = {
  headline: {
    color: "#e07414",
    fontSize: "100px"
  }
};

export default Header;
