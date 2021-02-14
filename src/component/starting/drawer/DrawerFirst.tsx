import React, {useState} from 'react';
import '../../../assets/css/starting/drawer/DrawerFirst.css';
import StartingDrawerHeader from "./StartingDrawerHeader";
import StartingDrawerFooter from "./StartingDrawerFooter";
import {Carousel} from "react-bootstrap";
import {BiChevronRight, BiChevronLeft} from "react-icons/bi";

function DrawerFirst(props: any) {

  const datas = [
    {
      title: '포만감 덮밥',
      normalTitle: '5,900원',
      normalSubTitle: '일반 단품 주문 시 (1인 기준)',
      premiumTitle: '4,900원 / 일',
      premiumSubTitle: '프리미엄 서비스 이용 시',
      buttonTitle: '포만감 덮밥',
      imagePath: 'https://poman.kr:9530/api/v1.2/assets/images/stores/1/products/1/1.jpg'
    },
    {
      title: '포만감 도시락',
      normalTitle: '7,900원',
      normalSubTitle: '일반 단품 주문 시 (1인 기준)',
      premiumTitle: '6,900원 / 일',
      premiumSubTitle: '프리미엄 서비스 이용 시',
      buttonTitle: '포만감 도시락',
      imagePath: 'https://poman.kr:9530/api/v1.2/assets/images/stores/1/products/2/1.jpg'
    },
    {
      title: '포만감 샐러드',
      normalTitle: '8,900원',
      normalSubTitle: '일반 단품 주문 시 (1인 기준)',
      premiumTitle: '7,900원 / 일',
      premiumSubTitle: '프리미엄 서비스 이용 시',
      buttonTitle: '포만감 샐러드',
      imagePath: 'https://poman.kr:9530/api/v1.2/assets/images/stores/1/products/3/1.jpg'
    },
  ];

  const {
    step,
    nextStep
  } = props;
  const [canNext, setCanNext] = useState(false);

  const onNext = () => {
    nextStep();
  }

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  function handleSlide(e: any) {
    setCurrentSlideIndex(e);
  }

  return (
    <div className="s-d-first">
      <StartingDrawerHeader
        next
        onNext={onNext}
        totalStep={4}
        currentStep={step}
      />
      <div className="s-d-first-body">
        <CustomCarousel
          datas={datas}
          handleSlide={handleSlide}
        />
        <Info
          data={datas[currentSlideIndex]}
        />
      </div>
      <StartingDrawerFooter
        onNext={onNext}
      >
        <b>{datas[currentSlideIndex].buttonTitle}</b> 선택하기
      </StartingDrawerFooter>
    </div>
  );
}

function Info(props: any) {
  const {
    data
  } = props;
  return (
    <div>
      {/*<div className="s-d-first-body-info-title">*/}
      {/*  {data.title}*/}
      {/*</div>*/}
      <div className="s-d-first-body-info-normal-title">
        {data.normalTitle}
      </div>
      <div className="s-d-first-body-info-normal-subTitle">
        {data.normalSubTitle}
      </div>
      <div className="s-d-first-body-info-premium-title">
        {data.premiumTitle}
      </div>
      <div className="s-d-first-body-info-premium-subtitle">
        {data.premiumSubTitle}
      </div>
    </div>
  );
}

function CustomCarousel(props: any) {
  const {
    datas,
    handleSlide
  } = props;
  return (
    <>
      <Carousel
        nextIcon={
          <BiChevronRight
            size={28}
            color="#999999"
          />
        }
        prevIcon={
          <BiChevronLeft
            size={28}
            color="#999999"
          />
        }
        indicators={false}
        fade={false}
        interval={null}
        onSlide={handleSlide}
      >
        {datas.map((data: any, index: number) => {
          return (
            <Carousel.Item
              key={"key-s-d-carousel-" + index}
            >
              <div className="s-d-first-body-img-container">
                <img src={data.imagePath} />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default DrawerFirst;
