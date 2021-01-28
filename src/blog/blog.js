import { getTheme } from '@fluentui/react'
import './blogStyle.css'
import React from 'react';
import * as $ from 'jquery';
import HeaderPage from '../HeaderPage'
import FooterPage from '../footer/Footer';

require('bootstrap')
const theme = getTheme();

function scrollFun(){
    if($('#page')){
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
  

function article(img,category,title){
    var words=title.split(" ")
    var href= "./blog/"+words.join("-")
    return(
      <div className="col-sm article component" style={{boxShadow: theme.effects.elevation16}}>
        <img class="articleImg" src={img}  alt="article img" width="100%" />
        <div class="articleBody">
          <p class="category">{category}</p>
          <a href={href}><p className="articleTitle">{title}</p></a>
        </div>
      </div>
    )
  }
 


class Blog extends React.Component{
  constructor(props){
    super(props)
      this.data = require("../data.json").data
  }
  componentDidMount(){
    document.title = "La Capsule - Blog"
  }

  article(key){
    var words=this.data[key].title.split(" ")
    var href= "./blog/"+words.join("-")
    var img = this.data[key].img
    return(
      <div className="col-sm article component" style={{boxShadow: theme.effects.elevation16}}>
        <img class="articleImg" src={img}  alt="article img" width="100%" />
        <div class="articleBody">
          <p class="category">{this.data[key].category}</p>
          <a href={href}><p className="articleTitle">{this.data[key].title}</p></a>
        </div>
      </div>
    )
  }

render(){
    return(
        <div id="page"  onScroll={scrollFun}>
        <HeaderPage />
        <div id="content" class="container">
            <div className="col-sm" id="blogCol">  
              <div className="row blogRow" style={{marginTop: "0px"}}>
                {this.article(0)}
                {this.article(1)}
                {this.article(2)}
              </div>
              <div className="row blogRow">
                {this.article(3)}
                {this.article(6)}
                {this.article(7)}
              </div>
              <div className="row blogRow">
                {this.article(8)}
                {this.article(9)}
                {this.article(10)}
              </div>
            </div>
        </div>
                <FooterPage/>

      </div>
    )
}
}
export default Blog

//                 {article("https://remeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/03/27/node_141802/11594218/public/2020/03/27/B9723053903Z.1_20200327145627_000%2BGLJFQ0N9A.1-0.jpg?itok=yvKi8H_m1585318478","Traduction","Ivre, iel s'inscrit par erreur au concours de version latin")}
