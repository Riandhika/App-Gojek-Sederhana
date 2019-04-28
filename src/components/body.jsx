import React, { Component } from 'react'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
  } from "reactstrap";
  import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
  

export default class Body extends Component {
 


  render() {
    return (
      <div>
      <Card style={this.props.ukuran}style={{margin: "10px" }}>
      
            <CardImg
            top
            width="100%"
            src={this.props.gambar}
            alt="" />
          
              <CardTitle>
                  <h4>{this.props.menu}</h4>
              </CardTitle>
              

          
        </Card>
       
      </div>
    )
  }
}
