import React, { Component } from 'react'
import { Container ,Row, Col, Card } from "reactstrap";
import { Jumbotron, Button} from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Counter from './counter'
import {Link} from "react-router-dom";

export default class Resto extends Component {
    state={
        menu:[
            {
              id: "1",
              gambar: "http://www.qraved.com/journal/wp-content/uploads/2015/07/gama-seafood-ikan-bakar.jpg" ,
              nama:"Restoran Ikan Bakar dan Seafood"
            },

            {
              id: "2",  
              gambar: "https://s.republika.co.id/uploads/images/inpicture_slide/warung-makan-ilustrasi-_150618081940-381.jpg",
              nama:"Warung Makan Mbahmu"
          },
          {
            id: "3", 
              gambar: "https://s.republika.co.id/uploads/images/inpicture_slide/warung-makan-ilustrasi-_150618081940-381.jpg",
              nama:"Warung Makan Mbahmu"
          },
          {
            id: "4", 
            gambar: "https://s.republika.co.id/uploads/images/inpicture_slide/warung-makan-ilustrasi-_150618081940-381.jpg" ,
            nama:"Warung Makan Mbahmu"
        }
        ],
    };

      render() {
       return (

        <Card>
        <Row>
        {this.state.menu.map(item=>(
            <Col xs="6" md="6" lg="4"width="50%" height="50%" href="/restaurant" >
              <a href="/daftar">
              <Counter gambar={item.gambar} nama={item.nama}  />
              <Button tag={Link} to="./daftar" color="success" size="lg" block>Order</Button>
              </a>
            </Col>
        ))}  
        </Row>
      </Card>
        );
      }
    }
  