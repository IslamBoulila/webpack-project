import React, { Component, lazy,Suspense } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Users from './containers/Users';

const Pizza = lazy(() => import('./containers/Pizza'));

class App extends Component {

    render() {

        return (
            <>
                <div className="App">
                    <Link to="/" >Users</Link>
                    <Link to="/pizza" >Pizza</Link>
                </div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path='/' component={Users} />
                        <Route path='/pizza' component={Pizza} />
                    </Switch>
                </Suspense>

            </>

        );
    }
}
export default App;