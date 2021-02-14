import React from "react";

export default function Sns(props: any) {
  const {
    facebook,
    instagram,
    kakao
  } = props.data;
  return (
    <div className="p-info-sns">
      {facebook
        ? <div className="p-info-sns-item">
            <a
              onClick={() => window.open(facebook, '_blank')}
              className="facebook"
            />
          </div>
        : <></>
      }
      {instagram
        ? <div className="p-info-sns-item">
            <a
              onClick={() => window.open(instagram, '_blank')}
              className="instagram"
            />
          </div>
        : <></>
      }
      <div className="p-info-sns-item">
        <a
          onClick={() => window.open(kakao ? kakao : "http://pf.kakao.com/_xlxbhlj", '_blank')}
          className="kakao"
        />
      </div>
    </div>
  );
}
