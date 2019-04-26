import React, { Component } from 'react'
import Header from '../../components/header';
import Resto from '../../components/resto';


export default class Home extends Component {
  render() {
    return (
      <div>
          <Header name="Home" />
          <Resto />
          
      </div>
    )
  }
}
