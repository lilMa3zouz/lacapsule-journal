import { getTheme } from '@fluentui/react'
import './articleStyle.css'
import React from 'react';
import * as $ from 'jquery';
import HeaderPage from '../HeaderPage'


require('bootstrap')// eslint-disable-next-line
const theme = getTheme();
var data = require("../data.json").data

function scrollFun(){
    if($('#page')){
      console.log(document.getElementById("content").offsetTop )
    if ($('#page').scrollTop() >= document.getElementById("content").offsetTop - 150){
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
      this.title = decodeURI(this.props.content)
      console.log(this.title)
      data = data.filter((month,idx) => month.url===this.title)[0]
      try{
        this.template = {
          __html: require("../publication/"+decodeURI(data.html)+".html")
        }
      }
      catch(err){
        this.template = {
          __html: require('../publication/fallback.html')
        }
      }
    }
    componentDidMount(){
        //document.title = this.title
      }

      isExisting(){
        if(data.html!=="fallback"){
          return(
            <div>
              <h1 style={{marginLeft:"30px",textAlign:"left",textDecoration:"underline"}}>{decodeURI(data.title)}</h1>
              <p style={{width:"100%",textAlign:"center",marginTop:"30px"}}><img src={data.img} width="60%" style={{margin:"auto"}} alt="illustration" /></p>
            </div>
          )
        }
      }
      render(){
        return(
            <div id="page" onScroll={()=>scrollFun()} >
                <HeaderPage />
                <div id="content" className="container" onScroll={()=>scrollFun()}>
                  <div id='articleContainer' style={{boxShadow: theme.effects.elevation8}}>
                    {this.isExisting()}
                    <div dangerouslySetInnerHTML={this.template}></div>
                </div>
                </div>
            </div>
        )
      }
    }

export default Article


