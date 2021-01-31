/* eslint-disable jsx-a11y/anchor-is-valid */
import { getTheme } from '@fluentui/react'
import FileSaver from 'file-saver';
import React from 'react';


require('bootstrap')// eslint-disable-next-line
const theme = getTheme();

  
class Download extends React.Component{


    componentDidMount(){
        document.title = "La Capsule - telechargement"
        console.log(this.props.path)
        FileSaver.saveAs(process.env.PUBLIC_URL+"/files/"+this.props.path,this.props.path)

    }
    render(){
        return(
            <div></div>
        )
    }
}
export default Download