import React, {useState} from 'react';
import StartingDrawerHeader from "./StartingDrawerHeader";
import StartingDrawerFooter from "./StartingDrawerFooter";
import '../../../assets/css/starting/drawer/DrawerThird.css';
import {FiCheck} from "react-icons/fi";

function DrawerThird(props: any) {

  const {
    step,
    prevStep,
    nextStep
  } = props;

  const [dayOfWeek, setDayOfWeek] = useState({
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true
  });

  const toggleDayOfWeek = (day: string) => {
    let dom = document.getElementById('warningTarget');
    if(dom) {
      dom.style.display = 'none';
    }
    setDayOfWeek({ ...dayOfWeek, [day]: !isActive(dayOfWeek, day)});
  }

  const onNext = () => {
    let isSelected = false;
    for (let day in dayOfWeek) {
      if(isActive(dayOfWeek, day)) {
        isSelected = true;
        break;
      }
    }
    if(!isSelected) {
      let dom = document.getElementById('warningTarget');
      if(dom) {
        dom.style.display = 'block';
      }
      return;
    }
    nextStep();
  };

  return (
    <div className="s-d-third">
      <StartingDrawerHeader
        next
        prev
        onPrev={prevStep}
        onNext={onNext}
        totalStep={4}
        currentStep={step}
      />
      <div className="s-d-third-body">
        <DayOfWeek
          dayOfWeek={dayOfWeek}
          toggleDayOfWeek={toggleDayOfWeek}
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

function DayOfWeek(props: any) {
  const {
    dayOfWeek,
    toggleDayOfWeek
  } = props;
  return (
    <div className="s-d-third-body-week">
      {['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
        .map((day: any, index: number) => {
        let active = isActive(dayOfWeek, day);
        return (
          <div
            key={"key-s-d-third-body-week-item-"+index}
            className={active
              ? "s-d-third-body-week-item active"
              : "s-d-third-body-week-item"
            }
            onClick={() => toggleDayOfWeek(day)}
          >
            {text(day)}
            {active
              ? <div className="s-d-third-body-week-check">
                  <FiCheck
                    size={30}
                  />
                </div>
              : <></>
            }
          </div>
        );
      })}
    </div>
  );
}

function Info(props: any) {
  return (
    <div className="s-d-third-body-info">
      선택된 <b>요일</b>에 배송됩니다.
      <Warning />
    </div>
  );
}

function Warning(props: any) {
  return (
    <div
      id="warningTarget"
      className="s-d-third-body-warning"
    >
      최소 하나의 요일을 선택해주세요!
    </div>
  );
}

function isActive(dayOfWeek: any, day: string): boolean {
  let isActive;
  switch (day) {
    case 'monday': isActive = dayOfWeek.monday; break;
    case 'tuesday': isActive = dayOfWeek.tuesday; break;
    case 'wednesday': isActive = dayOfWeek.wednesday; break;
    case 'thursday': isActive = dayOfWeek.thursday; break;
    case 'friday': isActive = dayOfWeek.friday; break;
    default: isActive = false;
  }
  return isActive;
}

function text(day: string): string {
  let text = '';
  switch (day) {
    case 'monday': text = '월'; break;
    case 'tuesday': text = '화'; break;
    case 'wednesday': text = '수'; break;
    case 'thursday': text = '목'; break;
    case 'friday': text = '금'; break;
    default: text = ''
  }
  return text;
}

export default DrawerThird;
