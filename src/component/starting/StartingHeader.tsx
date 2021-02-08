import React, { useState, useEffect, useRef } from 'react'
import '../../assets/css/_base/Header.css';
import logo from "../../assets/images/logo.png";

interface Props {
  hideTargetId: string
}
function StartingHeader(props: Props) {

  /*
   * 스크롤 감지하여 Header Hide
   */
  let threshold = 300;
  let hideTarget = document.getElementById(props.hideTargetId);
  if(hideTarget != null) {
    threshold = hideTarget.getBoundingClientRect().top + window.pageYOffset; // 절대 Y좌표
  }
  const [hide, setHide] = useState(true);
  const [pageY, setPageY] = useState(0);
  const documentRef = useRef(document);
  const handleScroll = () => {
    const { pageYOffset } = window;
    const hide = pageYOffset === 0 || pageYOffset <= threshold; // target 좌표에 scroll 이 다다르면 hide

    setHide(hide);
    setPageY(pageYOffset);
  }
  useEffect(() => {
    documentRef.current.addEventListener('scroll', handleScroll);
    return () => documentRef.current.removeEventListener('scroll', handleScroll);
  }, [pageY]);

  return (
    <header className={(hide && 'header-up header') || 'header'}>
      <div className="header-main">
        <div className="header-main-menu">
          <img className="header-main-icon" src={logo} alt={"포만감"} />
        </div>
        <div className="header-main-login header-main-menu-text">

        </div>
      </div>
    </header>
  );
}

export default StartingHeader;