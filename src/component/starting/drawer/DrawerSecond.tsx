import React, {useState} from 'react';
import '../../../assets/css/starting/drawer/DrawerSecond.css';
import StartingDrawerHeader from "./StartingDrawerHeader";
import StartingDrawerFooter from "./StartingDrawerFooter";
import {BiMinus, BiPlus} from "react-icons/bi";

const DEFAULT_INITIAL_COUNT = 1;
const DEFAULT_MINIMUM_COUNT = 1;

function DrawerSecond(props: any) {
  const {
    step,
    prevStep,
    nextStep
  } = props;
  const [count, setCount] = useState(DEFAULT_INITIAL_COUNT);
  const plus = () => {
    setCount(count + 1);
    reset();
  };
  const minus = () => {
    if(count <= DEFAULT_MINIMUM_COUNT) return;
    setCount(count - 1);
    reset();
  };
  const handleChange = (e: any) => {
    if(e?.target?.value) {
      let n = parseInt(e.target.value);
      setCount(n >= 9999 ? 9999 : n);
      reset();
    } else {
      setCount(0);
    }
  }
  const onNext = () => {
    if(count <= 0) {
      let dom = document.getElementById('warningTarget');
      if(dom) {
        dom.style.display = 'block';
      }
      document.getElementById('inputTarget')?.focus();
      return;
    }
    nextStep();
  };
  const reset = () => {
    let dom = document.getElementById('warningTarget');
    if(dom) {
      dom.style.display = 'none';
    }
  }
  return (
    <div className="s-d-second">
      <StartingDrawerHeader
        next
        prev
        onPrev={prevStep}
        onNext={onNext}
        totalStep={4}
        currentStep={step}
      />
      <div className="s-d-second-body">
        <Counting
          count={count}
          onLeft={minus}
          onRight={plus}
          handleChange={handleChange}
        />
        <Info />
      </div>
      <StartingDrawerFooter
        onNext={onNext}
      >
        <b>다음</b>
      </StartingDrawerFooter>
    </div>
  );
}

function Counting(props: any) {
  const {
    count,
    onLeft,
    onRight,
    handleChange
  } = props;
  return (
    <div className="s-d-second-body-counting">
      <div
        className="s-d-second-body-counting-left"
        onClick={onLeft}
      >
        <BiMinus
          size={25}
        />
      </div>
      <div className="s-d-second-body-counting-center">
        <input
          id="inputTarget"
          value={count}
          onChange={handleChange}
          inputMode="numeric"
        />
      </div>
      <div
        className="s-d-second-body-counting-right"
        onClick={onRight}
      >
        <BiPlus
          size={25}
        />
      </div>
    </div>
  );
}

function Info(props: any) {
  return (
    <div className="s-d-second-body-info">
      <b>수량</b>을 입력해주세요.
      <Warning />
    </div>
  );
}

function Warning(props: any) {
  return (
    <div
      id="warningTarget"
      className="s-d-second-body-warning"
    >
      최소 1개부터 주문이 가능해요!
    </div>
  );
}

export default DrawerSecond;
