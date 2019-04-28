import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
} from "reactstrap";
import { Container, Row, Col } from 'reactstrap';
import Popup from "reactjs-popup";


export default class Header extends Component {

  // constructor(props) {
  //   super(props);

  //   this.toggleNavbar = this.toggleNavbar.bind(this);
  //   this.state = {
  //     collapsed: true
  //   };
  // }

  // toggleNavbar() {
  //   this.setState({
  //     collapsed: !this.state.collapsed
  //   });
  // }

  
  render() {
    
    return (
        <div >
          <Navbar style={{ backgroundColor: " #202020  " }} color="faded" light expand="md">
          <NavbarBrand href="/" className="mr-auto" align="center">
          <img src="http://yopiefranz.com/wp-content/uploads/2017/07/GOJEK-Lampung.jpg" width="40%"></img>
            <h1
              style={{
                fontFamily: "Times New Roman",
                fontWeight: "bold",
                color: "white"
                }}>              
            </h1>     
          </NavbarBrand>
          
          
        </Navbar>
        <Navbar style={{ backgroundColor: " #202020  " }} color="faded" light expand="md">
         
          <NavbarBrand >
          <Container align="center">
              <Row >
                  <Col xs="4" md="4" lg="3" >
                    <Button outline color="" href="/"><img src="http://clipart-library.com/images/di9KnoyAT.png" width="50%" /></Button>{' '}
                    <Button outline color="" href="/restaurant"><img src="https://www.skyharbor.com/images/default-source/siteimages/iconsmenusystem/dining.png" width="50%" /></Button>{' '}
                    <Popup trigger={<Button outline color=""><img src="https://dezov.s3.amazonaws.com/media/information-icon-white-png13a-485e-ade4-a67c2a461d06.png" width="50%" /></Button>} >
                      <div fontSize="4">Ujicoba cloning gojek</div>
                    </Popup>
                    <Popup trigger={<Button outline color=""><img src="http://star-indonesia.id/en/web/images/businessman-xxl.png" width="50%" /></Button>} >
                      <div fontSize="4">Belum Punya Akun</div>
                    </Popup>
                  </Col>  
              </Row>
            </Container>
          </NavbarBrand>
          
        </Navbar>
        <div class="fixed-bottom" align="center">
                By: Riandhika S.P
        </div>
      
      
        {/* <Navbar>
        <NavbarBrand >
            <Button outline color="success" href="/">Home</Button>{' '}
            <Button outline color="success" href="/restaurant">Restaurant</Button>{' '}  
          </NavbarBrand>
          </Navbar> */}
      </div>

    );
  };
}
