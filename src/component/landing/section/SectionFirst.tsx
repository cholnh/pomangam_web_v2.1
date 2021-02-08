import React, {Component} from 'react';
import '../../../assets/css/landing/SectionFirst.css';
import {Button} from "react-bootstrap";
import { Link } from 'react-router-dom';

class SectionFirst extends Component {
  render() {
    return (
      <div className="l-s-first">
        <MainTitle />
        <MainButton />
      </div>
    );
  }
}

function MainTitle(props: any) {
  return (
    <div className="l-s-first-title">
      점심시간의 새로운 라이프 스타일<br />
      기업 전문 <span style={{fontWeight: 'bold'}}>런치 딜리버리 서비스</span>
    </div>
  );
}

function MainButton(props: any) {
  return (
    <div className="l-s-first-button">
      <Link to="/start">
        <Button className="l-s-first-button-inner">
          포만감 서비스 시작하기
        </Button>
      </Link>
    </div>
  );
}

export default SectionFirst;