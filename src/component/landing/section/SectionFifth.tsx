import React, {Component} from 'react';
import '../../../assets/css/landing/SectionFifth.css'
import {Button, Carousel, Col, Row} from "react-bootstrap";
import useWindowDimensions from "../../../assets/js/CustomUtils";
import {Link} from "react-router-dom";

class SectionFifth extends Component {
  render() {
    return (
      <div className="l-s-fifth">
        <Container />
      </div>
    );
  }
}

function Container(props: any) {
  const {width} = useWindowDimensions();

  if(width > 991) {
    return (
      <>
        <Title />
        <SubTitle />
        <StartButton />
        <StartButtonHelp />
        <CustomGrid />
      </>
    );
  } else {
    return (
      <>
        <Title />
        <SubTitle />
        <CustomCarousel />
        <StartButton />
        <StartButtonHelp />
      </>
    );
  }
}

function Title(props: any) {
  return (
    <div className="l-s-fifth-title">
      포만감 딜리버리 메뉴
    </div>
  );
}

function SubTitle(props: any) {
  return (
    <div className="l-s-fifth-subtitle">
      매일 하는 점심 메뉴 걱정, 이제 그만하세요!<br />
      매일매일 바뀌는 포만감이 해결해드릴게요.
    </div>
  );
}

function StartButton(props: any) {
  return (
    <div className="l-s-fifth-button">
      <Link to="/start">
        <Button className="l-s-fifth-button-inner">
          포만감 서비스 신청하기
        </Button>
      </Link>
    </div>
  );
}

function StartButtonHelp(props: any) {
  return (
    <div className="l-s-fifth-button-help">
      오늘은 단품으로 주문할게요
    </div>
  );
}

function CustomGrid(props: any) {
  return (
    <div className="l-s-fifth-grid">
      <Row>
        <GridItem
          imagePath="https://poman.kr:9530/api/v1.2/assets/images/stores/1/products/1/1.jpg"
          title="포만감 덮밥"
          price="5,000원"
          salePrice="4,000원"
        />
        <GridItem
          imagePath="https://poman.kr:9530/api/v1.2/assets/images/stores/1/products/2/1.jpg"
          title="포만감 도시락"
          price="7,900원"
          salePrice="6,900원"
        />
        <GridItem
          imagePath="https://poman.kr:9530/api/v1.2/assets/images/stores/1/products/3/1.jpg"
          title="포만감 샐러드"
          price="9,900원"
          salePrice="8,900원"
        >
          <div className="l-s-fifth-grid-help">
            <div>
              <hr className="l-s-fifth-grid-help-hr" />
              <span className="l-s-fifth-grid-help-text">일반 단품 주문 시</span>
            </div>
            <div style={{marginTop: "5px"}}>
              <hr className="l-s-fifth-grid-help-hr highlight" />
              <span className="l-s-fifth-grid-help-text highlight">프리미엄 서비스 이용 시</span>
            </div>
          </div>
        </GridItem>
      </Row>
    </div>
  );
}

function CustomCarousel(props: any) {
  return (
    <Carousel
      className="l-s-fifth-carousel"
      nextIcon={false}
      prevIcon={false}
      indicators={false}
      fade={true}
      pause={false}
    >
      <Carousel.Item>
        <GridItem
          imagePath="https://poman.kr:9530/api/v1.2/assets/images/stores/1/products/1/1.jpg"
          title="포만감 덮밥"
          price="5,000원"
          salePrice="4,000원"
          mobile
        />
      </Carousel.Item>
      <Carousel.Item>
        <GridItem
          imagePath="https://poman.kr:9530/api/v1.2/assets/images/stores/1/products/2/1.jpg"
          title="포만감 도시락"
          price="7,900원"
          salePrice="6,900원"
          mobile
        />
      </Carousel.Item>
      <Carousel.Item>
        <GridItem
          imagePath="https://poman.kr:9530/api/v1.2/assets/images/stores/1/products/3/1.jpg"
          title="포만감 샐러드"
          price="9,900원"
          salePrice="8,900원"
          mobile
        />
      </Carousel.Item>
    </Carousel>
  );
}

function GridItem(props: any) {

  const {
    imagePath,
    title,
    price,
    salePrice,
    mobile,
    children
  } = props;

  return (
    <Col lg className="l-s-fifth-grid-item">
      <div style={{display: "inline-block"}}>
        <img
          className="l-s-fifth-grid-item-image d-block"
          src={imagePath}
          alt={title}
        />
      </div>
      <div className="l-s-fifth-grid-item-title">
        {title}
      </div>
      <div className="l-s-fifth-grid-item-price">
        {price} / 일 {mobile
        ?
          <div className="l-s-fifth-grid-help">
            <hr className="l-s-fifth-grid-help-hr" />
            <span className={"l-s-fifth-grid-item-sale-help"}>일반단품</span>
          </div>
        : <></>
      }
      </div>
      <div className="l-s-fifth-grid-item-sale">
        {salePrice} {mobile
          ?
            <div className="l-s-fifth-grid-help">
              <hr className="l-s-fifth-grid-help-hr highlight" />
              <span className={"l-s-fifth-grid-item-sale-help"}>프리미엄</span>
            </div>
          : <></>
        }
      </div>
      {children}
    </Col>
  );
}

export default SectionFifth;