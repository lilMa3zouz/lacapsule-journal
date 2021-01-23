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
        0783283548
    </div>
    )
  }
}
export default FooterPage;
