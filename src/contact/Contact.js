import { getTheme } from '@fluentui/react'
import './contactStyle.css'
import HeaderPage from '../HeaderPage'
import React from 'react';
import * as $ from 'jquery';
import instagram from '../img/instagram.png'
import gmail from '../img/gmail.png'
import {isMobile} from 'react-device-detect';
import FooterPage from '../footer/Footer';


require('bootstrap')// eslint-disable-next-line
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

  class Contact extends React.Component{

      componentDidMount(){
        document.title = "La Capsule - Contact"
        if(detectMob()){
          require('./contactStyleMobile.css')
        }
        else{
          require('./contactStyle.css')
        }
      }
      render(){
        return(
            <div id="page" onScroll={()=>scrollFun()} >
                <HeaderPage />
                <div id="content" className="container">
                    <div id='container' className="container" style={{boxShadow: theme.effects.elevation8}}>
                        <div id="text">
                            <p style={{textAlign:'left'}}>
                              Pour nous contacter, notre préférence va aux hiboux. Dociles, rapides, efficaces. Si vous n’êtes pas en mesure de livrer votre questionnement, article ou tout autre éclat de génie par ce biais, nous vous invitons à écrire à cet identifiant qui cache une équipe vive et à votre écoute, ou à cette adresse mail que nous consultons rarement (pour ne point avoir à prononcer le mot terrible qui commence par un J et finit par -amais) : <br />
                            </p>
                            <p>                       
                              <figure>
                                <a href="https://www.instagram.com/lacapsulejournal/" target="_blank"><img src={instagram} className="instagram" /></a>
                                <figcaption>
                                  @lacapsulejournal sur instagram <br />
                                  @chanaenaenae et @sheep_pnn - rédactrices en chef <br /> (titre pompeux pour une réalité moins éclatante) et co-fondactrices
                                </figcaption>
                              </figure>
                              <figure>
                                <a href="mailto:lacapsulejournal@gmail.com"><img src={gmail} className="instagram" /></a>
                                <figcaption>lacapsulejournal@gmail.com</figcaption>
                              </figure>
                            </p>
                            <p>
                              Vous pouvez, bien sûr, nous alpaguer dans les couloirs du lycée international strasbourgeois à toute heure du jour et de la nuit. <br /> Retrouvez les noms des participant·e·s dans la page <b>remerciements</b> de chaque numéro
                            </p>
                        </div>
                      
                    </div> 
                </div>
                        <FooterPage/>

            </div>
        )
      }
}
export default Contact;
