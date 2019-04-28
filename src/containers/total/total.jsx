import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap';
import { Container } from 'reactstrap';
import Header from '../../components/header';
import Totalan from '../../components/totalan';

export default class Total extends Component {
  render() {
    return (
      <div>
          <Header />
          <Totalan />
      </div>
    )
  }
}
