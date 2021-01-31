/* eslint-disable jsx-a11y/anchor-is-valid */
import { getTheme } from '@fluentui/react'
import FileSaver from 'file-saver';
import HeaderPage from '../HeaderPage'
import React from 'react';
import * as $ from 'jquery';
import novembre from '../cover/novembre.png'
import octobre from '../cover/octobre.png'
import pilote from '../cover/pilote.png'
import janvier from '../cover/janvier.png'
import FooterPage from '../footer/Footer';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root')


require('bootstrap')// eslint-disable-next-line
const theme = getTheme();

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

function scrollFun(){ 

    if($('#page')){
    if ($('#page').scrollTop() >= document.getElementById("content2").offsetTop - 150){
        document.getElementById('stickyheader').classList.remove('nosticky')
        document.getElementById('stickyheader').classList.add('sticky')
      }
      else{
        document.getElementById('stickyheader').classList.add('nosticky')
        document.getElementById('stickyheader').classList.remove('sticky')
      }
    }
  }

let archives = {
  0:{
      announcerDate: "n° Pilote",
      announcerContent: "Le numéro pilote porte en lui la vocation intrinsèque du fascicule miteux qui traîne depuis des lustres dans la salle d’attente bondée de nos médecins généralistes, entre le gel hydroalcoolique et les magazines ELLE parus en 2012. En cette période de crise sanitaire, les experts déconseillent fortement de s’exposer à la salive d’individus venus consulter leurs précieuses revues (même quand c’est avec la ferveur/dévotion des lectures psalmodiques du dimanche), ceux-là qui tournent les pages du bout d’un doigt humide. Ainsi, pour éviter tout risque de contamination, nous apportons à domicile la frénésie qui manque à votre vie aseptisée. A défaut de contenir des anecdotes inédites sur la vie de couple de Cristiano Ronaldo, La Capsule zéro vous offrira poésie futile, mots croisés facétieux et si vos yeux sont baladeurs, évènement clandestin estival.",
      announcerCover: pilote,
      number: "pilote"
  },
  1:{
      announcerDate: "n° 1 - Octobre",
      announcerContent: "Premier numéro officiel, la deuxième capsule aspire toujours à des manigances officieuses puisqu’elle fut la source incontrôlable d’une journée de fête (le proviseur nuança à dessein le terme de “bringue”) au sein du lycée. Cet épisode témoigne de l’effervescence inévitable que provoque la rencontre des vifs esprits pontonniens, et laisse au lecteur cette sensation pétillante de fougue sur la langue. Théâtre, réflexion et chronique nécrologique.",
      announcerCover: octobre
  },
  2:{
      announcerDate: "n° 2 - Novembre",
      announcerContent: "Le rythme effréné de l’alternance coronavirusesque aura eu pour effets une baisse de motivation générale, une charge de travail ingérable et... une publication tardive. Cependant, rien ne pourra affecter l’ambition malicieuse de nos rédacteurices enflammé.e.s, qui livrent un numéro cuit à point, achevé juste à temps pour être titré “numéro de novembre”. Au programme : poésie, jeu grandeur lycée, burlesque retour d’un horoscope pessimiste et sournois, et lignes italiennes à croquer.",
      announcerCover: novembre
  },
  3:{
      announcerDate: "n° 3 - Hiver",
      announcerContent: "La Capsule prend de l’ampleur et de l’épaisseur pour que vous puissiez commencer l’année 2020 avec une réserve de papier journal allume-feu bien fournie (car oui, il le faut depuis que la neige a gagné Strasbourg). Si vous avez l’audace de pencher vos mirettes sur nos lignes mijotées avant de les enfouir froidement dans votre poêle, vous aurez pour réchauffer votre coeur la burlesque nouvelle Voltarène et le patator, de la poésie espagnole, une réflexion autour de la précarité menstruelle, le museau humide du Bergasmouille et tout ce qu’on ne vous dit pas car nous cultivons le mystère. Grâce à un accès privilégié au lycée des Pontonniers vous saurez trouver à l’intersection de la page 4 et 5 une planche d’autocollants tendrement confectionnée. On vous embrasse de sueur et d’encre (car on ne le dit pas assez mais notre lectorat est le plus sincère et affectueux du quartier).",
      announcerCover:janvier,
  }
}

  
class Archive extends React.Component{

  
    constructor(props){
      super(props)
      this.state = {
        announcerDate: "n° Pilote",
        announcerContent: "Le numéro pilote porte en lui la vocation intrinsèque du fascicule miteux qui traîne depuis des lustres dans la salle d’attente bondée de nos médecins généralistes, entre le gel hydroalcoolique et les magazines ELLE parus en 2012. En cette période de crise sanitaire, les experts déconseillent fortement de s’exposer à la salive d’individus venus consulter leurs précieuses revues (même quand c’est avec la ferveur/dévotion des lectures psalmodiques du dimanche), ceux-là qui tournent les pages du bout d’un doigt humide. Ainsi, pour éviter tout risque de contamination, nous apportons à domicile la frénésie qui manque à votre vie aseptisée. A défaut de contenir des anecdotes inédites sur la vie de couple de Cristiano Ronaldo, La Capsule zéro vous offrira poésie futile, mots croisés facétieux et si vos yeux sont baladeurs, évènement clandestin estival.",
        announcerCover: pilote,
        number: "pilote",
        isOpen: false
      }
    }



