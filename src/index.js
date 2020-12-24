import {useRoutes} from 'hookrouter';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Blog from './blog'
import './css/materialIcons.css';
import Archive from './Archive'



const Root = ()=>{
  return(
    useRoutes(
      {
        '/': () => <Home />,
        '/blog': () => <Blog />,
        '/archives': () => <Archive />
      }
    )
  )
}



ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
 
