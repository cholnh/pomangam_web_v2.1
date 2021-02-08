import React, {Component} from 'react';
import '../../../assets/css/landing/SectionSixth.css';
import {Button, Col, Row} from "react-bootstrap";

class SectionSixth extends Component {
  render() {
    return (
      <div className="l-s-sixth">
        <div className="l-s-sixth-grid">
          <Row>
            <Col md={7}>
              <SubTitle />
              <Title />
              <Description />
              <CarteButton />
            </Col>
            <Col md={5} />
          </Row>
        </div>
      </div>
    );
  }
}

function SubTitle(props: any) {
  return (
    <div className="l-s-sixth-info-subtitle">
      식단 전문 큐레이터들의 정성을 담아 만든
    </div>
  );
}

function Title(props: any) {
  return (
    <div className="l-s-sixth-info-title">
      포만감 전용
      <span> 식단표</span>
    </div>
  );
}

function Description(props: any) {
  return (
    <div className="l-s-sixth-info-description">
      포만감은 식단 전문 큐레이터들과 함께<br />
      고객 평점이 높은 메뉴를 토대로<br />
      다양한 식단을 매일매일 제공하기 위해 노력하고 있습니다.
    </div>
  );
}

function CarteButton(props: any) {
  return (
    <div className="l-s-sixth-info-button">
      <Button className="l-s-sixth-info-button-inner">
        식단표 보러가기
      </Button>
    </div>
  );
}

export default SectionSixth;