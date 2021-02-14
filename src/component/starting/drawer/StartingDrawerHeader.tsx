import React from 'react';
import '../../../assets/css/starting/drawer/StartingDrawer.css';
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

function StartingDrawerHeader(props: any) {
  const DEFAULT_TOTAL_STEP = 4;
  const DEFAULT_CURRENT_STEP = 0;
  const {
    prev,
    next,
    onPrev,
    onNext,
    totalStep,
    currentStep
  } = props;
  return (
    <div className="s-d-header">
      <div
        className={prev ? "s-d-header-prev" : "s-d-header-prev hide"}
        onClick={prev ? onPrev : ()=>{}}
      >
        <BiLeftArrowAlt
          size={28}
          color={prev ? "#999999" : "transparent"}
        />
      </div>
      {totalStep
        ?  <div className="s-d-header-indicator-container">
            <Indicator
              length={totalStep ? totalStep : DEFAULT_TOTAL_STEP}
              current={currentStep ? currentStep : DEFAULT_CURRENT_STEP}
            />
          </div>
        : <></>
      }
      <div
        className={next ? "s-d-header-next" : "s-d-header-next hide"}
        onClick={next ? onNext : ()=>{}}
      >
        <BiRightArrowAlt
          size={28}
          color={next ? "#999999" : "transparent"}
        />
      </div>
    </div>
  );
}

function Indicator(props: any) {
  return (
    <div className="s-d-header-indicator">
      {[...Array(props.length)].map((n, index) => {
        let isActive: boolean = (index === props.current);
        return (
          <div
            key={'key-indicator-' + index}
            className={"s-d-header-indicator-item " + (isActive ? "active" : "") }
          />
        );
      })}
    </div>
  );
}

export default StartingDrawerHeader;
