/* eslint-disable jsx-a11y/anchor-is-valid */
import { getTheme } from '@fluentui/react'
import FileSaver from 'file-saver';
import HeaderPage from '../HeaderPage'
import React from 'react';
import * as $ from 'jquery';
import './archive.css'
import novembre from '../cover/novembre.png'
import octobre from '../cover/octobre.png'
import pilote from '../cover/pilote.png'
import janvier from '../cover/janvier.png'

require('bootstrap')// eslint-disable-next-line
const theme = getTheme();



function scrollFun(){ 

    if($('#page')){
      if ($('#page').scrollTop() >= document.getElementById("content2").offsetTop - 350){
        document.getElementById('stickyheader').classList.remove('nosticky')
        document.getElementById('stickyheader').classList.add('sticky')
      }
      else{
        document.getElementById('stickyheader').classList.add('nosticky')
        document.getElementById('stickyheader').classList.remove('sticky')
      }
    }
  }


  
class Archive extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        announcerDate: "n° Pilote",
        announcerContent: "Le numéro pilote porte en lui la vocation intrinsèque du fascicule miteux qui traîne depuis des lustres dans la salle d’attente bondée de nos médecins généralistes, entre le gel hydroalcoolique et les magazines ELLE parus en 2012. En cette période de crise sanitaire, les experts déconseillent fortement de s’exposer à la salive d’individus venus consulter leurs précieuses revues (même quand c’est avec la ferveur/dévotion des lectures psalmodiques du dimanche), ceux-là qui tournent les pages du bout d’un doigt humide. Ainsi, pour éviter tout risque de contamination, nous apportons à domicile la frénésie qui manque à votre vie aseptisée. A défaut de contenir des anecdotes inédites sur la vie de couple de Cristiano Ronaldo, La Capsule zéro vous offrira poésie futile, mots croisés facétieux et si vos yeux sont baladeurs, évènement clandestin estival.",
        announcerCover: pilote,
        number: "pilote"
      }
    }
    componentDidMount(){
        document.title = "La Capsule - Archives"

      }

    __updateContent(announcerDate,announcerContent,announcerCover,announcerText){
      this.setState({
        "announcerDate": announcerDate,
        "announcerContent": announcerContent,
        "announcerCover": announcerCover,
        "number": announcerDate.split(" - ")[0].split("n° ")[1]
      })
    }
    render(){
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
                      <button id="downloadButton" onClick={()=>{FileSaver.saveAs(process.env.PUBLIC_URL + "/numbers/"+this.state.number+".pdf","la capsule n°"+this.state.number+".pdf");;}}> lire en PDF</button>
                  </div>
                </div>
                <div id="archiveList" >
                    <div id="archiveInner">
                        <hr />
                        <p style={{marginTop: -45,fontSize: 35,width: '100%',textAlign:'center'}}><span style={{backgroundColor: 'white',color:'grey'}}>les dernières éditions de la capsule</span></p>
                        <div className="row" style={{margin: 'auto',width: '80%'}}>
                            <div className="col-sm">
                              <img className='preview' src={pilote} alt="numéro pilote"/><br />
                              <p className="numberTitle" onClick={()=>{this.__updateContent("n° Pilote","Le numéro pilote porte en lui la vocation intrinsèque du fascicule miteux qui traîne depuis des lustres dans la salle d’attente bondée de nos médecins généralistes, entre le gel hydroalcoolique et les magazines ELLE parus en 2012. En cette période de crise sanitaire, les experts déconseillent fortement de s’exposer à la salive d’individus venus consulter leurs précieuses revues (même quand c’est avec la ferveur/dévotion des lectures psalmodiques du dimanche), ceux-là qui tournent les pages du bout d’un doigt humide. Ainsi, pour éviter tout risque de contamination, nous apportons à domicile la frénésie qui manque à votre vie aseptisée. A défaut de contenir des anecdotes inédites sur la vie de couple de Cristiano Ronaldo, La Capsule zéro vous offrira poésie futile, mots croisés facétieux et si vos yeux sont baladeurs, évènement clandestin estival.",pilote)}}>n° Pilote</p>
                            </div>
                            <div className="col-sm">
                              <img className='preview' src={octobre} alt="numéro octobre"/><br />
                              <p className="numberTitle" onClick={()=>{this.__updateContent("n° 1 - Octobre","Premier numéro officiel, la deuxième capsule aspire toujours à des manigances officieuses puisqu’elle fut la source incontrôlable d’une journée de fête (le proviseur nuança à dessein le terme de “bringue”) au sein du lycée. Cet épisode témoigne de l’effervescence inévitable que provoque la rencontre des vifs esprits pontonniens, et laisse au lecteur cette sensation pétillante de fougue sur la langue. Théâtre, réflexion et chronique nécrologique.",octobre)}}>n° 1 - Octobre</p>
                            </div>
                            <div className="col-sm">
                              <img className='preview' src={novembre} alt="numéro novembre"/><br />
                              <p className="numberTitle" onClick={()=>{this.__updateContent("n° 2 - Novembre","Le rythme effréné de l’alternance coronavirusesque aura eu pour effets une baisse de motivation générale, une charge de travail ingérable et... une publication tardive. Cependant, rien ne pourra affecter l’ambition malicieuse de nos rédacteurices enflammé.e.s, qui livrent un numéro cuit à point, achevé juste à temps pour être titré “numéro de novembre”. Au programme : poésie, jeu grandeur lycée, burlesque retour d’un horoscope pessimiste et sournois, et lignes italiennes à croquer.",novembre)}}>n°2 - Novembre</p>
                            </div>
                            <div className="col-sm">
                              <img className='preview' src={novembre} alt="numéro novembre"/><br />
                              <p className="numberTitle" onClick={()=>{this.__updateContent("n° 3 - Hiver","",janvier)}}>n°3 - Hiver</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        )
    }
}
export default Archive