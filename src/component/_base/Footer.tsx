import React from 'react';
import '../../assets/css/_base/Footer.css';

function Footer(props: any) {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-main-menu">
          <ul>
            <li className="footer-main-menu-item-left">개인정보처리방침</li>
            <li className="footer-main-menu-item-left">이용안내</li>
            <li className="footer-main-menu-item-left">사업자정보</li>
            <li className="footer-main-menu-item-left">이용약관</li>
          </ul>
        </div>
        <hr className="footer-hr" />
        <div className="footer-main-bottom">
          <div className="footer-main-info">
            <div className="footer-main-info-company footer-hr-sect">
              <span className="footer-hr-sect-contents">포만감</span>
            </div>
            <p className="footer-main-info-contents">
              사업자등록번호 456-05-00933, 대표자 : 최은성<br />
              통신판매번호: 2019-고양덕양구-0617<br />
              상호명: 포만감, Tel: 0507-1300-6906<br />
              경기도 고양시 일산동구 숲속마을2로 114-3, 1층 101호<br />
              contact@poman.kr
            </p>
            <div className="footer-main-info-copyright">
              © 2021. 포만감 Co. all rights reserved.
            </div>
          </div>
          <div className="footer-main-right">
            <div className="footer-main-sns">
              <div className="footer-main-sns-item" />
              <div className="footer-main-sns-item" />
              <div className="footer-main-sns-item" />
            </div>
            <div className="footer-main-slogan">
              <span>우리는 세상을 포만하게 만든다</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;