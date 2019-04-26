import React, { Component } from 'react'
import { Container, Row, Col, Card } from 'reactstrap';
import Counter from './counter'
import { Button } from 'reactstrap';
export default class Tampilan extends Component {
  state={
      menu:[
          {
            gambar: "https://ecs7.tokopedia.net/img/cache/700/product-1/2017/2/2/797011/797011_2b7c6875-9ff6-48e7-a15d-77f885f62bad",
            nama:"GoSend"
          },
          {
            gambar: "https://www.dictio.id/uploads/db3342/original/3X/4/f/4f87734ed4008ba168765b3a4dfa8262527a4ebf.png",
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
        <Card>
          <Row>
          {this.state.menu.map(item=>(
              <Col xs="6" width="50%" height="50%" href="/restaurant" >
                <a href="/restaurant">
                <Counter gambar={item.gambar} nama={item.nama}  />
                </a>
              </Col>
          ))}  
          </Row>
        </Card>
       
      );
    }
  }

