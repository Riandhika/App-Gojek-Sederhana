import React, { Component } from 'react'
import Header from '../../components/header';
import Pembayaran from '../../components/pembayaran';

export default class Daftar extends Component {
  render() {
    return (
      <div color="#DAF7A6">
          <Header />
          <Pembayaran />
      </div>
    )
  }
}
