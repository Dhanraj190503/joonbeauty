import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import CdnImage from "../comman/CDNImage";

const Header = () => {
  return (
    <header>
      <Navbar expand="md" className="main-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <CdnImage
              src="media/common/logo.svg"
              className="header-logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="main-navbar-nav"
            className="custom-toggle"
          />

          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="ms-auto d-none d-md-flex align-items-center">
              <Nav.Link href="#">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M21,20a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2,6,6,0,0,1,6-6h6A6,6,0,0,1,21,20Zm-9-8A5,5,0,1,0,7,7,5,5,0,0,0,12,12Z" />
                </svg>
              </Nav.Link>

              <Nav.Link href="/cart">
                <svg width="20" height="20" viewBox="0 0 15 15">
                  <path d="M5 3.5C5 2.11929 6.11929 1 7.5 1C8.88071 1 10 2.11929 10 3.5V4H11V3.5C11 1.567 9.433 0 7.5 0C5.567 0 4 1.567 4 3.5V4H5V3.5Z" />
                  <path d="M1.90432 6.33435C1.98872 5.5747 2.63082 5 3.39514 5H11.6051C12.3694 5 13.0115 5.5747 13.0959 6.33435L13.8737 13.3344C13.9724 14.2229 13.2769 15 12.3828 15H2.61737C1.72335 15 1.02781 14.2229 1.12654 13.3344L1.90432 6.33435Z" />
                </svg>
              </Nav.Link>

              <Nav.Link href="#">
                <svg width="20" height="20" viewBox="0 0 48 48">
                  <path d="M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24C46,14.4,40.6,9,34,9z" />
                </svg>
              </Nav.Link>
            </Nav>

            <Nav className="ms-auto d-block d-md-none">
              <div className="mobile-nav-list">
                <Nav.Link as={NavLink} to="/new-arrival">
                  New Arrival
                </Nav.Link>
                <Nav.Link as={NavLink} to="/shop-all">
                  Shop All
                </Nav.Link>
                <Nav.Link as={NavLink} to="/lipstick">
                  Lipstick
                </Nav.Link>
                <Nav.Link as={NavLink} to="/eyeshadow">
                  Eyeshadow
                </Nav.Link>
                <Nav.Link as={NavLink} to="/eyeliners">
                  Eyeliners
                </Nav.Link>
                <Nav.Link as={NavLink} to="/combo-offers">
                  Combo Offers
                </Nav.Link>
                <Nav.Link as={NavLink} to="/blog">
                  Blog
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="sub-category">
        <Container>
          <Nav className="justify-content-center gap-4">
            <NavDropdown title="New Arrival" id="nav-new-arrival">
              <NavDropdown.Item as={Link} to="/new-arrival/makeup">
                Makeup
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/new-arrival/skincare">
                Skincare
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/shop-all">
              Shop All
            </Nav.Link>
            <Nav.Link as={NavLink} to="/lipstick">
              Lipstick
            </Nav.Link>
            <Nav.Link as={NavLink} to="/eyeshadow">
              Eyeshadow
            </Nav.Link>
            <Nav.Link as={NavLink} to="/eyeliners">
              Eyeliners
            </Nav.Link>
            <Nav.Link as={NavLink} to="/combo-offers">
              Combo Offers
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog">
              Blog
            </Nav.Link>
          </Nav>
        </Container>
      </div>
    </header>
  );
};

export default Header;
