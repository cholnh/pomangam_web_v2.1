import React, {Component} from 'react';
import MainLayout from "../_base/layout/MainLayout";
import SectionFirst from "./section/SectionFirst";
import SectionSecond from "./section/SectionSecond";
import SectionThird from "./section/SectionThird";
import SectionFourth from "./section/SectionFourth";
import SectionFifth from "./section/SectionFifth";
import SectionSixth from "./section/SectionSixth";
import LandingBodyBanner from "./section/LandingBodyBanner";
import Img from "../../assets/images/landing-1.png";

class Landing extends Component {
  data = [
    {
      idx: 1,
      subTitle: "점심시간을 더욱 탄력적으로",
      title1: "11시 20분에 주문해도",
      title2: "12까지 정시배송",
      description1: "포만감의 프리미엄 서비스는 다각화된 배달시스템으로",
      description2: "서비스 지역 내 어디서나 정시에 배송받으실 수 있습니다.",
      imagePath: Img

    },
    {
      idx: 2,
      subTitle: "남은 음식물 처리, 어떡하지?",
      title1: "도시락 용기는 물론,",
      title2: "남은 음식물 회수 처리까지",
      description1: "포만감 프리미엄 서비스는 식사를 하신 후 남아있는 용기는 물론,",
      description2: "남겨져 있는 음식물 처리까지 모두 회수하여 처리하는 원케어 서비스를 제공해드립니다.",
      imagePath: Img
    },
    {
      idx: 3,
      subTitle: "식비 정산도 간단하게, 식비를 효율적으로",
      title1: "동가격 대 최고의 퀄리티,",
      title2: "포만감 프리미엄 서비스",
      description1: "고객 만족도 87%, 식비 예산 20% 절감 효과까지",
      description2: "포만감 프리미엄 서비스로 무궁무진한 혜택을 누려보세요.",
      imagePath: Img
    },
    {
      idx: 4,
      subTitle: "음식이 도착할 때 까지 따뜻할 수 있게",
      title1: "포만감 도시락",
      title2: "보온 집중 케어 서비스",
      description1: "이제 더 이상은 식은 밥 드시지 마세요. 포만감 프리미엄의 보온 집중 케어 서비스는",
      description2: "조리 과정부터 음식이 도착하는 순간까지 따뜻하게 배송해드립니다.",
      imagePath: Img
    }
  ];

  render() {
    return (
      <MainLayout
        header
        footer
        canonical={"/"}
      >
        <SectionFirst />
        <SectionSecond />
        <SectionThird data={this.data} />
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
