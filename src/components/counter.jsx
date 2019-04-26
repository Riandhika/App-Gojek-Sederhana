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
  

export default class Counter extends Component {
  state ={
    qty: 0,
  };

  nambah =() => {
    this.setState({
      qty: this.state.qty + 1
    })
    this.props.tambahTotalHarga(this.props.harga)
  }

  ngurang =() => {
    if (this.state.qty === 0){
      return;
  }
  this.setState({
      qty: this.state.qty - 1
  })
  this.props.kurangTotalHarga(this.props.harga)
}


  render() {
    return (
      <div>
      <Card style={this.props.ukuran}style={{margin: "10px" }}>
        <CardImg
            top
            width="100%"
            src={this.props.gambar}
            alt="panganan" />
          <CardBody>
              <CardTitle>
                  <h4>{this.props.menu}</h4>
              </CardTitle>
              

          </CardBody>
        </Card>
        <h3>
                Harga : Rp {this.props.harga}
              </h3>
              <div>
                <Navbar>
                    <Button onClick={this.nambah} className = "btn btn-success m-2">+</Button>{' '}
                    <h2 align="center">{this.state.qty}</h2>
                    <Button onClick={this.ngurang} className = "btn btn-success m-2">-</Button>{' '}
                </Navbar>
              </div>
      </div>
    )
  }
}
