import React, { useState } from "react";
import { Navbar, Button, ButtonGroup, NavbarBrand } from "reactstrap";

export default function MyHeader() {
  return (
    <>
      <Navbar color='success'>
        <NavbarBrand className='pl-2 pt-2 pb-2'>
          <h1>Lambda Eats</h1>
        </NavbarBrand>
        <ButtonGroup size='lg' className='pr-2 pt-2 pb-2'>
          <Button color='primary'>Home</Button>
          <Button color='primary'>Help</Button>
        </ButtonGroup>
      </Navbar>
    </>
  );
}
