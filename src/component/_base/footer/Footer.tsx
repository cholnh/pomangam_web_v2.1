import React from 'react';
import '../../../assets/css/_base/Footer.css';
import FooterTail from "./FooterTail";

function Footer(props: any) {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-main-bottom">
          <div className="footer-main-info">
            <div className="footer-main-info-company footer-hr-sect">
              <span className="footer-hr-sect-contents">포만감</span>
            </div>
            <div className="footer-main-info-container">
              <div className="footer-main-info-item">
                <span className="footer-main-info-item-key">대표자</span>
                <span className="footer-main-info-item-value">최은성</span>
              </div>
              <div className="footer-main-info-item">
                <span className="footer-main-info-item-key">Tel</span>
                <span className="footer-main-info-item-value">0507-1300-6906</span>
              </div>
              <div className="footer-main-info-item">
                <span className="footer-main-info-item-key">E-mail</span>
                <span className="footer-main-info-item-value">contact@poman.kr</span>
              </div>
              <div className="footer-main-info-item">
                <span className="footer-main-info-item-key">주소지</span>
                <span className="footer-main-info-item-value">경기도 고양시 일산동구 숲속마을2로 114-3, 1층 101호</span>
              </div>
              <div className="footer-main-info-item">
                <span className="footer-main-info-item-key">사업자등록번호</span>
                <span className="footer-main-info-item-value">546-05-00933</span>
              </div>
              <div className="footer-main-info-item">
                <span className="footer-main-info-item-key">통신판매번호</span>
                <span className="footer-main-info-item-value">2019-고양덕양구-0617</span>
              </div>
            </div>
          </div>
          <div className="footer-main-right">
            <div className="footer-main-sns">
              <div className="footer-main-sns-item" />
              <div className="footer-main-sns-item" />
              <div className="footer-main-sns-item" />
            </div>
          </div>
        </div>
      </div>
     <FooterTail />
    </footer>
  );
}

export default Footer;
