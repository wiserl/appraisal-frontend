import React, { Component } from 'react';
import './App.css';
//import ViewRequesters from './components/ViewRequesters';
//import ViewRequester from  './components/viewRequester';
import Home from './Home';
import NotFound from './NotFound';
import NewAppraisalType from './components/NewAppraisalType';
import NewRequester from './components/NewRequester';
import NewAppraisal from './components/NewAppraisal';
import NewRegion from './components/NewRegion';
import Requesters from './components/ViewRequesters';
import Appraisals from './components/ViewAppraisals';
import Regions from './components/ViewRegions';
import TurnTime from './components/TurnTimes';
 import Menu from './components/Menu';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


//const blah = { email: 'test@test.com', name: 'Gloria Klein', appraisals: 9, location: 'test location' };

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/requesters" component={Requesters} />
          <Route exact path="/turntimes" component={NewAppraisalType} />
          <Route exact path="/addrequesters" component={NewRequester} />
          <Route exact path="/addappraisals" component={NewAppraisal} />
          <Route exact path="/addregions" component={NewRegion} />
          <Route exact path="/appraisals" component={Appraisals} />
          <Route exact path="/regions" component={Regions} />
          <Route path="/getturntimes" component={TurnTime} />
         <Route exact path="/menu" component ={Menu} />
          
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;

//  <Route exact path="/requesters" component={ViewRequesters} />
//           <Route exact path="/regions" component={ViewRegions} />
//           <Route exact path="/appraisals" component={ViewAppraisals} />
//           <Route exact path ="/appraisalTypes" component={ViewAppraisalTypes} />