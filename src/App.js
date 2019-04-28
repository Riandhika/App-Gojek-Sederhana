import React, { Component } from 'react'
import { Switch, Route} from "react-router-dom"
import home from './containers/home';
import restaurant from './containers/restaurants';
import daftar from './containers/daftar'
import total from './containers/total'
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/restaurant" component={restaurant} />
          <Route path="/daftar" component={daftar} />
          <Route path="/total" component={total} />
        </Switch>
        
      </div>
    )
  }
}

export default App;