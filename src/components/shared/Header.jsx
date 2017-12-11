import React from 'react';
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const renderProjectsPage = id => <NavLink tag={Link} to="/account/projects/id">View Projects</NavLink>;
const renderLogin = () => <NavLink tag={Link} to="/account/login">Log In</NavLink>;
const renderLogout = () => <NavLink tag={Link} to="/account/api/authentication/logout">Log Out</NavLink>;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { isLoggedIn, firstName } = this.props.authentication;

    return (
        <header className="wrapper">
          <Navbar color="faded" light toggleable>
            <NavbarToggler right onClick={this.toggleNavbar} />
            <NavbarBrand tag={Link} to="/">ProjectManager {this.props.progress}</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                { isLoggedIn ? renderProjectsPage() : '' }
                { isLoggedIn ? renderLogout()  : renderLogin() }
              </Nav>
            </Collapse>
          </Navbar>
        </header>
      );
  }
}

