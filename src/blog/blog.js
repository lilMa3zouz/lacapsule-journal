import { getTheme } from '@fluentui/react'
import './blogStyle.css'
import React from 'react';
import * as $ from 'jquery';
import motCroisé from '../publication/motcroisé.jpg'
import HeaderPage from '../HeaderPage'
import pasteque from '../img/pasteque.jpg'
import pieds from '../img/pieds.jpg'
import kaito from '../img/kaito-min.jpg'
import amira from '../img/sectionit.jpg'
import roro from '../img/roro.jpg'

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
  componentDidMount(){
    document.title = "La Capsule - Blog"
    console.log($('.articleImg'))
  }
render(){
    return(
        <div id="page"  onScroll={scrollFun}>
        <HeaderPage />
        <div id="content" class="container">
            <div className="col-sm" id="blogCol">  
              <div className="row blogRow" style={{marginTop: "0px"}}>
                {article(motCroisé,"Jeu","correction du mot-croisé Animaux (numéro Octobre)")}
                {article(kaito,"Audio","Au fond de la pénombre - Kaïto Bernhart")}
                {article(amira,"traduction","3 des nombreuses raisons pour lesquelles Ponto à besoin de la section italienne")}
              </div>
              <div className="row blogRow">
                {article(roro,"Audio","Vous ne n'entendrez plus les silences - Romane Ponton")}
                {article("https://img-9gag-fun.9cache.com/photo/aYby7nv_460s.jpg","lifestyle","29 meilleures façons d'être le pire voisin")}
                {article("https://i1.wp.com/harrysbarwigan.com/wp-content/uploads/2016/12/pie-in-space.jpg?fit=1200%2C630&ssl=1","random","Une tarte volante au lycée")}
              </div>
              <div className="row blogRow">
                {article("https://www.consoglobe.com/wp-content/uploads/2019/09/mites-alimentaires_shutterstock_1328471456.png","cuisine","Comment des mites ont infiltré la production des bredeles alsaciennes")}
                {article(pasteque,"Jeu","Paf la pastèque!")}
                {article(pieds,"Récit","«le jour où j'ai perdu mes pieds»")}
              </div>
            </div>
        </div>
      </div>
    )
}
}
export default Blog

//                 {article("https://remeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/03/27/node_141802/11594218/public/2020/03/27/B9723053903Z.1_20200327145627_000%2BGLJFQ0N9A.1-0.jpg?itok=yvKi8H_m1585318478","Traduction","Ivre, iel s'inscrit par erreur au concours de version latin")}
