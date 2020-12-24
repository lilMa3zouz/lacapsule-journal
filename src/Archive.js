import { getTheme } from '@fluentui/react'
import './css/component.css'
import './css/bootstrap.min.css';
import './css/materialIcons.css';
import HeaderPage from './HeaderPage'
import './css/Archive.css'
import React from 'react';
import * as $ from 'jquery';
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
        announcerDate: "",
        announcerContent : "",
    }
    componentDidMount(){
        document.title = "La Capsule - Archives"
        console.log(theme.effects.elevation16)
      }
    render(){
        return(
            <div id="page"  onScroll={scrollFun}>
            <HeaderPage></HeaderPage>
            <div id="content2" class="container">
                <div id="announcer" >fefef</div>
                <div id="archiveList" >
                    <div id="archiveInner">
                        <hr />
                        <p style={{marginTop: -45,fontSize: 35,width: '100%',textAlign:'center'}}><span style={{backgroundColor: 'white',color:'grey'}}>les dernières éditions de la capsule</span></p>
                        <div className="row">
                            <img className='preview' src={pilote} alt="numéro pilote"/> 
                            <img className='preview' src={octobre} alt="numéro octobre"/> 
                            <img className='preview' src={novembre} alt="numéro novembre"/> 

                        </div>
                    </div>
                </div>
            </div>
          </div>
        )
    }
}
export default Archive