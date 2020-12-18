import {BrowserRouter, Route, Switch, HashRouter } from "react-router-dom"
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Blog from './blog'
import reportWebVitals from './reportWebVitals';
import './css/materialIcons.css';

function blog(){
    return(
    <div>
        pute pute pute
    </div>
    )
}

const Root = ()=>{
return( 
  <BrowserRouter>
      <Switch>
        <Route strict pattern="/index/" component={Home} />
        <Route strict pattern="/blog/" component={blog} />  
      </Switch>
  </BrowserRouter>
)
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
