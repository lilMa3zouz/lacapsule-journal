import { getTheme } from '@fluentui/react'
import './css/bootstrap.min.css';
import './css/materialIcons.css';
import './css/component.css'
import './css/Blog.css'
import React from 'react';
import * as $ from 'jquery';
import HeaderPage from './HeaderPage'

require('bootstrap')
const theme = getTheme();

function scrollFun(){
    if($('#page')){
      if ($('#page').scrollTop() >= document.getElementById("content").offsetTop - 350){
        document.getElementById('stickyheader').classList.remove('nosticky')
        document.getElementById('stickyheader').classList.add('sticky')
      }
      else{
        document.getElementById('stickyheader').classList.add('nosticky')
        document.getElementById('stickyheader').classList.remove('sticky')
      }
    }
  }
  

class Fallback extends React.Component{
  componentDidMount(){
    document.title = "La Capsule - oups"
  }
render(){
    return(
        <div id="page"  onScroll={scrollFun}>
        <HeaderPage></HeaderPage>
        <div id="content2" class="container">

        </div>
      </div>
    )
}
}
export default Fallback