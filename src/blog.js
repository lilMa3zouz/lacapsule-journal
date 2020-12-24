import { getTheme } from '@fluentui/react'
import './css/bootstrap.min.css';
import './css/materialIcons.css';
import './css/component.css'
import './css/Blog.css'
import React from 'react';
import * as $ from 'jquery';
import HeaderPage from './HeaderPage'
import motCroisé from './publication/motcroisé.jpg'


require('bootstrap')
const theme = getTheme();

function scrollFun(){
    if($('#page')){
      if ($('#page').scrollTop() >= document.getElementById("content").offsetTop){
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
    var href= "./"+words.join("-")
    return(
      <div className="col-sm article component" style={{boxShadow: theme.effects.elevation8}}>
        <img class="articleImg" src={img} alt="article img" width="100%"/>
        <div class="articleBody">
          <p class="category">{category}</p>
          <a href={href}><p className="articleTitle">{title}</p></a>
        </div>
      </div>
    )
  }

class Blog extends React.Component{
  componentDidMount(){
    document.title = "La Capsule - Blog"
  }
render(){
    return(
        <div id="page"  onScroll={scrollFun}>
        <HeaderPage></HeaderPage>
        <div id="content" class="container">
            <div className="col-sm">
              <div className="row" style={{width:"100%",marginTop:"20px",marginLeft:"-20px"}}>
                {article(motCroisé,"Erratum","correction du mot-croisé Animaux (numéro Octobre)")}
                {article(motCroisé,"Catégorie Random","Lorem ipsum dolor sit amet, consectetur adipiscing elit")}
                {article(motCroisé,"Catégorie Random","Lorem ipsum dolor sit amet, consectetur adipiscing elit")}
              </div>
              <div className="row" style={{width:"100%",marginTop:"100px",marginLeft:"-20px"}}>
                {article(motCroisé,"Erratum","correction du mot-croisé Animaux (numéro Octobre)")}
                {article(motCroisé,"Catégorie Random","Lorem ipsum dolor sit amet, consectetur adipiscing elit")}
                {article(motCroisé,"Catégorie Random","Lorem ipsum dolor sit amet, consectetur adipiscing elit")}
              </div>
              <div className="row" style={{width:"100%",marginTop:"100px",marginLeft:"-20px"}}>
                {article(motCroisé,"Erratum","correction du mot-croisé Animaux (numéro Octobre)")}
                {article(motCroisé,"Catégorie Random","Lorem ipsum dolor sit amet, consectetur adipiscing elit")}
                {article(motCroisé,"Catégorie Random","Lorem ipsum dolor sit amet, consectetur adipiscing elit")}
              </div>
            </div>
        </div>
      </div>
    )
}
}
export default Blog