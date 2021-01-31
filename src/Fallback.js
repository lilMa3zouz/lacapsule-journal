import { getTheme } from '@fluentui/react'
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
        <HeaderPage />
        <div id="content2" className="container">

        </div>
      </div>
    )
}
}
export default Fallback