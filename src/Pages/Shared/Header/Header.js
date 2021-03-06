import React from "react";
import "./Header.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { user, logOut, admin } = useAuth();
  return (
    <div style={{ marginBottom: "115px" }}>
      <Navbar className="header-bg py-4 fixed-top" expand="lg">
        <Container>
          <Navbar.Brand as={HashLink} to="/home#">
            <h3>
              {" "}
              <span className="text-light">Drive</span>
              <span className="text-danger">Home</span>{" "}
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto menu">
              <Nav.Link as={HashLink} to="/home" className="text-light">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/allProducts" className="text-light">
                Discover
              </Nav.Link>

              {user.email ? (
                <span>
                  <NavDropdown title={user.displayName} id="basic-nav-dropdown">
                    <NavDropdown.Item>
                      <img
                        src={user.photoURL}
                        className="rounded-circle"
                        alt=""
                      />
                      {admin && <h2>Admin</h2>}
                    </NavDropdown.Item>
                    <NavDropdown.Item as={HashLink} to="/pay">
                      Pay
                    </NavDropdown.Item>
                    <NavDropdown.Item as={HashLink} to="/myOrders">
                      My Orders
                    </NavDropdown.Item>

                    <NavDropdown.Item as={HashLink} to="/addReviews">
                      Add Reviews
                    </NavDropdown.Item>
                    {admin && (
                      <div>
                        <NavDropdown.Item as={HashLink} to="/manageProducts">
                          Manage Products
                        </NavDropdown.Item>
                        <NavDropdown.Item as={HashLink} to="/addProducts">
                          Add Products
                        </NavDropdown.Item>
                        <NavDropdown.Item as={HashLink} to="/makeAdmin">
                          Make Admin
                        </NavDropdown.Item>
                      </div>
                    )}
                    <NavDropdown.Item onClick={logOut}>
                      Log Out
                    </NavDropdown.Item>
                  </NavDropdown>
                </span>
              ) : (
                <div className="d-flex">
                  <Nav.Link as={HashLink} to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={HashLink} to="/register">
                    Register
                  </Nav.Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
