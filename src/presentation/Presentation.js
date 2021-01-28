import { getTheme } from '@fluentui/react'
import './presentationStyle.css'
import HeaderPage from '../HeaderPage'
import React from 'react';
import * as $ from 'jquery';
import romane from './agneau.png'
import hanae from '../img/hanae2.png'
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

  
  



  class Presentation extends React.Component{

      componentDidMount(){
        document.title = "La Capsule - Présentation";
        let stack = document.querySelector(".stack");
        [...stack.children].reverse().forEach(i => stack.append(i));
        stack.addEventListener("click", function(e){
          let card = document.querySelector(".card:last-child");
          if (e.target !== card) return;
          card.style.animation = "swap 700ms forwards";
          setTimeout(() => {
            card.style.animation = "";
            stack.prepend(card);
          }, 700);
        });
        
      }
      render(){
        return(
            <div id="page" onScroll={()=>scrollFun()} >
                <HeaderPage />
                <div id="content" className="container" style={{minHeight:"1700px"}}>
                    <div id='container' style={{boxShadow: theme.effects.elevation8}}>
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
                        <div class="stack">
                        <div className="presentation card" >
                                <div className="imageHolder"><img src={romane} alt="Hanae"/></div>
                                <p className="name">ROMANE PONTON</p>
                                <p className="description">Cheveux blonds, longues jambes, esprit qui court. Romane est la co-fondatrice de ce journal, mixture de nos pensées, synthèse de nos réflexions et support de nos gamberges. Rencontrez-la au fil de ces pages, sautez sur ses mots, lisez sa poésie, ouvrez bien vos écoutilles, et alors vous entendrez sa voix, et vous pourrez toucher son cœur du bout de vos doigts. Elle écrit dans les coins de ses cahiers comme elle se cache derrière les buissons pour capturer de son objectif les instants de malice qu'elle chérit tant.</p>
                            </div>
                            <div className="presentation card">
                                <div className="imageHolder"><img src={hanae} alt="Hanae"/></div>
                                <p className="name">HANAE DE BARRY</p>
                                <p className="description">Si vous ne la trouvez pas blottie contre une étale de vinyles, ou un stand de crêpes salées, vous l’apercevrez sûrement dans la cuisine, où elle laisse flâner son esprit dans les lignes tortueuses des oignons rouges et des partitions de Haendel. Si vous ne mettez toujours pas l’œil sur son minois, c’est que vous cherchez mal. Ou qu’elle s’est encore échappée dans un recoin du monde on ne sait pas trop où. Hanaé a plus d’un tour dans son sac, qui a lui-même tant de poches que les mots s’y coincent et finissent par s’entasser. C’est un chaos si hasardeux qu’il en devient poétique, et vous avez la chance en ouvrant notre journal de furtivement le saisir et glisser la bandoulière à votre cou.</p>
                            </div>
                        </div>
                        <div id="conclusion" >
                          <b>Tendez l'oreille, et déployez la langue, buvez nos blagues infectes comme un sirop d'érable, et n'hésitez pas à rentrer dans le cercle ; nous sommes toujours à votre écoute. </b>
                        </div>
                    </div> 
                </div>
                        <FooterPage/>

            </div>
        )
      }
}
export default Presentation;
