import {useRoutes} from 'hookrouter';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/materialIcons.css';
import './css/component.css'
import './css/bootstrap.min.css';
import Home from './home/Home';
import Blog from './blog/blog'
import Article from './article/Article'
import Archive from './archive/Archive'
import Presentation from './presentation/Presentation'
import Contact from './contact/Contact'
import Download from './download'

import Fallback from './Fallback'


let routes = {
  '/': () => <Home />,
  '/blog': () => <Blog />,
  '/blog/:id': ({id}) => <Article content={id} />,
  '/archives': () => <Archive/>,
  '/archives/:id': ({id}) => <Archive content={id}/>,
  '/aboutus': () => <Presentation />,
  '/contact': () => <Contact />,
  '/file/:id': ({id}) => <Download path={id} />  
}

const Root = ()=>{
  const result = useRoutes(routes) 
  return result || <Fallback />
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
 