    componentDidMount(){
        document.title = "La Capsule - Archives"
        if(this.props.content){
          this.__updateContent(this.props.content)
      }
        if(detectMob()){
          require('./archiveStyleMobile.css')
        }
        else{
          require('./archiveStyle.css')
        }
      }

    __updateContent(id){
      if(detectMob()){
        this.setState({
          isOpen: true
        })
      }
      let content = archives[id]
      this.setState({
        "announcerDate": content.announcerDate,
        "announcerContent": content.announcerContent,
        "announcerCover": content.announcerCover,
        "number": content.announcerDate.split(" - ")[0].split("n° ")[1]
      })
    }
    render(){
        if(detectMob()){
          return(
            <div id="page"  onScroll={scrollFun}>
            {this.state.isOpen && 
            <div id="popup">
              <button id="quit" onClick={()=>{this.setState({isOpen:false})}} style={{boxShadow:theme.effects.elevation64}} >X</button>
              <p id="popupCover">
              <img style={{boxShadow:theme.effects.elevation16}} src={this.state.announcerCover} width="45%" />
              <br/>
              {this.state.announcerDate}
              <br/>
              <button className="downloadButton" onClick={()=>{FileSaver.saveAs(process.env.PUBLIC_URL + "/numbers/"+this.state.number+".pdf","la capsule n°"+this.state.number+".pdf");;}}> lire en PDF</button>
              </p>
              <div id="popupContent" style={{boxShadow:theme.effects.elevation16}}>
              </div>
              <div id="resume">
                {this.state.announcerContent}
                </div>

            </div>
            }
            <HeaderPage/>
            <div id="content2" className="container">
              <div id="archiveInner">
                <h3 style={{textDecoration:"underline"}}>Toutes les éditions de La Capsule</h3>
                <div className="row" style={{margin: 'auto',width: '100%',marginTop:"20px"}}>
                  <div className="col">
                    <img className='preview'  src={pilote} alt="numéro pilote"/><br />
                    <p className="numberTitle" onClick={()=>{this.setState({isOpen:true});this.__updateContent(0)}}>n° Pilote</p>
                    
                  </div>
                  <div className="col">
                    <img className='preview' src={octobre} alt="numéro octobre"/><br />
                    <p className="numberTitle" onClick={()=>{this.setState({isOpen:true});this.__updateContent(1)}}>n° 1 - Octobre</p>
                  </div>
                </div>
                <div className="row" style={{margin: 'auto',width: '100%'}}>
                  <div className="col">
                     <img className='preview' src={novembre} alt="numéro novembre"/><br />
                      <p className="numberTitle" onClick={()=>{this.setState({isOpen:true});this.__updateContent(2)}}>n°2 - Novembre</p>
                  </div>
                  <div className="col">
                      <img className='preview' src={novembre} alt="numéro novembre"/><br />
                      <p className="numberTitle" onClick={()=>{this.setState({isOpen:true});this.__updateContent(3)}}>n°3 - Hiver</p>
                  </div>
                </div>
                    </div>
            </div>
                    <FooterPage/>

          </div>
        )
        }
        else{
          return(
            <div id="page"  onScroll={scrollFun}>
            <HeaderPage/>
            <div id="content2" className="container">
                <div id="announcer" className="row">
                  <div id="announcerContent" className="container">
                    <img src={this.state.announcerCover} alt="announcerCover" id="announcerCover" />
                      <span id="announcerDate" className="row">{"La capsule - " + this.state.announcerDate.split(" - ")[0]}</span>
                      <span id="sommaireTitle">Sommaire:</span>
                      <div id="sommaire" className="row" style={{boxShadow: theme.effects.elevation16}}>
                        {this.state.announcerContent}
                      </div>
                      <button className="downloadButton" onClick={()=>{FileSaver.saveAs(process.env.PUBLIC_URL + "/numbers/"+this.state.number+".pdf","la capsule n°"+this.state.number+".pdf");;}}> lire en PDF</button>
                  </div>
                </div>
                <div id="archiveList" >
                    <div id="archiveInner">
                        <hr />
                        <p style={{marginTop: -45,fontSize: 35,width: '100%',textAlign:'center'}}><span style={{backgroundColor: 'white',color:'grey'}}>les dernières éditions de la capsule</span></p>
                        <div className="row" style={{margin: 'auto',width: '80%'}}>
                            <div className="col-sm">
                              <img className='preview' src={pilote} alt="numéro pilote"/><br />
                              <p className="numberTitle" onClick={()=>{this.__updateContent(0)}}>n° Pilote</p>
                            </div>
                            <div className="col-sm">
                              <img className='preview' src={octobre} alt="numéro octobre"/><br />
                              <p className="numberTitle" onClick={()=>{this.__updateContent(1)}}>n° 1 - Octobre</p>
                            </div>
                            <div className="col-sm">
                              <img className='preview' src={novembre} alt="numéro novembre"/><br />
                              <p className="numberTitle" onClick={()=>{this.__updateContent(2)}}>n°2 - Novembre</p>
                            </div>
                            <div className="col-sm">
                              <img className='preview' src={novembre} alt="numéro novembre"/><br />
                              <p className="numberTitle" onClick={()=>{this.__updateContent(3)}}>n°3 - Hiver</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    <FooterPage/>

          </div>
        )
        }
    }
}
export default Archive