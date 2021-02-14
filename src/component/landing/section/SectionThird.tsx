import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import Img from '../../../assets/images/landing-1.png';
import '../../../assets/css/landing/SectionThird.css';

interface Props {
  data: any[]
}

interface States {
  currentSlideIndex: number,
  data: any[]
}

class SectionThird extends Component<Props, States> {

  constructor(props: any) {
    super(props);
    this.state = {
      currentSlideIndex: 0,
      data: this.props.data
    };
    this.handleSlide = this.handleSlide.bind(this);
  }

  handleSlide(e: any) {
    this.setState({
      currentSlideIndex: e
    });
  }

  render() {

    const info = this.state.data[this.state.currentSlideIndex];
    const currentSlideIndex = this.state.currentSlideIndex;
    const slideLength = this.state.data.length;

    return (
      <div className="l-s-third">
        <Carousel
          interval={3000}
          indicators={false}
          prevIcon={false}
          nextIcon={<div className="l-s-third-next-button" />}
          pause={false}
          fade={true}
          onSlide={this.handleSlide}
        >
          {this.state.data.map(item => (
            <Carousel.Item
              key={'key-slide'+item.idx}
            >
              <img
                className="d-block w-100"
                src={item.imagePath}
                alt={'slide'+item.idx}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <Info
          info={info}
          currentSlideIndex={currentSlideIndex}
          slideLength={slideLength}
        />
      </div>
    );
  }
}

function Info(props: any) {

  const {
    title1,
    title2,
    subTitle,
    description1,
    description2
  } = props.info;
  const {
    currentSlideIndex,
    slideLength
  } = props;

  return (
    <div className="l-s-third-info">
      <div className="l-s-third-info-subtitle">
        {subTitle}
      </div>
      <div className="l-s-third-info-title">
        {title1}<br />
        <span style={{fontWeight: "bold"}}>{title2}</span>
      </div>
      <div className="l-s-third-info-description">
        {description1}<br />
        {description2}
      </div>
      <div className="l-s-third-indicator">
        {[...Array(slideLength)].map((n, index) => {
          let isActive: boolean = (index === currentSlideIndex);
          return (
            <div
              key={'key-indicator-' + index}
              className={"l-s-third-indicator-item " + (isActive ? "active" : "") }
            />
          );
        })}
      </div>
    </div>
  );
}

export default SectionThird;
