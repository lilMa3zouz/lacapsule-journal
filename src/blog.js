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
  

function article(img,category,title){
    var words=title.split(" ")
    var href= "./blog/"+words.join("-")
    return(
      <div className="col-sm article component" style={{boxShadow: theme.effects.elevation8}}>
        <img class="articleImg" src={img} alt="article img" width="100%"/>
        <div class="articleBody">
          <p class="category">{category}</p>
          <a href={href}><p className="articleTitle" >{title}</p></a>
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
                {article(motCroisé,"Jeu","correction du mot-croisé Animaux (numéro Octobre)")}
                {article("http://via.placeholder.com/650x445","Audio","Au fond de la pénombre - Kaïto Bernhart")}
                {article("http://via.placeholder.com/650x445","traduction","3 des nombreuses raisons pour lesquelles Ponto à besoin de la section italienne")}
              </div>
              <div className="row" style={{width:"100%",marginTop:"100px",marginLeft:"-20px"}}>
                {article("http://via.placeholder.com/650x445","Traduction","Ivre, iel s'inscrit par erreur au concours de version latin")}
                {article("http://via.placeholder.com/650x445","lifestyle","29 meilleures façons d'être le pire voisin")}
                {article("http://via.placeholder.com/650x445","random","Une patate volante au lycée")}
              </div>
              <div className="row" style={{width:"100%",marginTop:"100px",marginLeft:"-20px"}}>
                {article("http://via.placeholder.com/650x445","cuisine","Comment des mites ont infiltré la production des bredeles alsaciennes")}
                {article("http://via.placeholder.com/650x445","Jeu","Paf la pastèque!")}
                {article("http://via.placeholder.com/650x445","Récit","<<le jour où j'ai perdu mes pieds>>")}
              </div>
            </div>
        </div>
      </div>
    )
}
}
export default Blog