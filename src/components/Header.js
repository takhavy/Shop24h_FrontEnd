import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import logo from "../assets/image/logo/Ngôi Nhà Xinh (1).png";
function Header() {
  const [hoverHome, setHoverHome] = React.useState("black");
  const [hoverService, setHoverSerivce] = React.useState("black");
  const [hoverCatalog, setHoverCatalog] = React.useState("black");
  const [hoverContact, setHoverContact] = React.useState("black");
  const [hoverCart, setHoverCart] = React.useState("black");
  const [hoverButton, setHoverButton] = React.useState("#bfbf00");
  return (
    <>
      <section
        id="topbar"
        className="d-flex align-items-center"
        style={{ color: "green",backgroundColor:'#d6ffd6' }}
      >
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="fa-solid fa-envelope"></i>ngoinhaxinh88@gmail.com
            <i className="fa-solid fa-phone"></i> 0933784226
          </div>
          <div className="social-links d-none d-md-block">
            <a href="" className="facebook">
              <i className="fa-brands fa-facebook" style={{marginRight:'15px'}}></i>
            </a>
            <a href="" className="twitter">
              <i className="fa-brands fa-twitter" style={{marginRight:'15px'}}></i>
            </a>
            <a href="" className="instagram">
              {" "}
              <i className="fa-brands fa-instagram" style={{marginRight:'15px'}}></i>
            </a>
            <a href="" className="linkedin">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
      <header>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">
          <img
            style={{ width: "270px", marginLeft: "50px" }}
            src={logo}
            alt="img-logo-ngoi-nha-xinh"
          ></img>
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav
            navbar
            style={{ fontFamily: "Georgia, serif" }}
          >
            <NavItem>
              <NavLink
                style={{ color: `${hoverHome}` }}
                onMouseOver={() => {
                  setHoverHome("green");
                }}
                onMouseOut={() => {
                  setHoverHome("black");
                }}
                href="/"
              >
                HOME
              </NavLink>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle
                style={{ color: `${hoverCatalog}` }}
                onMouseOver={() => {
                  setHoverCatalog("green");
                }}
                onMouseOut={() => {
                  setHoverCatalog("black");
                }}
                caret
                nav
              >
                CATALOG
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="/#product">Shop</DropdownItem>
                <DropdownItem href="/products">Single Product</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Check out</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink
                style={{ color: `${hoverService}` }}
                onMouseOver={() => {
                  setHoverSerivce("green");
                }}
                onMouseOut={() => {
                  setHoverSerivce("black");
                }}
                href="/#services"
              >
                SERVICE
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ color: `${hoverContact}` }}
                onMouseOver={() => {
                  setHoverContact("green");
                }}
                onMouseOut={() => {
                  setHoverContact("black");
                }}
                href="/#contact"
              >
                CONTACT
              </NavLink>
            </NavItem>
            <NavItem
              style={{
                marginLeft: "400px",
                marginRight: "30px",
              }}
            >
              <NavLink
                style={{ color: `${hoverCart}` }}
                onMouseOver={() => {
                  setHoverCart("green");
                }}
                onMouseOut={() => {
                  setHoverCart("black");
                }}
                href="#"
              >
                {" "}
                <i className="fa-solid fa-cart-arrow-down fa-xl"></i>CART
              </NavLink>
            </NavItem>
            <NavItem>
              <Button color="success" outline>
                Sign In
              </Button>
            </NavItem>
            <NavItem style={{ marginLeft: "20px" }}>
              <Button
                color="warning"
                style={{ color: `${hoverButton}` }}
                onMouseOver={() => {
                  setHoverButton("white");
                }}
                onMouseOut={() => {
                  setHoverButton("#bfbf00");
                }}
                outline
              >
                Sign Up
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </header>
    </>
  );
}

export default Header;
