import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './style.css'
import Main from './pages/Main';
import Detail from './pages/Detail';


function App() {
  

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/detail/:id" component={Detail}/>
        <Route exact path="/" component={Main}/>
        <Route component={()=> <h1>404</h1>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
