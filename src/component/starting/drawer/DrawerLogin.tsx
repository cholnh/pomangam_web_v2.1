import React from 'react';
import '../../../assets/css/starting/drawer/DrawerLogin.css';

function DrawerLogin(props: any) {
  const {
    step,
    prevStep,
    nextStep
  } = props;
  return (
    <div className="s-d-login">
      <div className="s-d-login-body">
        <div className="s-d-login-info">
          <div className="s-d-login-title">
            포만감의 파트너가 되어주세요!
          </div>
          <div className="s-d-login-subTitle">
            주문과 동시에 로그인
          </div>
        </div>
        <KakaoButton />
        <BasicButton />
      </div>
    </div>
  );
}

function KakaoButton(props: any) {
  return (
    <div className="s-d-login-kakao-btn">
      <div className="s-d-login-kakao-btn-icon" />
      <div className="s-d-login-kakao-btn-title">
        카카오톡으로 로그인
      </div>
    </div>
  );
}

function BasicButton(props: any) {
  return (
    <div className="s-d-login-basic-btn">
      <div className="s-d-login-basic-btn-icon" />
      <div className="s-d-login-basic-btn-title">
        휴대폰 번호로 로그인
      </div>
    </div>
  );
}

export default DrawerLogin;
