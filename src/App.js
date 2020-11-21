import topBar from './img/bar.svg';
import banner from './img/capsule2.png';
import titre from './img/titreHeader.png'
import './css/bootstrap.min.css';
import './css/materialIcons.css';
import './css/animate.min.css'
import './css/index.css';
import './script.js'
import * as $ from 'jquery';


const pCentered = {
  width:"100%",
  textAlign:"center",
  height: "100%"
}

function scrollArrow(){
        var getOffset = $('#navBar').offset().top;
        $('html,body').animate({scrollTop: getOffset}, 500);

}


function App() {
  window.onscroll = () => {
    if (window.pageYOffset >= document.getElementById("content").offsetTop){
        document.getElementById('stickyheader').classList.remove('nosticky')
        document.getElementById('stickyheader').classList.add('sticky')

    }
    else{
        document.getElementById('stickyheader').classList.add('nosticky')
        document.getElementById('stickyheader').classList.remove('sticky')

    }
}
  return (
    <div id="page">
            <div id="header">
                <img id="topBar" src={topBar} alt="topBar" />
                  <img id="imgHeader" className="imgHeader" src={banner} alt="capsuleBanner" />
                  <div id="stickyheader" className="nosticky animate__animated">
                    <p style={pCentered}>
                      <img src={titre} height="100%" alt="logo" style={{paddingTop:"10px",paddingBottom:"10px"}} />
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
            <div id="content">
            fe
            </div>
        </div>
  );
}

export default App;
