import React from 'react';
import '../../../assets/css/starting/SectionFirst.css'
import {Button, Carousel, Col, Row} from "react-bootstrap";
import useWindowDimensions from "../../../assets/js/CustomUtils";
import {Link} from "react-router-dom";

function SectionFirst(props: any) {
  return (
    <div className="s-s-first">
      <Container toggleDrawer={props.toggleDrawer} />
    </div>
  );
}

function Container(props: any) {
  const {width} = useWindowDimensions();

  if(width > 991) {
    return (
      <>
        <Title />
        <SubTitle />
        <StartButton toggleDrawer={props.toggleDrawer} />
        <StartButtonHelp toggleDrawer={props.toggleDrawer} />
        <CustomGrid />
      </>
    );
  } else {
    return (
      <>
        <Title />
        <SubTitle />
        <CustomCarousel />
        <StartButton toggleDrawer={props.toggleDrawer} />
        <StartButtonHelp toggleDrawer={props.toggleDrawer} />
      </>
    );
  }
}

function Title(props: any) {
  return (
    <div className="s-s-first-title">
      포만감 딜리버리 메뉴
    </div>
  );
}

function SubTitle(props: any) {
  return (
    <div className="s-s-first-subtitle">
      점심 시간에 무엇을 먹을지 생각하지 않아도, <br />
      매일 정확한 시간에 오피스 푸드가 배송됩니다
    </div>
  );
}

function StartButton(props: any) {
  return (
    <div id="target" className="s-s-first-button">
      <Button
        className="s-s-first-button-inner"
        onClick={props.toggleDrawer()}
      >
        서비스 신청하기
      </Button>
    </div>
  );
}

function StartButtonHelp(props: any) {
  return (
    <div
      className="s-s-first-button-help"
      onClick={props.toggleDrawer()}
    >
      오늘은 단품으로 주문할게요
    </div>
  );
}

function CustomGrid(props: any) {
  return (
    <div className="s-s-first-grid">
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
          <div className="s-s-first-grid-help">
            <div>
              <hr className="s-s-first-grid-help-hr" />
              <span className="s-s-first-grid-help-text">일반 단품 주문 시</span>
            </div>
            <div style={{marginTop: "5px"}}>
              <hr className="s-s-first-grid-help-hr highlight" />
              <span className="s-s-first-grid-help-text highlight">프리미엄 서비스 이용 시</span>
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
      className="s-s-first-carousel"
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
    <Col lg className="s-s-first-grid-item">
      <div style={{display: "inline-block"}}>
        <img
          className="s-s-first-grid-item-image d-block"
          src={imagePath}
          alt={title}
        />
      </div>
      <div className="s-s-first-grid-item-title">
        {title}
      </div>
      <div className="s-s-first-grid-item-price">
        {price} {mobile
        ?
          <div className="s-s-first-grid-help">
            <hr className="s-s-first-grid-help-hr" />
            <span className={"s-s-first-grid-item-sale-help"}>일반단품</span>
          </div>
        : <></>
      }
      </div>
      <div className="s-s-first-grid-item-sale">
        {salePrice} / 일 {mobile
          ?
            <div className="s-s-first-grid-help">
              <hr className="s-s-first-grid-help-hr highlight" />
              <span className={"s-s-first-grid-item-sale-help"}>프리미엄</span>
            </div>
          : <></>
        }
      </div>
      {children}
    </Col>
  );
}

export default SectionFirst;
