import React from 'react';
import '../../../assets/css/starting/SectionSeventh.css';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

function SectionSeventh(props: any) {
  return (
    <div className="s-s-seventh">
      <div className="s-s-seventh-container">
        <StartButton toggleDrawer={props.toggleDrawer} />
        <StartButtonHelp toggleDrawer={props.toggleDrawer} />
      </div>
    </div>
  );
}

function StartButton(props: any) {
  return (
    <div className="s-s-seventh-button">
      <Button
        className="s-s-seventh-button-inner"
        onClick={props.toggleDrawer()}
      >
        프리미엄 서비스 신청하기
      </Button>
    </div>
  );
}

function StartButtonHelp(props: any) {
  return (
    <div
      className="s-s-seventh-button-help"
      onClick={props.toggleDrawer()}
    >
      오늘은 단품으로만 구매할래요
    </div>
  );
}

export default SectionSeventh;
