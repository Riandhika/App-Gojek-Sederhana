import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap';
import { Container } from 'reactstrap';


export default class Totalan extends Component {
  
    componentDidMount(){
        var hasil =sessionStorage.total;
        console.log(hasil);
        document.getElementById("total").innerHTML = hasil;
       
    }

    pembayaran = () => {
        if (sessionStorage.total > 0) {
            onclick= alert("Pembayaran sukses! Terima kasih telah berbelanja!" )
            sessionStorage.total = 0;
          }
        else {
            onclick=alert("Pembayaran gagal,silahkan pilih barang terlebih dahulu!" )
            
          }
        };

    render() {
    return (
      <div>
        <Jumbotron fluid align="Center">
        <Container fluid>
          <h1 className="display-3"></h1>
          <p className="lead">Pembayaran</p>
          <h2 id="total">Rp. </h2>
          <Button onClick={this.pembayaran} outline color="success" href="/restaurant">Bayar</Button>
              
          
        </Container>
      </Jumbotron>
      </div>
    )
  }
}
