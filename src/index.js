import {useRoutes} from 'hookrouter';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Blog from './blog'
import './css/materialIcons.css';
import Article from './Article'



const Root = ()=>{
  return(
    useRoutes(
      {
        '/': () => <Home />,
        '/blog': () => <Blog />,
        '/blog/:id': ({id}) => <Article content={id} />,
      }
    )
  )
}



ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
 
