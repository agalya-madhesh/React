import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Badge from "@mui/material/Badge";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Add to cart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>

          <Badge badgeContent={4} color="primary">
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ color: "white", fontSize: "24px" }}
            />
          </Badge>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
