import React, {Component , lazy} from 'react';
import {Link ,Switch, Route} from 'react-router';


const Pizza= lazy( ()=>import('./containers/Pizza'));
class App extends Component{

    render(){

        return(
            <>
                <div className="App">
                <Link to="/" >Users</Link>
                <Link to="/pizza" >Pizza</Link>
            </div>
            <Switch>
                <Route exact path='/'  Component={Users}/>
                <Route  path='/pizza'  Component={Pizza}/>
            </Switch>
            </>
            
        );
    }
}
export default App;