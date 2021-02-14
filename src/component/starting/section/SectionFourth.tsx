import React, {Component} from 'react';
import '../../../assets/css/starting/SectionFourth.css'
import {Col, Row} from "react-bootstrap";

class SectionFourth extends Component {
  render() {
    return (
      <div className="s-s-fourth">
        <Title />
        <SubTitle />
        <hr className="s-s-fourth-hr" />
        <Grid />
      </div>
    );
  }
}

function Title(props: any) {
  return (
    <div className="s-s-fourth-title">
      프리미엄 서비스,
    </div>
  );
}

function SubTitle(props: any) {
  return (
    <div className="s-s-fourth-subtitle">
      걱정하지 마세요!
    </div>
  );
}

function Grid(props: any) {
  return (
    <div className="s-s-fourth-grid">
      <Row>
        <GridItem
          title={"마음대로 결제되지 않아요"}
          subTitle={"프리미엄 서비스가 종료되기 \n7일 전에 알려드릴게요."}
        />
        <GridItem
          title={"원하는 날짜를 선택할 수 있어요"}
          subTitle={"원하는 날짜도, 원하는 기간도 \n자유롭게 선택할 수 있어요."}
        />
        <GridItem
          title={"포만감 회원을 위한 특별 혜택"}
          subTitle={"결제마다 적립되는 포만감 포인트부터 \n포만감 전용 티켓까지!"}
        />
      </Row>
    </div>
  );
}

function GridItem(props: any) {

  const {
    title,
    subTitle,
  } = props;

  return (
    <Col lg className="s-s-fourth-grid-item">
      <div className="s-s-fourth-grid-item-title">
        {title}
      </div>
      <div className="s-s-fourth-grid-item-subTitle">
        {subTitle.split('\n').map((line: string) => {
          return (<span>{line}<br/></span>)
        })}
      </div>
    </Col>
  );
}

export default SectionFourth;
