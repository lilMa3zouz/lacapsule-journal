import { getTheme } from '@fluentui/react'
import './css/component.css'
import './css/bootstrap.min.css';
import './css/materialIcons.css';
import HeaderPage from './HeaderPage'
import React from 'react';
import * as $ from 'jquery';
import './css/Archive.css'
import novembre from './cover/novembre.png'
import octobre from './cover/octobre.png'
import pilote from './cover/pilote.png'

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


  
class Archive extends React.Component{
    state = {
        announcerDate: "n° Pilote",
        announcerContent : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        announcerCover: pilote,
      }
    componentDidMount(){
        document.title = "La Capsule - Archives"

      }
    render(){
        return(
            <div id="page"  onScroll={scrollFun}>
            <HeaderPage></HeaderPage>
            <div id="content2" className="container">
                <div id="announcer" className="row">
                  <div id="announcerContent" class="container">
                    <img src={this.state.announcerCover} alt="announcerCover" id="announcerCover" />
                      <span id="announcerDate" class="row">{this.state.announcerDate}</span>
                      <span id="sommaire" class="row">
                        Sommaire
                      </span>
                  </div>
                </div>
                <div id="archiveList" >
                    <div id="archiveInner">
                        <hr />
                        <p style={{marginTop: -45,fontSize: 35,width: '100%',textAlign:'center'}}><span style={{backgroundColor: 'white',color:'grey'}}>les dernières éditions de la capsule</span></p>
                        <div className="row" style={{margin: 'auto',width: '80%'}}>
                            <div className="col-sm">
                              <img className='preview' src={pilote} alt="numéro pilote"/><br />
                              <a className="numberTitle" href="/">n° Pilote</a>
                            </div>
                            <div className="col-sm">
                              <img className='preview' src={octobre} alt="numéro octobre"/><br />
                              <a className="numberTitle" href="/">n° 1 - Octobre</a>
                            </div>
                            <div className="col-sm">
                              <img className='preview' src={novembre} alt="numéro novembre"/><br />
                              <a className="numberTitle" href="/" >n°2 - Novembre</a>
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