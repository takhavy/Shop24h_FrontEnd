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
} from "reactstrap";
import {
  Grid,
  Typography,
  TextField,
  Box,
  Button,
  Modal,
  IconButton,
  MenuItem,
  Menu,
  Tooltip,
  Avatar,
} from "@mui/material";
import { useState, useEffect } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/image/logo/Ngôi Nhà Xinh (1).png";
function Header() {
  const [hoverHome, setHoverHome] = React.useState("black");
  const [hoverService, setHoverSerivce] = React.useState("black");
  const [hoverCatalog, setHoverCatalog] = React.useState("black");
  const [hoverContact, setHoverContact] = React.useState("black");
  const [hoverCart, setHoverCart] = React.useState("black");
  const [openModalLogin, setOpenModalLogin] = React.useState(false);
  const [openModalSignUp, setOpenModalSignUp] = React.useState(false);
  const handleCloseLogin = () => setOpenModalLogin(false);
  const handleCloseSignUp = () => setOpenModalSignUp(false);
  //Login Form
  const [emailSignIn, setEmailSignIn] = useState("");
  const [passwordSignIn, setPasswordSignIn] = useState("");
  //SignUp Form
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 850,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  useEffect(() => {
    auth.onAuthStateChanged((result) => {
      console.log(result);
      setUser(result);
    });
  }, []);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const loginGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const logoutGoogle = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <section
        id="topbar"
        className="d-flex align-items-center"
        style={{ color: "green", backgroundColor: "#d6ffd6" }}
      >
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="fa-solid fa-envelope"></i>ngoinhaxinh88@gmail.com
            <i className="fa-solid fa-phone"></i> 0933784226
          </div>
          <div className="social-links d-none d-md-block">
            <a href="" className="facebook">
              <i
                className="fa-brands fa-facebook"
                style={{ marginRight: "15px" }}
              ></i>
            </a>
            <a href="" className="twitter">
              <i
                className="fa-brands fa-twitter"
                style={{ marginRight: "15px" }}
              ></i>
            </a>
            <a href="" className="instagram">
              {" "}
              <i
                className="fa-brands fa-instagram"
                style={{ marginRight: "15px" }}
              ></i>
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
            <Nav navbar style={{ fontFamily: "Georgia, serif" }}>
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
              {user ? (
                <NavItem style={{marginLeft:'200px'}}>
                  <Tooltip title="Account Settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src={user.photoURL} />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    anchorEl={anchorElUser}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    keepMounted
                    transformOrigin={{ vertical: "top", horizontal: "right" }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography variant="body1">
                        {user.displayName}
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography
                        variant="body1"
                        onClick={logoutGoogle}
                        color="primary"
                      >
                        <b>Logout</b>
                      </Typography>
                    </MenuItem>
                  </Menu>
                </NavItem>
              ) : (
                <>
                  {/*Button SignIn SignUp*/}
                  <NavItem>
                    <Button
                      color="success"
                      outline
                      onClick={() => {
                        setOpenModalLogin(true);
                      }}
                    >
                      Sign In
                    </Button>
                  </NavItem>
                  <NavItem style={{ marginLeft: "20px" }}>
                    <Button
                      color="warning"
                      outline
                      onClick={() => {
                        setOpenModalSignUp(true);
                      }}
                    >
                      Sign Up
                    </Button>
                  </NavItem>
                  {/*Modal SignIn*/}
                  <Modal
                    open={openModalLogin}
                    onClose={handleCloseLogin}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Grid container textAlign="center">
                        <Grid item xs={12} lg={12} md={12} sm={12} mt={3}>
                          <Typography
                            variant="h4"
                            gutterBottom
                            component="div"
                            style={{ color: "green" }}
                          >
                            <b>Welcome to Ngôi Nhà Xinh !</b>
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          lg={12}
                          md={12}
                          sm={12}
                          mt={3}
                          padding={1}
                        >
                          <TextField
                            label="Email Address *"
                            variant="outlined"
                            fullWidth
                            value={emailSignIn}
                            onChange={(event) => {
                              setEmailSignIn(event.target.value);
                            }}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          lg={12}
                          md={12}
                          sm={12}
                          mt={3}
                          padding={1}
                        >
                          <TextField
                            type="password"
                            label="Password *"
                            variant="outlined"
                            fullWidth
                            value={passwordSignIn}
                            onChange={(event) => {
                              setPasswordSignIn(event.target.value);
                            }}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          lg={12}
                          md={12}
                          sm={12}
                          mt={3}
                          padding={1}
                        >
                          <Button
                            color="success"
                            variant="contained"
                            size="large"
                            fullWidth
                          >
                            LOG IN
                          </Button>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          lg={12}
                          md={12}
                          sm={12}
                          mb={1}
                          padding={1}
                        >
                          <Button
                            color="warning"
                            variant="contained"
                            size="large"
                            fullWidth
                            onClick={loginGoogle}
                          >
                            <i
                              className="fa-brands fa-google"
                              style={{ marginRight: "10px" }}
                            ></i>
                            LOG IN WITH GOOGLE
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </Modal>
                  {/*Modal SignUp*/}
                  <Modal
                    open={openModalSignUp}
                    onClose={handleCloseSignUp}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Grid container textAlign="center">
                        <Grid item xs={12} lg={12} md={12} sm={12} mt={3}>
                          <Typography variant="h4" gutterBottom component="div">
                            Sign Up For Free
                          </Typography>
                        </Grid>
                        <Grid
                          container
                          item
                          xs={12}
                          lg={12}
                          md={12}
                          sm={12}
                          mt={3}
                        >
                          <Grid item xs={6} lg={6} md={12} sm={12} padding={1}>
                            <TextField
                              label="Firstname *"
                              variant="outlined"
                              fullWidth
                              value={firstname}
                              onChange={(event) => {
                                setFirstname(event.target.value);
                              }}
                            />
                          </Grid>
                          <Grid item xs={6} lg={6} md={12} sm={12} padding={1}>
                            <TextField
                              label="Lastname *"
                              variant="outlined"
                              fullWidth
                              value={lastname}
                              onChange={(event) => {
                                setLastname(event.target.value);
                              }}
                            />
                          </Grid>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          lg={12}
                          md={12}
                          sm={12}
                          mt={3}
                          padding={1}
                        >
                          <TextField
                            label="Email Address *"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={(event) => {
                              setEmail(event.target.value);
                            }}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          lg={12}
                          md={12}
                          sm={12}
                          mt={3}
                          padding={1}
                        >
                          <TextField
                            type="password"
                            label="Set A Password *"
                            variant="outlined"
                            value={password}
                            fullWidth
                            onChange={(event) => {
                              setPassword(event.target.value);
                            }}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          lg={12}
                          md={12}
                          sm={12}
                          mt={3}
                          padding={1}
                        >
                          <Button
                            color="success"
                            variant="contained"
                            size="large"
                            fullWidth
                          >
                            SIGN UP
                          </Button>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          lg={12}
                          md={12}
                          sm={12}
                          mb={1}
                          padding={1}
                        >
                          <Button
                            color="warning"
                            variant="contained"
                            size="large"
                            fullWidth
                            onClick={logoutGoogle}
                          >
                            <i
                              className="fa-brands fa-google"
                              style={{ marginRight: "10px" }}
                            ></i>
                            LOG IN WITH GOOGLE
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </Modal>
                </>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
