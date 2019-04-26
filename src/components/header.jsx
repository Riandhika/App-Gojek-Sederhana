import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";



export default class Header extends Component {
  render() {
    return (
        <div >
        <Navbar style={{ backgroundColor: " black" }} color="faded" light expand="md">
          <NavbarBrand href="/" className="mr-auto">
          <img src="https://lh3.googleusercontent.com/yYkezRVI_hE8j47gwwgz3EAwk5lK5L5uKOr86XcB1HwYiZQ_OQkhppBUeJstT_Lk1Q" width="40%"></img>
            <h1
              style={{
                fontFamily: "Times New Roman",
                fontWeight: "bold",
                color: "white"
                }}>              
            </h1>     
          </NavbarBrand>
          {/* <NavbarBrand>
            <Button outline color="success" href="/">Home</Button>{' '}
            <Button outline color="success" href="/dashboard">Menu</Button>{' '}  
          </NavbarBrand> */}
        </Navbar>
        
      </div>
    );
  }
}
