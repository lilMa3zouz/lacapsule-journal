import { getTheme } from '@fluentui/react'
import './presentationStyle.css'
import {TinderLikeCard} from 'react-stack-cards'
import HeaderPage from '../HeaderPage'
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import * as $ from 'jquery';
import hanae from './agneau.png'
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

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    background: '#FEA900',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#6AC0FF',
  },
};

  class Presentation extends React.Component{
      constructor(props){
        super(props)
      }


      componentDidMount(){
        document.title = "La Capsule - Présentation"
      }
      render(){
        return(
            <div id="page" onScroll={()=>scrollFun()} >
                <HeaderPage />
                <div id="content" className="container" style={{minHeight:"1700px"}}>
                    <div id='container' className="container" style={{boxShadow: theme.effects.elevation8,minHeight:"1300px"}}>
                        <div id="text">
                            <p style={{textAlign:'left'}}>
                            <i>La Capsule</i> n’est pas l’héritage malmené du <i>Micromonde</i> (qui animait jadis les lectures pontoniennes), 
                            ni même de <i>Pontonews</i>, ni même de n’importe quel journal, il n’est d’ailleurs pas qualifié comme tel et encore 
                            moins comme celui des Pontonniers. Il n’a pas d’ordres à recevoir pour répondre à quelque attente, il n’est 
                            pas et n’a pas à être quoi que ce soit : il circule, et c’est largement suffisant. Ce feuillet simple et discret 
                            n’a pas d’ambitions journalistiques, géopolitiques, politiques ou que sais-je. En a-t-il seulement, 
                            des ambitions ? Vous voir arborer un sourire, tout au plus. <i>La Capsule</i> n’a pas peur de rien, elle n’a pas de 
                            direction fixe, elle n’a pas de ligne éditoriale ni de projet d’avenir. Voilà ce que <i>La Capsule</i> n’a pas, 
                            et ce qu’elle n’est pas. Pour savoir ce qu’elle est, il vous suffira de la feuilleter.
                            </p>
                            <p>
                            </p>
                        </div>
                        <div className="container">
                            
                        <div id="conclusion" >
                          <b>Tendez l'oreille, et déployez la langue, buvez nos blagues infectes comme un sirop d'érable, et n'hésitez pas à rentrer dans le cercle ; nous sommes toujours à votre écoute. </b>
                        </div>
                        </div>
                    </div> 
                </div>
                        <FooterPage/>

            </div>
        )
      }
}
export default Presentation;
