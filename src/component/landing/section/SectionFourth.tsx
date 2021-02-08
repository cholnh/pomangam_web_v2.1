import React, {Component} from 'react';
import '../../../assets/css/landing/SectionFourth.css'
import {Col, Row} from "react-bootstrap";

class SectionFourth extends Component {
  render() {
    return (
      <div className="l-s-fourth">
        <Title />
        <SubTitle />
        <Grid />
      </div>
    );
  }
}

function Title(props: any) {
  return (
    <div className="l-s-fourth-title">
      포만감 프리미엄 서비스,
    </div>
  );
}

function SubTitle(props: any) {
  return (
    <div className="l-s-fourth-subtitle">
      한 번 사용해보면 정말 편리합니다
    </div>
  );
}

function Grid(props: any) {
  return (
    <div className="l-s-fourth-grid">
      <Row>
        <GridItem
          contents={
            <p>
              포만감을 이용한 뒤로, 점심시간이 기다려져요.<br />
              호불호 없는 식단 구성과 다채로운 메뉴 덕분에<br />
              회사에서도 건강을 챙길 수 있게 되었습니다.
            </p>
          }
          userName={"고O형"}
          userType={
            <span style={{color: "#ff4500"}}>
              포만감 프리미엄 회원
            </span>
          }
        />
        <GridItem
          contents={
            <p>
              포만감을 이용한 뒤로, 점심시간이 기다려져요.<br />
              호불호 없는 식단 구성과 다채로운 메뉴 덕분에<br />
              회사에서도 건강을 챙길 수 있게 되었습니다.
            </p>
          }
          userName={"고O형"}
          userType={
            <span style={{color: "#ff4500"}}>
              포만감 프리미엄 회원
            </span>
          }
        />
        <GridItem
          contents={
            <p>
              포만감을 이용한 뒤로, 점심시간이 기다려져요.<br />
              호불호 없는 식단 구성과 다채로운 메뉴 덕분에<br />
              회사에서도 건강을 챙길 수 있게 되었습니다.
            </p>
          }
          userName={"고O형"}
          userType={
            <span style={{color: "#767676"}}>
              포만감 일반 고객
            </span>
          }
        />
      </Row>
    </div>
  );
}

function GridItem(props: any) {

  const {
    contents,
    userName,
    userType
  } = props;

  return (
    <Col lg className="l-s-fourth-grid-item">
      <div className="l-s-fourth-grid-item-contents">
        {contents}
      </div>
      <div className="l-s-fourth-grid-item-bottom">
        <div className="l-s-fourth-grid-item-name">
          <span style={{color: "#ff4500"}}>{userName}</span>님
        </div>
        <div className="l-s-fourth-grid-item-vr" />
        <div className="l-s-fourth-grid-item-type">
          {userType}
        </div>
      </div>
    </Col>
  );
}

export default SectionFourth;