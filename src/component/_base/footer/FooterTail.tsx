import React from 'react';
import '../../../assets/css/_base/Footer.css';
import {Link} from "react-router-dom";

function FooterTail(props: any) {
  return (
    <div className="footer-tail">
      <div className="footer-tail-container">
        <div className="footer-main-menu">
          <ul>
            <li className="footer-main-menu-item-left">개인정보처리방침</li>
            <li className="footer-main-menu-item-left">이용안내</li>
            {/*<li className="footer-main-menu-item-left">사업자정보</li>*/}
            <li className="footer-main-menu-item-left last">이용약관</li>
          </ul>
        </div>
        <div className="footer-tail-copyright">
          <Link to="./">
          © 2021. 포만감 Co. all rights reserved.
          </Link>
        </div>
        {/*<div className="footer-tail-slogan">*/}
        {/*  <span>우리는 세상을 포만하게 만든다</span>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}

export default FooterTail;
