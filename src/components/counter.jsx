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

  nambah =(id) => {
    this.setState({
      qty: this.state.qty + 1
    })
    const item = this.props.daftar.find(item => item.id === id)
    this.props.tambahTotalHarga(this.props.item.price, item)
    this.props.setBarang(item)
   console.log(item)
  }

  ngurang =(id) => {
    if (this.state.qty === 0){
      return;
  }
  this.setState({
      qty: this.state.qty - 1
  })
  const item = this.props.daftar.find(item => item.id === id)
  this.props.kurangTotalHarga(this.props.item.price, item)
  
  
}


  render() {
    const {item} = this.props
    const {nama,price,gambar,id} = item
    console.log(item,'>>>>>>')
    return (
      <div>
      <Card style={this.props.ukuran}style={{margin: "10px" }}>
        <CardImg
            top
            width="100%"
            src={gambar}
            alt="panganan" />
          <CardBody>
              <CardTitle>
                  
              </CardTitle>
              

          </CardBody>
        </Card>
        <h3>
                Harga : Rp {price}
              </h3>
              <div>
                <Navbar>
                    <Button onClick={()=>this.ngurang(id)} className = "btn btn-danger m-2">-</Button>{' '}
                    <h2 align="center">{this.state.qty}</h2>
                    <Button onClick={()=>this.nambah(id)} className = "btn btn-success m-2">+</Button>{' '}
                </Navbar>
              </div>
      </div>
    )
  }
}
