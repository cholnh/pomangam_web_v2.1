import useWindowDimensions from "../../assets/js/CustomUtils";
import {Button} from "react-bootstrap";
import React from "react";

export default function HeaderBanner(props: any) {
  const {width} = useWindowDimensions();
  return (
    <div className="header-banner" onClick={props.toggleDrawer()}>
      <div className="header-banner-container">
        <div className="header-banner-title">
          {width > 768
            ? "딱 2주만 먼저 체험해보세요."
            : <span
              style={{fontWeight: 'bold'}}
            >
              2주 체험 시작하기
          </span>
          }
        </div>
        {width > 768
          ? <div className="header-banner-button">
            <Button
              className="header-banner-button-inner"
              onClick={props.toggleDrawer()}
            >
              2주 체험 시작하기
            </Button>
          </div>
          : <></>
        }
      </div>
    </div>
  );
}
