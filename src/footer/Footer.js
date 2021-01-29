import '../css/bootstrap.min.css';
import '../css/materialIcons.css';
import './footerStyle.css';
import React from 'react';
import * as $ from 'jquery';


class FooterPage extends React.Component {
    scrollArrow(){
        var getOffset = $('#navBar').offset().top;
        $('#page').animate({scrollTop: getOffset}, 500);
      }
  render() {
    return (
      <div id="footer">
        <h3 style={{paddingTop: "20px",marginBottom: "-20px"}}>Fièrement propulsé par Mazouuuuz</h3> <br />
        MAZOUZ Mohamed<br />
        m.mazouz67@gmail.com <br />
        <a href="https://www.fiverr.com/ma3zouzlmc" id='fiver' target="_blank">Lien Fiverr</a>
    </div>
    )
  }
}
export default FooterPage;
