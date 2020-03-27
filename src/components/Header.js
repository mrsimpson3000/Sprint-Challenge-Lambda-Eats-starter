import React from "react";
import { Navbar, Button, ButtonGroup, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";

export default function MyHeader() {
  return (
    <>
      <Navbar color='success'>
        <NavbarBrand className='pl-2 pt-2 pb-2'>
          <h1>Lambda Eats</h1>
        </NavbarBrand>
        <ButtonGroup size='lg' className='pr-2 pt-2 pb-2'>
          <Link to='/'>
            <Button color='primary'>Home</Button>
          </Link>
          <Link to='/'>
            <Button color='primary'>Help</Button>
          </Link>
        </ButtonGroup>
      </Navbar>
    </>
  );
}
