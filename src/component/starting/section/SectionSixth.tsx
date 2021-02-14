import React, {Component, useState} from 'react';
import '../../../assets/css/starting/SectionSixth.css';
import BgProfile from "../../../assets/images/_poman/nteve/profile.png";
import QuotesWhite from "../../../assets/images/icon/quotes-white.png";
import QuotesGray from "../../../assets/images/icon/quotes-gray.png";
import useWindowDimensions from "../../../assets/js/CustomUtils";
import {Carousel} from "react-bootstrap";

class SectionSixth extends Component {

  render() {

    return (
      <div className="s-s-sixth">
        <div className="s-s-sixth-container">
          <Title />
          <Review />
        </div>
      </div>
    );
  }
}

function Review(props: any) {

  const contents: string =
    `
    포만한 고객님의 리뷰를 적어주세요
    포만한 고객님의 리뷰를 적어주세요
    포만한 고객님의 리뷰를 적어주세요
  `;

  const centerContents: string =
  `
    포만한 고객님의 리뷰를 적어주세요포만한 고객님의 리뷰를 적어주세요
    포만한 고객님의 리뷰를 적어주세요포만한 고객님의 리뷰를 적어주세요
    포만한 고객님의 리뷰를 적어주세요포만한 고객님의 리뷰를 적어주세요
  `;

  const {width} = useWindowDimensions();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slideLength = 3;

  function handleSlide(e: any) {
    setCurrentSlideIndex(e);
  }

  if(width > 991) {
    return (
      <div className="s-s-sixth-review">
        <div className="s-s-sixth-review-left">
          <ReviewItem
            left
            contents={contents}
          />
        </div>
        <div className="s-s-sixth-review-center">
          <ReviewItem
            center
            contents={centerContents}
          />
        </div>
        <div className="s-s-sixth-review-right">
          <ReviewItem
            right
            contents={contents}
          />
        </div>
      </div>
    );
  } else {

    return (
      <div className="s-s-sixth-review">
        <Indicator
          current={currentSlideIndex}
          length={slideLength}
        />
        <Carousel
          className="s-s-sixth-carousel"
          nextIcon={false}
          prevIcon={false}
          indicators={false}
          fade={true}
          pause={false}
          onSlide={handleSlide}
        >
          <Carousel.Item>
            <ReviewItem
              center
              contents={centerContents}
            />
          </Carousel.Item>
          <Carousel.Item>
            <ReviewItem
              center
              contents={centerContents}
            />
          </Carousel.Item>
          <Carousel.Item>
            <ReviewItem
              center
              contents={centerContents}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

function Indicator(props: any) {
  return (
    <div className="s-s-sixth-indicator">
      {[...Array(props.length)].map((n, index) => {
        let isActive: boolean = (index === props.current);
        return (
          <div
            key={'key-indicator-' + index}
            className={"s-s-sixth-indicator-item " + (isActive ? "active" : "") }
          />
        );
      })}
    </div>
  );
}

function ReviewItem(props: any) {
  return (
    <div>
      <div className="s-s-sixth-review-center-bg">
        <img src={props.center ? QuotesWhite : QuotesGray} alt="따옴표" />
        <div className="s-s-sixth-review-center-contents">
          {props.contents.split('\n').map((line: string) => {
            return (<>{line}<br /></>)
          })}
        </div>
      </div>
      <img
        className="s-s-sixth-review-center-profile-img"
        src={BgProfile}
        alt="profile"
      />
      <div className="s-s-sixth-review-center-info">
        <div className="s-s-sixth-review-center-info-title">
          포만이
        </div>
        <div className="s-s-sixth-review-center-info-subtitle">
          삼송 테크노밸리 입주 고객
        </div>
      </div>
    </div>
  );
}

function Title(props: any) {
  return (
    <div>
      <div className="s-s-sixth-title">
        서비스 런칭 한 달 만에 1,000명의 고객분들이 다녀가셨습니다
      </div>
      <div className="s-s-sixth-subTitle">
        포만감 서비스의 생생한 리뷰를 확인해보세요!
      </div>
    </div>
  );
}

export default SectionSixth;
