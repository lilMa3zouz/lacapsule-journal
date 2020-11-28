import topBar from './img/bar.svg';
import banner from './img/capsule2.png';
import titre from './img/titreHeader.svg';
import './css/bootstrap.min.css';
import './css/materialIcons.css';
import './css/header.css';
import React from 'react';
import * as $ from 'jquery';

class HeaderPage extends React.Component {
    scrollArrow(){
        var getOffset = $('#navBar').offset().top;
        $('#page').animate({scrollTop: getOffset}, 500);
      }
  render() {
    return (
        <div id="header">
      <img id="topBar" src={topBar} alt="topBar" />
      <img id="imgHeader" className="imgHeader" src={banner} alt="capsuleBanner" />
      <div id="stickyheader" className="nosticky animate__animated">
        <p style={{width:"100%",textAlign:"center",height: "100%"}}>
          <img src={titre} height="100%" alt="logo" style={{paddingTop:"10px",paddingBottom:"10px",backgroundColor: "#ededed"}} />
        </p> 
      </div>
      <img src={banner} alt="invisibleHeader" className="imgHeader" id="fakeHeader" style={{"visibility":"hidden"}} />  
      <ul id="navBar" className="nav justify-content-between">
      <button id="arrowLeft" className="arrow material-icons" onClick={this.scrollArrow} >arrow_downward</button>
          <li className="nav-item">
            <a className="nav-link" href="www.youtube.com">Archives</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="www.youtube.com">blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="www.youtube.com">présentation</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="www.youtube.com">Contact</a>
          </li>
          <button id="arrowRight" className="arrow material-icons" onClick={this.scrollArrow}>arrow_downward</button>
          </ul>
    </div>
    )
  }
}
export default HeaderPage;