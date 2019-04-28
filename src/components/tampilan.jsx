import React, { Component } from 'react'
import { Container, Row, Col, Card } from 'reactstrap';
import Body from './body'
import { Button } from 'reactstrap';
import Slide from './carousel';
export default class Tampilan extends Component {
  state={
      menu:[
          {
            gambar: "https://gojekguide.files.wordpress.com/2017/01/82e29-cara-pesan-gojek-goride.png?w=739",
            nama:"GoRide"
          },
          {
            gambar: "https://2.bp.blogspot.com/-WhBcv3xfr3w/WRvA-9X_LxI/AAAAAAAABks/g2LCUIDmsg8qSpWtw0EKs92gn3BbjBg5wCLcB/s1600/Go-jek%2B4.png",
            nama:"GoFood"
        },
        {
            gambar: "https://ecs7.tokopedia.net/img/cache/700/product-1/2017/2/2/797011/797011_2b7c6875-9ff6-48e7-a15d-77f885f62bad",
            nama:"GoSend"
        },
        {
          gambar: "https://www.dictio.id/uploads/db3342/original/3X/4/f/4f87734ed4008ba168765b3a4dfa8262527a4ebf.png" ,
          nama:"GoFood"
      }
      ],
  };
    render() {
     return (
        <Card >
          <Slide />
          <Row>
          {this.state.menu.map(item=>(
              <Col xs="4" md="2" lg="2"  href="/restaurant" >
                <a href="/restaurant">
                <Body gambar={item.gambar} nama={item.nama}  />
                </a>
                
              </Col>
          ))}  
          </Row>
        </Card>
       
      );
    }
  }

