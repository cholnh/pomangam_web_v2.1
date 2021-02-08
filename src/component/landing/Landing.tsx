import React, {Component} from 'react';
import MainLayout from "../_base/MainLayout";
import SectionFirst from "./section/SectionFirst";
import SectionSecond from "./section/SectionSecond";
import SectionThird from "./section/SectionThird";
import SectionFourth from "./section/SectionFourth";
import SectionFifth from "./section/SectionFifth";
import SectionSixth from "./section/SectionSixth";
import LandingBodyBanner from "./section/LandingBodyBanner";

class Landing extends Component {

  render() {
    return (
      <MainLayout
        header
        footer
        canonical={"/"}
      >
        <SectionFirst />
        <SectionSecond />
        <SectionThird />
        <LandingBodyBanner
          to="/start"
          title={
            <span>
              <b>포만감 프리미엄 서비스</b>로 더 많은 혜택을 누려보세요!
            </span>
          }
          button={"서비스 신청하기"}
        />
        <SectionFourth />
        <SectionFifth />
        <SectionSixth />
      </MainLayout>
    );
  }
}

export default Landing;