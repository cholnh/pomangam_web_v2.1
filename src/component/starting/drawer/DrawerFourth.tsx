import React, {useState} from 'react';
import StartingDrawerHeader from "./StartingDrawerHeader";
import StartingDrawerFooter from "./StartingDrawerFooter";
import '../../../assets/css/starting/drawer/DrawerFourth.css';
import { useHistory } from 'react-router-dom';

function DrawerFourth(props: any) {
  const history = useHistory();
  const {
    step,
    prevStep,
    nextStep
  } = props;

  const [selected, setSelected] = useState(2);
  const weeks = [
    {ko: '1주', val: 1},
    {ko: '2주', val: 2},
    {ko: '4주', val: 4},
    {ko: '8주', val: 8},
    {ko: '12주', val: 12},
  ];

  const onNext = () => {
    let isLogin = false;
    if(isLogin) {
      history.push('/payment');
    } else {
      nextStep();
    }
  };

  const toggleWeek = (index: number) => {
    setSelected(index);
  };

  return (
    <div className="s-d-fourth">
      <StartingDrawerHeader
        prev
        onPrev={prevStep}
        totalStep={4}
        currentStep={step}
      />
      <div className="s-d-fourth-body">
        <Week
          weeks={weeks}
          selected={selected}
          toggleWeek={toggleWeek}
        />
        <Info />
      </div>
      <StartingDrawerFooter
        onNext={onNext}
      >
        <b>완료</b>
      </StartingDrawerFooter>
    </div>
  );
}

function Week(props: any) {
  const {
    weeks,
    selected,
    toggleWeek
  } = props;
  return (
    <div className="s-d-fourth-body-week">
      {weeks.map((week: any, index: number) => {
        let active = selected == index;
        return (
          <div
            key={"key-s-d-fourth-body-week-item-"+index}
            className={active
              ? "s-d-fourth-body-week-item active"
              : "s-d-fourth-body-week-item"
            }
            onClick={() => toggleWeek(index)}
          >
            {weeks[index].ko}
          </div>
        );
      })}
      <div className="s-d-fourth-body-week-head">
        BEST !
      </div>
    </div>
  );
}

function Info(props: any) {
  return (
    <div className="s-d-fourth-body-info">
      선택된 <b>기간 동안</b> 배송됩니다.
    </div>
  );
}

export default DrawerFourth;
