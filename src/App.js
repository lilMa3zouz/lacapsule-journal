import topBar from './img/bar.svg';
import banner from './img/capsule2.png';
import titre from './img/titreHeader.svg'// eslint-disable-next-line
import angleRight from './img/angle-right.svg'// eslint-disable-next-line
import angleLeft from './img/angle-left.svg'// eslint-disable-next-line
import motCroisé from './publication/motcroisé.jpg'
import './css/bootstrap.min.css';
import './css/materialIcons.css';
import './css/animate.min.css'
import './css/index.css';
import './css/laptop.css';
import './script.js'
import * as $ from 'jquery';
//import './css/allv5.1.0.css'
//import './css/allv5.1.1.css'
//import './css/allv5.3.0.css'

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

function switchIcon(){
  var trigger = document.getElementById("toggle");
  var value = (trigger.innerHTML === "keyboard_arrow_right") ? "keyboard_arrow_down" : "keyboard_arrow_right"
  trigger.innerHTML = value

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
  <div class="panel-group container" id="lastCarousel">
    <div class="panel panel-default">
      <div class="panel-heading">
          <a onClick={switchIcon} data-toggle="collapse" id="toggle" class="material-icons" data-parent="#lastCarousel" href="#collapse3">keyboard_arrow_right</a>
      </div>
      <div id="collapse3" class="panel-collapse collapse">
        <div class="panel-body">
        <div id="carouselExampleControls" className="carousel slide container" data-ride="carousel">
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
        <a id="prev" className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <img src={angleLeft} className="controls" alt="prev"/>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <img src={angleRight} className="controls" alt="Next"/>
        </a>
</div>
        </div>
      </div>
    </div>
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
