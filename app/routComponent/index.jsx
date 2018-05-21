import React from 'react'
import {  BrowserRouter  as Router, Route , Switch ,browserHistory} from 'react-router-dom'
import App from '../containers'
import Home from '../containers/Home'
import City from '../containers/City'
import User from '../containers/User'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import NotFound from '../containers/404'
import Login from '../containers/Login'
import UserConponent from '../containers/User'
class RouterMap extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
              <App>
                <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path='/city' component={City}/>
                  <Route path='/User' component={User}/>
                  <Route path='/search' component={Search}/>
                  <Route path='/detail' component={Detail}/>
                  <Route path='/login' component={Login}/>
                  <Route path='/user' component={UserConponent}/>
                  <Route path='*' component={NotFound}/>
                </Switch>

              </App>
            </Router>
        )
    }
}
export default RouterMap
