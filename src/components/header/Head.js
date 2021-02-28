import React, {useState} from "react";
import logo from "../../images/logo.png";
import language from "../../images/lang.png";
import {Navbar, Nav, Container, NavDropdown, Row, Col} from "react-bootstrap";
import {BsSearch} from "@react-icons/all-files/bs/BsSearch";
import {IoIosMail} from "@react-icons/all-files/io/IoIosMail";
import {FaPhoneVolume} from "@react-icons/all-files/fa/FaPhoneVolume";
import {FaFacebookF} from "@react-icons/all-files/fa/FaFacebookF";

import {Link} from "gatsby";

export default function Head() {
  const [state, setState] = useState({
    condition: false,
  });

  const handleClick = () => {
    setState({
      condition: !state.condition,
    });
  };

  return (
    <>
      <div className="custom-header">
        <div className="top-nav">
          <Container>
            <Row>
              <Col>
                <ul className="emillink">
                  <li>
                    <span className="green-color">
                      <FaPhoneVolume />
                    </span>
                    &nbsp;(xx) 123 456 789 | (xx) 123 456 789{" "}
                  </li>
                  <li>
                    <span className="green-color">
                      <IoIosMail />
                    </span>
                    &nbsp;email@golfasia.dk
                  </li>
                </ul>
              </Col>
              <Col>
                <div className="followguide">
                  <p>
                    Follow us on Facebook <FaFacebookF />{" "}
                  </p>
                  | &nbsp;
                  <img src={language} className=" img-fluid" alt="language" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Navbar collapseOnSelect expand="lg" bg="" variant="">
          <Container>
            <Navbar.Brand>
              <img src={logo} className="App-logo img-fluid" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className={state.condition ? "button toggled" : "button"}
            />
            <Navbar.Collapse id="responsive-navbar-nav" defaultActiveKey="/">
              <Nav className="ml-auto">
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>

                <NavDropdown title="Areas" id="collasible-nav-dropdown">
                  <Row>
                    <Col xs={8}>
                      <h5 className="menutitle"> Thailand</h5>
                      <ul className="short-menu">
                        <li>
                          <a>
                            <Link to="/area">Bangkok</Link>
                          </a>
                        </li>
                        <li>
                          <a>
                            <Link to="/area">Chiang Mai & Nordthland</Link>
                          </a>
                        </li>
                        <li>
                          <a>
                            <Link to="/area">Hua Hin</Link>
                          </a>
                        </li>
                        <li>
                          <a>
                            <Link to="/area">Koh Samui</Link>{" "}
                          </a>
                        </li>
                        <li>
                          <a>
                            <Link to="/area">Pattaya</Link>
                          </a>
                        </li>
                        <li>
                          <a>
                            <Link to="/area">Phukety</Link>
                          </a>
                        </li>
                        <li>
                          <a>
                            <Link to="/area">River Kwai</Link>
                          </a>
                        </li>
                      </ul>
                    </Col>

                    <Col xs={4}>
                      <h5 className="menutitle"> Vietnam</h5>
                      <ul className="short-menu">
                        <li>
                          <a>City</a>
                        </li>
                      </ul>

                      <div className="divider"></div>

                      <h5 className="menutitle"> Vietnam</h5>
                      <ul className="short-menu">
                        <li>
                          <a>City</a>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </NavDropdown>

                <Nav.Link>
                  <Link to="/golf-with-hotels">Golf With Hotel</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/">Golf Courses & Rates</Link>{" "}
                </Nav.Link>
                <Nav.Link>
                  <Link to="/">Hotels</Link>{" "}
                </Nav.Link>
                <Nav.Link>
                  <Link to="/">About Us</Link>{" "}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>

            <ul className="contact-form-right">
              <li>
                <a href="#" className="desktop-hide fbicons">
                  <FaFacebookF />{" "}
                </a>
              </li>
              <li>
                <a href="#deets">
                  <span className="contactus-btn"> Contact </span>
                </a>
              </li>
              <li>
                <a href="#memes">
                  <span className="search-her">
                    <BsSearch />
                  </span>
                </a>
              </li>
            </ul>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
