import { getTheme } from '@fluentui/react'
import './css/component.css'
import './css/bootstrap.min.css';
import './css/materialIcons.css';
import HeaderPage from './HeaderPage'
import React from 'react';
import * as $ from 'jquery';

require('bootstrap')// eslint-disable-next-line
const theme = getTheme();

function scrollFun(){
    if($('#page')){
      if ($('#page').scrollTop() >= document.getElementById("content2").offsetTop){
        document.getElementById('stickyheader').classList.remove('nosticky')
        document.getElementById('stickyheader').classList.add('sticky')
      }
      else{
        document.getElementById('stickyheader').classList.add('nosticky')
        document.getElementById('stickyheader').classList.remove('sticky')
      }
    }
  }

  class Article extends React.Component{
    constructor(props){
      super(props)
      this.template = {
        __html: require("./publication/"+this.props.content+".html")
      }
      console.log(this.props.content)
    }
    componentDidMount(){
        document.title = "La Capsule - Archives"
      }
      render(){
        return(
            <div id="page" >
                <HeaderPage />
                <div id="content" className="container" dangerouslySetInnerHTML={this.template}>
                </div>
            </div>
        )
      }
    }

export default Article


