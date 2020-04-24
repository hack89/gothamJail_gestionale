import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import './App.scss';

import OfficerList from './components/officer/OfficerList'
import Header from './components/layout/header/Header'
import Navbar from './components/layout/navbar/Navbar'
import Statistics from './components/statistics/Statistics'
import AddOfficer from './components/officer/AddOfficer'
import CriminalList from './components/criminal/CriminalList'
import AddCriminal from './components/criminal/AddCriminal'
import EditCriminal from './components/criminal/EditCriminal'
import Report from './components/report/Report'

function App() {
  return (
    <Provider store={store}>
      <div className="rain"></div>
      <div className='mainContainer'>
        <div className="overlay"></div>
        <Router>
          <Header />
          <div className="main">
              <div className="navbar">
                  <Navbar />
              </div>
              <div className="content">
                <Switch>
                  <Route exact path='/' component={Statistics} />
                  <Route exact path="/officers" component={OfficerList} />
                  <Route exact path="/addOfficer" component={AddOfficer} />
                  <Route exact path="/criminals" component={CriminalList} />
                  <Route exact path="/addCriminal" component={AddCriminal} />
                  <Route exact path="/editCriminal/:id" component={EditCriminal} />
                  <Route exact path="/reports" component={Report} />
                </Switch>
              </div>
          </div>
        </Router>
        </div>
    </Provider>
  );
}

export default App;
