﻿import React from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export default props => (
  <Navbar inverse fixedTop fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={'/'}>tl_react_redux_dotnet</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to={'/'} exact>
          <NavItem>
            <Glyphicon glyph='home' /> Home
          </NavItem>
        </LinkContainer>
        <LinkContainer to={'/counter'}>
          <NavItem>
            <Glyphicon glyph='education' /> Counter
          </NavItem>
        </LinkContainer>
        <LinkContainer to={'/fetchdata'}>
          <NavItem>
            <Glyphicon glyph='th-list' /> Fetch data
          </NavItem>
        </LinkContainer>
          <LinkContainer to={'/events'}>
              <NavItem>
                  <Glyphicon glyph='th-list' /> Events
              </NavItem>
          </LinkContainer>
          <LinkContainer to={'/companies'}>
              <NavItem>
                  <Glyphicon glyph='th-list' /> Companies
              </NavItem>
          </LinkContainer>
          <LinkContainer to={'new_company'}>
              <NavItem>
                  <Glyphicon glyph='th-list' /> Add Company
              </NavItem>
          </LinkContainer>
          <LinkContainer to={'/companiesList'}>
              <NavItem>
                  <Glyphicon glyph='th-list' /> Companies List
              </NavItem>
          </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
