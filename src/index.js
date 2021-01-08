import {useRoutes} from 'hookrouter';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/materialIcons.css';
import Home from './home/Home';
import Blog from './blog/blog'
import Article from './article/Article'
import Archive from './archive/Archive'
import Presentation from './presentation/Presentation'
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
 
