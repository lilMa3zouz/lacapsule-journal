import { getTheme } from '@fluentui/react'
import './css/component.css'
import './css/bootstrap.min.css';
import './css/materialIcons.css';
import './css/Presentation.css'
import HeaderPage from './HeaderPage'
import React from 'react';
import * as $ from 'jquery';
import hanae from './img/agneau.png'
require('bootstrap')// eslint-disable-next-line
const theme = getTheme();

function scrollFun(){
    if($('#page')){
      if ($('#page').scrollTop() >= document.getElementById("content2").offsetTop){
        document.getElementById('stickyheader').classList.remove('nosticky')
        document.getElementById('stickyheader').classList.add('sticky')
      }
      else{
        document.getElementById('stickyheader').classList.add('nosticky')
        document.getElementById('stickyheader').classList.remove('sticky')
      }
    }
  }

  class Presentation extends React.Component{

      componentDidMount(){
        document.title = "La Capsule - Présentation"
      }
      render(){
        return(
            <div id="page" >
                <HeaderPage />
                <div id="content" className="container" onScroll={()=>scrollFun()}>
                    <div id='container' className="container" style={{boxShadow: theme.effects.elevation8}}>
                        <div id="text">
                            <p>
                            <i>La Capsule</i> n’est pas l’héritage malmené du <i>Micromonde</i> (qui animait jadis les lectures pontoniennes), 
                            ni même de <i>Pontonews</i>, ni même de n’importe quel journal, il n’est d’ailleurs pas qualifié comme tel et encore 
                            moins comme celui des Pontonniers. Il n’a pas d’ordres à recevoir pour répondre à quelque attente, il n’est 
                            pas et n’a pas à être quoi que ce soit : il circule, et c’est largement suffisant. Ce feuillet simple et discret 
                            n’a pas d’ambitions journalistiques, géopolitiques, politiques ou que sais-je. En a-t-il seulement, 
                            des ambitions ? Vous voir arborer un sourire, tout au plus. <i>La Capsule</i> n’a pas peur de rien, elle n’a pas de 
                            direction fixe, elle n’a pas de ligne éditoriale ni de projet d’avenir. Voilà ce que <br /> <i>La Capsule</i> n’a pas, 
                            et ce qu’elle n’est pas. Pour savoir ce qu’elle est, il vous suffira de la feuilleter.
                            </p>
                            <p>
                            </p>
                        </div>
                        <div id="personnal" className="container row">
                            <div className="col">
                                <div className="imageHolder"><img src={hanae} alt="Hanae"/></div>
                            </div>
                            <div className="col">
                                <div className="imageHolder"><img src={hanae} alt="Hanae"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
      }

}
export default Presentation;
