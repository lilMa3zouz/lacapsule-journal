import {useRoutes} from 'hookrouter';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/materialIcons.css';
import Home from './Home';
import Blog from './blog'
import Article from './Article'
import Archive from './Archive'
import Presentation from './Presentation'
import Fallback from './Fallback'

let routes = {
  '/': () => <Home />,
  '/blog': () => <Blog />,
  '/blog/:id': ({id}) => <Article content={id} />,
  '/archives': () => <Archive />,
  '/aboutus': () => <Presentation />,
  '/contact': () => <Presentation />
}

const Root = ()=>{
  const result = useRoutes(routes) 
  return result || <Fallback />
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
 
