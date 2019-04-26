import React, { Component } from 'react'
import Header from '../../components/header';
import Tampilan from '../../components/tampilan';

export default class Home extends Component {
  render() {
    return (
      <div>
          <Header name="Home" />
          <Tampilan />
      </div>
    )
  }
}
