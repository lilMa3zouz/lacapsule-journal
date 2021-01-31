import { getTheme } from '@fluentui/react';
import angleRight from './angle-right.svg'
import angleLeft from './angle-left.svg'
import './homeStyle.css';
import HeaderPage from '../HeaderPage'
import * as $ from 'jquery';
import React from 'react';
import novembre from '../cover/novembre.png'
import octobre from '../cover/octobre.png'
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

var data = require("../data.json").data
var bonusList = []
var articleList = []

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

function bonus(key){
  var words=data[key].title.split(" ")
    var href= "./blog/"+words.join("-")
  return(
    <div className="bonus container">
      <div className="bonusBody container col">
        <img src={data[key].img} alt="" className="bonusImg" style={{boxShadow:theme.effects.elevation64}}></img>
        <div class="bonusTitleDiv"><p class="bonusTitleP"><a href={href} className="bonusTitle">{data[key].title}</a></p></div>
      </div>
    </div>
  )
}

function article2(key){
  var words=data[key].title.split(" ")
  var href= "./blog/"+words.join("-")
  var img = data[key].img
  return(
    <div className="col-sm article component" style={{boxShadow: theme.effects.elevation8}}>
      <img className="articleImg2" src={img}  alt="article img" width="100%" />
      <div className="articleBody">
        <p className="category2">{data[key].category}</p>
        <a href={href}><p className="articleTitle">{data[key].title}</p></a>
      </div>
    </div>
  )
  }

class Home extends React.Component{
  constructor(props){
    super(props)
    data.forEach(function(element){
      if(element.function === "article"){
        articleList.push(article2(data.indexOf(element)))
      }
      if(element.function === "bonus"){
        bonusList.push(bonus(data.indexOf(element)))
      }
    })
    if(detectMob()){
      articleList = articleList.filter((month,idx) => idx < 4)
      bonusList = bonusList.filter((month,idx) => idx < 4)
    }
    else{
      articleList = articleList.filter((month,idx) => idx < 3)
      bonusList = bonusList.filter((month,idx) => idx < 4)
    }


  }
  componentDidMount(){
    document.title = "La Capsule"
    if(detectMob()){
      require('./homeStyleMobile.css')
    }
    else{
      require('./homeStyle.css')
    }  }
  
render(){
    if(detectMob()){
      return(
        <div id="page"  onScroll={scrollFun}>
            <HeaderPage />
          <div id="content" className="container row">
              <div className="col-sm">
                {lastCarousel()}
                <div className="row" style={{width:"96%",marginTop:"20px"}}>
                {articleList[0]}
                {articleList[1]}
                </div>
                <div className="row" style={{width:"96%",marginTop:"20px"}}>
                {articleList[2]}
                {articleList[3]}
                </div>
              </div>
              <div id="bonusBar" className="col-mb-auto " style={{boxShadow: theme.effects.elevation16}}>
                <h1 style={{width:"100%",borderBottom: "3px solid black",marginTop:"15px", paddingBottom:"15px"}}>Bonus</h1>
                {bonusList}
              </div>
          </div>
            <FooterPage/>
        </div>
        )
    }
    else{
      return(
        <div id="page"  onScroll={scrollFun}>
            <HeaderPage />
          <div id="content" className="container row">
              <div className="col-sm">
                {lastCarousel()}
                <div className="row" style={{marginLeft:"20px",width:"96%",marginTop:"20px"}}>
                {articleList}
                </div>
              </div>
              <div id="bonusBar" className="col-mb-auto " style={{boxShadow: theme.effects.elevation16}}>
                <h1 style={{width:"100%",borderBottom: "3px solid black",marginTop:"15px", paddingBottom:"15px"}}>Bonus</h1>
                {bonusList}
              </div>
          </div>
            <FooterPage/>
        </div>
        )
    }
}
}

export default Home;
