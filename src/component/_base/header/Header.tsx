import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import '../../../assets/css/_base/Header.css';
import logo from "../../../assets/images/logo/logo.png";

function Header(props: any) {

  /*
   * 스크롤 감지하여 Header Hide
   */
  const [hide, setHide] = useState(false);
  const [pageY, setPageY] = useState(0);
  const documentRef = useRef(document);
  const handleScroll = () => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const hide = pageYOffset !== 0 && deltaY >= 0;
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
        <div className="header-main-icon">
          <img src={logo} alt={"포만감"} width={100} height={30} />
        </div>
        {!props.isOnlyIcon
          ? <div className="header-main-menu">
              <div className="header-main-menu-text">
                <MenuItem to={"/start"} active>
                  <div style={{
                    display: 'inline-block',
                    borderBottom: '2px solid #ff4500'
                  }}>
                    시작하기
                  </div>
                </MenuItem>
                <MenuItem to={"/"}>식단표</MenuItem>
                <MenuItem to={"/"}>포만감 이야기</MenuItem>
                <MenuItem to={"/"}>고객센터</MenuItem>
              </div>
            </div>
          : <></>
        }
        {!props.isOnlyIcon
          ? <div className="header-main-login">
              <div className="header-main-menu-text">
                <Link to={"/"}><span>로그인</span></Link>
                <Link to={"/"}><span>마이페이지</span></Link>
              </div>
            </div>
          : <></>
        }
      </div>
    </header>
  );
}

function MenuItem(props: any) {
  const isActive: boolean = props.active;
  const className = "header-main-menu-list-item" +
    (isActive ? " active" : "");
  const to = props.to;

  return (
    <Link to={to}>
      <span className={className}>
        {props.children}
      </span>
    </Link>
  );
}

export default Header;
