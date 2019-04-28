import React, { Component } from 'react'
import { Jumbotron, Button} from 'reactstrap';
import {Link} from "react-router-dom";
import Counter from './counter'
import { Container ,Row, Col } from "reactstrap";
import { ListGroup, ListGroupItem } from 'reactstrap';




export default class Pembayaran extends Component {
  state={
    barang:[],

    daftar:[
        {
          id: 1,
          number: 0,
          price: 15000,
          nama:"Sate Kelabang ",
          gambar:"https://lambangmh.files.wordpress.com/2009/03/sate-kelabang.jpg?w=640&h=187"
          },
          {
          id: 2,
          number: 1,
          nama:"Sate Ulat Sagu ",
          price: 10000,
          gambar:"https://ksmtour.com/media/images/articles12/sate-ulat-sagu-khas-papua.jpg"
          },
          {
          id: 3,
          number: 2,
          price: 20000,
          nama:"Sate Kalajengking ",
          gambar:"https://steemitimages.com/p/o1AJ9qDyyJNSpZWhUgGYc3MngFqoAMwMH2EeFSWJ1dwCPG5Mx?format=match&mode=fit&width=640"
          },
          {
          id: 4,
          number: 3,
          price: 15000,
          nama:"Sate Kecoa ",
          gambar:"http://3.bp.blogspot.com/-u3WG7ZAHg8Q/Vdguxft9DPI/AAAAAAAAAdA/OGwpDMA4hIQ/s1600/Cemilan.png"
          },
          {
          id: 5,
          number: 4,
          price: 50000,
          nama:"Daging Hiu ",
          gambar:"https://img-global.cpcdn.com/003_recipes/4650f3c12fa3d11c/1200x630cq70/photo.jpg"
          },
          {
          id: 6,
          number: 5,
          price: 100000,
          nama:"Buaya bakar ",
          gambar:"https://awsimages.detik.net.id/community/media/visual/2018/09/13/3b2423d1-e04c-4e3d-a42b-b1b8c04e6ca7.png?a=1"
          }
    ],
    total:0
};

tambahTotalHarga = (harga,item) =>{
  this.setState({
    total: this.state.total + harga,
    barang:this.state.barang.concat(item)
  });
  sessionStorage.total = this.state.total + harga;
};
kurangTotalHarga = (harga,item) =>{
  this.setState({
    total: this.state.total - harga,
    barang:this.state.barang.filter(l => l.id != item.id)
  });
  sessionStorage.total = this.state.total - harga;
}

setBarang = (data)=>{
  const barang = this.state.barang

  this.setState({
    barang : [...barang, data]
  })
}




  render() {
    const {barang} = this.state
    return (
    <div >

      
      <Jumbotron fluid align="center"   >
      <div>
        <p> Total Harga </p>
        <h2 align="center">{this.state.qty}</h2>
        <p>
            <img src="https://png.pngtree.com/svg/20170629/419f72479e.svg" width="5%"/>
            Rp.{this.state.total}
        </p>
        
      </div>
      <div class="fixed-bottom">
        <Button color="success" size="lg" block href="/total">checkout</Button>
      </div>
      </Jumbotron>
      <ListGroup>
      <ListGroupItem align="center"><b>Barang yang Dibeli</b></ListGroupItem>
        {barang.map((item, index)=> {return(
          <React.Fragment>
            
            <ListGroupItem>{item.nama}Rp.{item.price}</ListGroupItem>
     
          </React.Fragment>
        )
        
        })}
        
      </ListGroup>


      
    <div align="center">
      <Row>
      {this.state.daftar.map(item=>(
          
        <Col xs="12" md="6" lg="4">
        <p align="center">{item.nama}</p> 
          <Counter
          item={item}
          tambahTotalHarga={this.tambahTotalHarga}
          kurangTotalHarga={this.kurangTotalHarga}
          ukuran={{ width: "85%" }} 
          daftar={this.state.daftar}
          setBarang={this.setBarang}/>
          
        </Col>
      ))}
      </Row>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
    )
  }
}
