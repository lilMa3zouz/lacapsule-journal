import topBar from './img/bar.svg';
import banner from './img/capsule2.png';
import titre from './img/titreHeader.svg'
import angleRight from './img/angle-right.svg'
import angleLeft from './img/angle-left.svg'
import motCroisé from './publication/motcroisé.jpg'
import './css/bootstrap.min.css';
import './css/materialIcons.css';
import './css/animate.min.css'
import './css/index.css';
import './css/laptop.css';
import './script.js'
import * as $ from 'jquery';
require('bootstrap')

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


function scrollArrow(){
  var getOffset = $('#navBar').offset().top;
  $('#page').animate({scrollTop: getOffset}, 500);
}

function header(){
  return(
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
      <button id="arrowLeft" className="arrow material-icons" onClick={scrollArrow} >arrow_downward</button>
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
          <button id="arrowRight" className="arrow material-icons" onClick={scrollArrow}>arrow_downward</button>
          </ul>
    </div>
  )
}

function lastCarousel() {
  return(

    <div id="lastCarousel">
      <button id="carouselTrigger" class="material-icons" >keyboard_arrow_right</button>
    </div>
  )
}

function App() {
  return (
    <div id="page"  onScroll={scrollFun}>
      {header()}
      <div id="content" style={{width:"100%"}}>
          {lastCarousel()}
          <div className="container article" style={{backgroundImage: "url("+motCroisé+")"}}>
          </div>
      </div>
    </div>
  );
}

export default App;
