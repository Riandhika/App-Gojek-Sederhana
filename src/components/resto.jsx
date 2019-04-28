import React, { Component } from 'react'
import { Container ,Row, Col, Card } from "reactstrap";
import { Jumbotron, Button} from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Body from './body'
import {Link} from "react-router-dom";

export default class Resto extends Component {
    state={
        menu:[
            {
              id: "1",
              gambar: "http://4.bp.blogspot.com/-mVaGpFa2_-E/VDPk_PZ2rAI/AAAAAAAACD0/gwXTJHbGiSk/s1600/Thailand%2Bextreme%2Bfood%3B%2Bfried%2Binsects.JPG" ,
              nama:"Restoran kuliner ekstrim dan Seafood"
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
            <Col  lg="4"width="50%" height="50%" href="/restaurant" >
              <Card>
              <p align="center">{item.nama}</p>
              <a href="/daftar">
              <Body gambar={item.gambar}  />
              
              {/* <Button tag={Link} to="./daftar" color="success" size="lg" block>Order</Button> */}
              </a>
              
              </Card>
            </Col>
        ))}  
        </Row>
      </Card>
        );
      }
    }
  