import { getTheme } from '@fluentui/react';
import angleRight from './angle-right.svg'// eslint-disable-next-line
import angleLeft from './angle-left.svg'// eslint-disable-next-line
import motCroisé from '../publication/motcroisé.jpg'
import './home.css';
import HeaderPage from '../HeaderPage'
import * as $ from 'jquery';
import React from 'react';
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


function lastCarousel() {
  return(
    <div id="lastNumberCarousel" className="carousel slide component row" style={{boxShadow: theme.effects.elevation16}} data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active"> 
        <h1>n°1 - titre du numéro</h1>
        <hr></hr>
        <p>
          <img className="cover" src="https://zupimages.net/up/20/47/ziw3.png"  alt="First slide" />
        </p>
      </div>
      <div className="carousel-item">
      <h1>n°2 - titre du numéro</h1>       
      <hr></hr>
      <p>
        <img className="cover" src="https://zupimages.net/up/20/47/vx8b.png" alt="Second slide" />
      </p>
      </div>
      <div className="carousel-item">
      <h1>n°3 - titre du numéro</h1>
      <hr></hr>
      <p>
        <img className="cover" src="https://zupimages.net/up/20/47/gia5.png" alt="Third slide" />
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

function bonus(title,img){
  return(
    <div class="bonus container">
      <div class="bonusBody container col">
        <img src={img} alt="" class="bonusImg"></img>
        <p class="bonusTitle">{title}</p>
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
            <div className="row" style={{width:"100%",marginTop:"20px",marginLeft:"20px"}}>
              {article(motCroisé,"Erratum","correction du mot-croisé Animaux (numéro Octobre)")}
              {article("http://via.placeholder.com/650x445","Audio","Au fond de la pénombre - Kaïto Bernhart")}
              {article("http://via.placeholder.com/650x445","Catégorie Random","Lorem ipsum dolor sit amet, consectetur adipiscing elit")}
            </div>
          </div>
          <div id="bonusBar" className="component col-mb-auto " style={{boxShadow: theme.effects.elevation8}}>
            <h1 style={{width:"100%",borderBottom: "3px solid black",marginTop:"15px", paddingBottom:"15px"}}>Bonus</h1>
            {bonus("traduction - 3 des nombreuses raisons pour lesquelles Ponto à besoin de la section italienne","http://via.placeholder.com/200x150")}
            {bonus("Lorem ipsum dolor sit amet, consectetur adipiscing elit","http://via.placeholder.com/200x150")}
            {bonus("Lorem ipsum dolor sit amet, consectetur adipiscing elit","")}
          </div>
      </div>
    </div>
    )
}
}

export default Home;

/* 
{lastCarousel()}
          <div className="container article" style={{backgroundImage: "url("+motCroisé+")"}}>
          </div> */
          