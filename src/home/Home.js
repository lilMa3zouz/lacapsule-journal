import { getTheme } from '@fluentui/react';
import angleRight from './angle-right.svg'// eslint-disable-next-line
import angleLeft from './angle-left.svg'// eslint-disable-next-line
import motCroisé from '../img/motcroisé.jpg'
import './homeStyle.css';
import HeaderPage from '../HeaderPage'
import * as $ from 'jquery';
import kaito from '../img/kaito-min.jpg'
import amira from '../img/sectionit.jpg'
import roro from '../img/roro.jpg'
import React from 'react';
import bonbons from '../img/bonbons.jpg'
import novembre from '../cover/novembre.png'
import octobre from '../cover/octobre.png'
import pilote from '../cover/pilote.png'
import janvier from '../cover/janvier.png'
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


function lastCarousel() {
  return(
    <div id="lastNumberCarousel" className="carousel slide component row" style={{boxShadow: theme.effects.elevation16}} data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active"> 
        <h1>n°1 - Octobre</h1>
        <hr></hr>
        <p>
          <img className="cover" onClick={()=>{window.location="/archives/1"}} style={{boxShadow: theme.effects.elevation16}} src={octobre}  alt="First slide" />
        </p>
      </div>
      <div className="carousel-item">
      <h1>n°2 - Novembre</h1>       
      <hr></hr>
      <p>
        <img className="cover" onClick={()=>{window.location="/archives/2"}} style={{boxShadow: theme.effects.elevation16}} src={novembre} alt="Second slide" />
      </p>
      </div>
      <div className="carousel-item">
      <h1>n°3 - Hiver</h1>
      <hr></hr>
      <p>
        <img className="cover" style={{boxShadow: theme.effects.elevation16}} onClick={()=>{window.location="/archives/3"}} src={janvier} alt="Third slide" />
      </p>
      </div>
    </div>
    <a id="prev" className="carousel-control-prev" href="#lastNumberCarousel" role="button" data-slide="prev">
      <img src={angleLeft} className="controls" alt="prev"/>
    </a>
    <a className="carousel-control-next" href="#lastNumberCarousel" role="button" data-slide="next">
    <img src={angleRight} className="controls" alt="Next"/>
    </a>
</div> 
  )
}

function article(img,category,title){
  var words=title.split(" ")
  var href= "./blog/"+words.join("-")
  return(
    <div className="col-sm article component" style={{boxShadow: theme.effects.elevation8}}>
      <img class="articleImg2" src={img} alt="article img" width="100%"/>
      <div class="articleBody">
        <p class="category2">{category}</p>
        <a href={href}><p className="articleTitle">{title}</p></a>
      </div>
    </div>
  )
}

function bonus(title,img){
var words=title.split(" ")
    var href= "./blog/"+words.join("-")
  return(
    <div class="bonus container">
      <div class="bonusBody container col">
        <img src={img} alt="" class="bonusImg" style={{boxShadow:theme.effects.elevation64}}></img>
        <a href={href}><p className="bonusTitle">{title}</p></a>
      </div>
    </div>
  )
}

class Home extends React.Component{
  componentDidMount(){
    document.title = "La Capsule"
  }
render(){
    return(
    <div id="page"  onScroll={scrollFun}>
        <HeaderPage />
      <div id="content" class="container row">
          <div className="col-sm">
            {lastCarousel()}
            <div className="row" style={{marginLeft:"0",width:"95%",marginTop:"20px"}}>
              {article(motCroisé,"Erratum","correction du mot-croisé Animaux (numéro Octobre)")}
              {article("https://remeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/03/27/node_141802/11594218/public/2020/03/27/B9723053903Z.1_20200327145627_000%2BGLJFQ0N9A.1-0.jpg?itok=yvKi8H_m1585318478","Traduction","Ivre, iel s'inscrit par erreur au concours de version latin")}
              {article(bonbons,"Dossier","Comment la production Haribo influe-t-elle sur la deforestation norvegienne")}
            </div>
          </div>
          <div id="bonusBar" className="col-mb-auto " style={{boxShadow: theme.effects.elevation16}}>
            <h1 style={{width:"100%",borderBottom: "3px solid black",marginTop:"15px", paddingBottom:"15px"}}>Bonus</h1>
            {bonus("3 des nombreuses raisons pour lesquelles Ponto à besoin de la section italienne",amira)}
            {bonus("Au fond de la pénombre - Kaïto Bernhart",kaito)}
            {bonus("Vous n'entrez pas le silence - Romane Ponton",roro)}
          </div>
      </div>
        <FooterPage/>
    </div>
    )
}
}

export default Home;

/* 
{lastCarousel()}
          <div className="container article" style={{backgroundImage: "url("+motCroisé+")"}}>
          </div> */
//comment lers bonbons haribo ont declenché la déforestation en Norvège
