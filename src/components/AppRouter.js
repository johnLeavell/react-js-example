import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListResults from './ListResults';
import AddUser from './AddUser';
import EditUser from './EditUser';

const AppRouter = () => {
  return(
    <div style={style} >
      <Router>
        <Switch>
          <Route path='/' exact component={ListResults} />
          <Route path='/users' component={ListResults} />
          <Route path='/add-user' component={AddUser} />
          <Route path='/edit-user' component={EditUser} />
        </Switch>
      </Router>
    </div>
  )
}

const style={
    marginTop: '20px'
}

export default AppRouter;
