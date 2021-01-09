import { getTheme } from '@fluentui/react'
import './article.css'
import React from 'react';
import * as $ from 'jquery';
import HeaderPage from '../HeaderPage'


require('bootstrap')// eslint-disable-next-line
const theme = getTheme();

function scrollFun(){
    if($('#page')){
      console.log(document.getElementById("content").offsetTop )
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

  class Article extends React.Component{
    constructor(props){
      super(props)
      try{
        this.template = {
          __html: require("../publication/"+this.props.content+".html")
        }
      }
      catch(err){
        this.template = {
          __html: require('../publication/fallback.html')
        }
      }
      this.title = this.props.content.split("-")
      this.title = this.title.join(' ')

    }
    componentDidMount(){
        document.title = decodeURI(this.title)
      }
      render(){
        return(
            <div id="page" onScroll={()=>scrollFun()} >
                <HeaderPage />
                <div id="content" className="container" onScroll={()=>scrollFun()}>
                <div id='articleContainer' style={{boxShadow: theme.effects.elevation8}} dangerouslySetInnerHTML={this.template}>
                </div>
                </div>
            </div>
        )
      }
    }

export default Article


