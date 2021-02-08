import React, {Component, useState} from 'react';
import MainLayout from "../MainLayout";
import '../../../assets/css/_base/_poman/poman.css';
import RandomGridImage from "./RandomGridImage";
import { useDencrypt } from "use-dencrypt-effect";

import BgImg1 from '../../../assets/images/_poman/nteve/1.png';
import BgImg2 from '../../../assets/images/_poman/nteve/2.png';
import BgImg3 from '../../../assets/images/_poman/nteve/3.png';
import BgImg4 from '../../../assets/images/_poman/nteve/4.png';
import BgImg5 from '../../../assets/images/_poman/nteve/5.png';
import BgImg6 from '../../../assets/images/_poman/nteve/6.png';
import BgImg7 from '../../../assets/images/_poman/nteve/7.png';
import BgImg8 from '../../../assets/images/_poman/nteve/8.png';
import BgImg9 from '../../../assets/images/_poman/nteve/9.png';
import BgImg10 from '../../../assets/images/_poman/nteve/10.png';

import BgImg11 from '../../../assets/images/_poman/nteve/11.png';
import BgImg12 from '../../../assets/images/_poman/nteve/12.png';
import BgImg13 from '../../../assets/images/_poman/nteve/13.png';
import BgImg14 from '../../../assets/images/_poman/nteve/14.png';
import BgImg15 from '../../../assets/images/_poman/nteve/15.png';
import BgImg16 from '../../../assets/images/_poman/nteve/16.png';
import BgImg17 from '../../../assets/images/_poman/nteve/17.png';
import BgImg18 from '../../../assets/images/_poman/nteve/18.png';
import BgImg19 from '../../../assets/images/_poman/nteve/19.png';
import BgImg20 from '../../../assets/images/_poman/nteve/20.png';

import BgImg21 from '../../../assets/images/_poman/nteve/21.png';
import BgImg22 from '../../../assets/images/_poman/nteve/22.png';
import BgImg23 from '../../../assets/images/_poman/nteve/23.png';
import BgImg24 from '../../../assets/images/_poman/nteve/24.png';
import BgImg25 from '../../../assets/images/_poman/nteve/25.png';
import BgImg26 from '../../../assets/images/_poman/nteve/26.png';
import BgImg27 from '../../../assets/images/_poman/nteve/27.png';
import BgImg28 from '../../../assets/images/_poman/nteve/28.png';
import BgImg29 from '../../../assets/images/_poman/nteve/29.png';
import BgImg30 from '../../../assets/images/_poman/nteve/30.png';
import BgProfile from '../../../assets/images/_poman/nteve/profile.png';

interface Props {
  who: string
}

interface States {
  imagePool: any[],
  isShowIntro: boolean
}

class Poman extends Component<Props, States> {

  constructor(props: any) {
    super(props);
    this.state = {
      imagePool: [],
      isShowIntro: false
    };
  }

  render() {

    const imagePool = [
      BgImg1, BgImg2, BgImg3, BgImg4, BgImg5,
      BgImg6, BgImg7, BgImg8, BgImg9, BgImg10,

      BgImg11, BgImg12, BgImg13, BgImg14, BgImg15,
      BgImg16, BgImg17, BgImg18, BgImg19, BgImg20,

      BgImg21, BgImg22, BgImg23, BgImg24, BgImg25,
      BgImg26, BgImg27, BgImg28, BgImg29, BgImg30
    ];

    const shortText =
      `
      안녕하세요. 9년차 PM/개발자 최낙형입니다.
      현 직장에서는 CTO 로 IT기획, PM 및 개발 업무를 수행하고 있습니다.
      새로운 기술과 그 기술을 이용해 세상을 어떻게 변화시킬지에 대해 관심이 많습니다. 끝.
      `;

    const text =
      `
      안녕하세요. 9년차 PM/개발자 최낙형입니다.
      현 직장에서는 CTO 로 IT기획, PM 및 개발 업무를 수행하고 있습니다.
      새로운 기술과 그 기술을 이용해 세상을 어떻게 변화시킬지에 대해 관심이 많습니다.
      AI, 블록체인, IoT, 클라우드를 포함한 최신 기술을 핀테크/제조업 등에 적용한 경험이 있습니다.
      각종 기술의 장점, 한계, 고려사항, 가용 리소스 등 현재 상황을 종합적으로 고려하여 비즈니스가 요구하는 최선의 결과를 도출하는 것이 제가 잘 할 수 있는 일이라고 생각합니다.
      조직 내에서 Design Thinking, Agile Scrum 등 시장에 대한 민첩한 적응력을 강화하기 위한
      프로세스 개선, 협업 도구의 도입 등 facilitator 활동 경험이 있으며, 이를 통해 동료들과 함께 성장하는 것에 뿌듯함을 느낍니다.  좋은 동료들과 협업하며 함께 성장하고 싶습니다.
      감사합니다.
      `;

    const onIntroduceClicked = (e: any) => {
      this.setState({
        isShowIntro: true
      })
    };

    return (
      <MainLayout
        footer
        canonical={"/nteve"}
      >
        <div className="poman">
          <div className="p-bg">
            <RandomGridImage
              minColumnCount={2}
              maxColumnCount={5}
              maxRowCount={6}
              minHeight={40}
              maxHeight={300}
              maxWidth={250}
              imagePool={imagePool}
            />
            <img
              className="p-profile-img"
              src={BgProfile}
              alt="profile"
            />
          </div>
          <div className="p-info">
            <div className="p-info-name">Choi Nakhyeong,</div>
            <div className="p-info-rank">CTO</div>
            <a href="./nteve">
              <AnimationText text="poman.kr/nteve" />
            </a>
            <Introduce
              text={text}
              maxLine={5}
              isShowIntro={this.state.isShowIntro}
              onShowClicked={onIntroduceClicked}
            />
            <Career />
            <Sns />
          </div>
        </div>
      </MainLayout>
    );
  }
}

function Career(props: any) {
  return (
    <div>

    </div>
  );
}

function Sns(props: any) {
  return (
    <div className="p-info-sns">
      <a
        href="https://www.facebook.com/pomangam"
        className="facebook"
      />
      <a
        href="https://www.instagram.com/pomangam_official"
        className="instagram"
      />
      <a
        href="http://pf.kakao.com/_xlxbhlj"
        className="kakao"
      />
    </div>
  );
}

function Introduce(props: any) {

  const {
    isShowIntro,
    onShowClicked,
    maxLine
  } = props;

  const text = props.text.trimEnd().trimStart();
  let textLines = text.split('\n');
  let isLong = false;

  if(!isShowIntro && textLines.length > maxLine) {
    isLong = true;
    while(textLines.length > maxLine) {
      textLines.pop();
    }
  }
  let isShow = isShowIntro || (!isLong);

  return (
    <div className="p-info-introduce">
      <p className="p-info-introduce-text">
        {textLines.map((line: string) => {
          return (<span>{line}<br/></span>)
        })}
      </p>
      {isShow
        ? <hr />
        : <Hide onShowClicked={onShowClicked} />
      }
    </div>
  );
}

function Hide(props: any) {

  const onClick = props.onShowClicked;

  return (
    <div
      className="p-info-introduce-hide"
      onClick={onClick}
    >
      <div className="p-info-introduce-hr-sect">
        <span className="p-info-introduce-hr-sect-contents">더보기</span>
      </div>
    </div>
  );
}

function AnimationText(props: any) {
  const { result, dencrypt } = useDencrypt();
  setTimeout(() => {
    dencrypt(props.text);
  }, 1000);

  return (
    <div className="p-animation-text">
      {result}
    </div>
  );
}

export default Poman;