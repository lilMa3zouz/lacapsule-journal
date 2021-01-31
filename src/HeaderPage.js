import topBar from './img/bar.svg';
import banner from './img/capsule2.png';
import bannerMob from './img/capsuleMobile.png';

import titre from './img/titreHeader.svg';
import './css/bootstrap.min.css';
import './css/materialIcons.css';
import React from 'react';
import * as $ from 'jquery';


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

function chooseBanner(){
  if(detectMob()){
    return bannerMob
  }
  else{
    return banner
  }
}
class HeaderPage extends React.Component {
  componentDidMount(){
    if(detectMob()){
      require('./css/header copy.css')
    }
    else{
      require('./css/header.css')
    }
  }
  constructor(props){
    super(props)
    if(detectMob()){
      this.bannerImg = bannerMob
    }
    else{
      this.bannerImg = banner
    }
  }
    scrollArrow(){
        var getOffset = $('#navBar').offset().top;
        $('#page').animate({scrollTop: getOffset}, 500);
      }
  render() {
    if(detectMob()){
      return(
        <div id="header">
          <a href="/"><img  id="topBar" src={chooseBanner()} alt="topBar" width="102.2%" style={{marginLeft:"-12px"}} /></a>
          <div id="stickyheader" className="nosticky">
            <p style={{width:"100%",textAlign:"center",height: "100%"}}>
              <a href="/"><img src={titre} height="100%" alt="logo" style={{paddingTop:"10px",paddingBottom:"10px",backgroundColor: "#ededed"}} /></a>
            </p> 
          </div>
          <ul id="navBar" className="nav justify-content-between">
            <li className="nav-item"><a className="nav-link" href="/archives">Archives</a></li>
            <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
            <li className="nav-item"><a className="nav-link" href="/aboutus">Présentation</a></li>
            <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
          </ul>
        </div>
      )
    }
    else{
      return (
        <div id="header">
        <img id="topBar" src={topBar} alt="topBar" />
        <a href="/"><img id="imgHeader" className="imgHeader" src={banner} alt="capsuleBanner" /></a>
        <div id="stickyheader" className="nosticky">
          <p style={{width:"100%",textAlign:"center",height: "100%"}}>
            <a href="/"><img src={titre} height="100%" alt="logo" style={{paddingTop:"10px",paddingBottom:"10px",backgroundColor: "#ededed"}} /></a>
          </p> 
        </div>
        <img src={banner} alt="invisibleHeader" className="imgHeader" id="fakeHeader" style={{"visibility":"hidden"}} />  
        <ul id="navBar" className="nav justify-content-between">
          <button id="arrowLeft" className="arrow material-icons" onClick={this.scrollArrow} >arrow_downward</button>
          <li className="nav-item"><a className="nav-link" href="/archives">Archives</a></li>
          <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
          <li className="nav-item"><a className="nav-link" href="/aboutus">Présentation</a></li>
          <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
          <button id="arrowRight" className="arrow material-icons" onClick={this.scrollArrow}>arrow_downward</button>
        </ul>
    </div>
      )
    }
  }

}
export default HeaderPage;
