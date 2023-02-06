import React, { useState } from 'react';
import './css/nav.css'
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
  NavbarBrand
} from 'reactstrap';

function Example(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
      <Nav horizontal='end' className='navbar'>
        <NavItem>
          <NavLink active href="./home" className='nav-link'>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="./about" className='nav-link'>About</NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav className='nav-link'>
          Dropdown
        </DropdownToggle>
          <DropdownMenu className='dropdown'>
            <DropdownItem href='./work' className='dropdown-link'>Work</DropdownItem>
            <DropdownItem href='./work' className='dropdown-link'>Gallery</DropdownItem>
            <DropdownItem disabled className='dropdown-link'>Disabled</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="./contact" className='nav-link'>Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#" className='nav-link'>
            Disabled Link
          </NavLink>
        </NavItem>
      </Nav>  
  );
}

export default Example;