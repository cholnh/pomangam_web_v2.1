import React, {useState} from 'react';
import '../../../assets/css/starting/SectionFifth.css';
import useWindowDimensions from "../../../assets/js/CustomUtils";
import {Carousel} from "react-bootstrap";

function SectionFifth(props: any) {

  const {width} = useWindowDimensions();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slideLength = 3;

  function handleSlide(e: any) {
    setCurrentSlideIndex(e);
  }

  if(width > 991) {
    return (
      <div className="s-s-fifth">
        <div className="s-s-fifth-container">
          <div className="s-s-fifth-left">
            <Title/>
            <LeftImage/>
          </div>
          <div className="s-s-fifth-right">
            <RightFirstImage/>
            <RightSecondImage/>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="s-s-fifth">
        <Title />
        <Indicator
          current={currentSlideIndex}
          length={slideLength}
        />
        <Carousel
          className="s-s-fifth-carousel"
          nextIcon={false}
          prevIcon={false}
          indicators={false}
          fade={true}
          pause={false}
          onSlide={handleSlide}
        >
          <Carousel.Item>
            <MobileImage />
            <ImgHelp
              title={"매일 2회 위생 점검 및 청소"}
              subTitle={"깨끗한 조리장은 위생에 대한 집착에서 만들어집니다.\n포만감은 가장 깨끗하고 신선한 서비스를 제공하기 위해\n매일 2회씩 위생점검과 조리장 대청소를 실시합니다."}
            />
          </Carousel.Item>
          <Carousel.Item>
            <MobileImage />
            <ImgHelp
              title={"재고는 무조건 당일 처리"}
              subTitle={"포만감 서비스는 최적의 유통 기술을 바탕으로 운영되고 있으며\n재고 폐기율을 5% 미만으로 유지하고 있습니다."}
            />
          </Carousel.Item>
          <Carousel.Item>
            <MobileImage />
            <ImgHelp
              title={"철저한 위생교육"}
              subTitle={"고객님들이 드시는 음식을 만드는 조리사들은 위생관념이 가장 중요합니다.\n포만감은 위생 권고 사항을 바탕으로 철저하게 교육하고 있습니다."}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

function Indicator(props: any) {
  return (
    <div className="s-s-fifth-indicator">
      {[...Array(props.length)].map((n, index) => {
        let isActive: boolean = (index === props.current);
        return (
          <div
            key={'key-indicator-' + index}
            className={"s-s-fifth-indicator-item " + (isActive ? "active" : "") }
          />
        );
      })}
    </div>
  );
}

function MobileImage(props: any) {
  return (
    <div className="s-s-fifth-mobile-img-container">
      <div className="s-s-fifth-mobile-img">

      </div>
    </div>
  );
}

function Title(props: any) {
  return (
    <div>
      <div className="s-s-fifth-left-title">
        포만감만의 특별한<br />
        위생관리 시스템
      </div>
      <div className="s-s-fifth-left-subTitle">
        매일 2회 위생 점검과 무조건 당일처리하는 재료들, <br />
        특별하고 철저한 위생교육으로 <br />고객 여러분의 건강을 책임집니다.
      </div>
    </div>
  );
}

function LeftImage(props: any) {
  return (
    <div className="s-s-fifth-left-first">
      <div className="s-s-fifth-left-img">
        {/*<img src={""} alt={"위생 점검 및 청소"} />*/}
      </div>
      <ImgHelp
        title={"매일 2회 위생 점검 및 청소"}
        subTitle={"깨끗한 조리장은 위생에 대한 집착에서 만들어집니다.\n포만감은 가장 깨끗하고 신선한 서비스를 제공하기 위해\n매일 2회씩 위생점검과 조리장 대청소를 실시합니다."}
      />
    </div>
  );
}

function RightFirstImage(props: any) {
  return (
    <div>
      <div className="s-s-fifth-right-first-img">
        {/*<img src={""} alt={"재고 당일 처리"} />*/}
      </div>
      <ImgHelp
        title={"재고는 무조건 당일 처리"}
        subTitle={"포만감 서비스는 최적의 유통 기술을 바탕으로 운영되고 있으며\n재고 폐기율을 5% 미만으로 유지하고 있습니다."}
      />
    </div>
  );
}

function RightSecondImage(props: any) {
  return (
    <div className="s-s-fifth-right-second">
      <div className="s-s-fifth-right-second-img">
        {/*<img src={""} alt={"위생 교육"} />*/}
      </div>
      <ImgHelp
        title={"철저한 위생교육"}
        subTitle={"고객님들이 드시는 음식을 만드는 조리사들은 위생관념이 가장 중요합니다.\n포만감은 위생 권고 사항을 바탕으로 철저하게 교육하고 있습니다."}
      />
    </div>
  );
}

function ImgHelp(props: any) {
  return (
    <div className="s-s-fifth-img-help">
      <div className="s-s-fifth-img-help-title">
        {props.title}
      </div>
      <div className="s-s-fifth-img-help-subTitle">
        {props.subTitle.split('\n').map((line: string) => {
          return (<span>{line}<br/></span>)
        })}
      </div>
    </div>
  );
}

export default SectionFifth;
