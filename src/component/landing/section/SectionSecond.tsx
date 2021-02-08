import React, {Component} from 'react';
import '../../../assets/css/landing/SectionSecond.css';
import {Button} from "react-bootstrap";
import Image from 'react-bootstrap/Image'

class SectionSecond extends Component {
  render() {
    return (
      <div className="l-s-second">
        <ImageContainer />
        <Title />
        <SubTitle />
        <StoryButton />
      </div>
    );
  }
}

// function ImageHelpText(props: any) {
//   return (
//     <div className="l-s-second-image-help">
//       3개월 기준
//     </div>
//   );
// }

function ImageContainer(props: any) {
  return (
    <div className="l-s-second-image-container">
      <Image
        className="l-s-second-image"
        src={"https://poman.kr:9530/api/v1.2/assets/images/stores/1/products/2/1.jpg"}
        alt={"제품"}
        fluid
      />
    </div>
  );
}

function Title(props: any) {
  return (
    <div className="l-s-second-title">
      포만감 프리미엄 서비스로<br/>
      <span className="l-s-second-title-highlight">
        식비를 절약하세요
      </span>
    </div>
  );
}

function SubTitle(props: any) {
  return (
    <div className="l-s-second-subtitle">
      포만감 프리미엄 서비스를 이용하실 경우<br />
      월 평균 20%의 식비를 절감할 수 있습니다
    </div>
  );
}

function StoryButton(props: any) {
  return (
    <div className="l-s-second-button">
      <Button className="l-s-second-button-inner">
        포만감 이야기
      </Button>
    </div>
  );
}

export default SectionSecond;