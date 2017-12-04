import React from 'react';
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

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
    return (
        <header className="wrapper">
          <Navbar color="faded" light toggleable>
            <NavbarToggler right onClick={this.toggleNavbar} />
            <NavbarBrand tag={Link} to="/">ProjectManager</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavLink tag={Link} to="/account/projects">View Projects</NavLink>
                <NavLink tag={Link} to="/account/login">Log In</NavLink>
              </Nav>
            </Collapse>
          </Navbar>
        </header>
      );
  }
}

