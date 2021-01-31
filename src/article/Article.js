import { getTheme } from '@fluentui/react' 
import React from 'react';
import * as $ from 'jquery';
import HeaderPage from '../HeaderPage'
import FooterPage from '../footer/Footer';


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
  function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
  
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
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
        if(detectMob()){
          require('./articleStyleMobile.css')

        }
        else{
          require('./articleStyle.css')
        }
        if(!this.isExisting){
          if(detectMob()){
            require('../publication/fallbackStyleMobile.css')          
          }
          else{
            require('../publication/fallbackStyle.css')
  
          }
        }
      }

      isExisting(){
        if(data.html!=="fallback"){
          return(
            <div>
              <h1 id="bigTitle" style={{textDecoration:"underline"}}>{decodeURI(data.title)}</h1>
              <p style={{width:"100%",textAlign:"center",marginTop:"30px"}}><img src={data.img} style={{margin:"auto"}} alt="illustration" id="miniature" /></p>
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
                <FooterPage />
            </div>
        )
      }
    }

export default Article


