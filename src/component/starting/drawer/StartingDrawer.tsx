import DrawerFirst from "./DrawerFirst";
import DrawerSecond from "./DrawerSecond";
import DrawerThird from "./DrawerThird";
import DrawerFourth from "./DrawerFourth";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import React from "react";
import '../../../assets/css/starting/drawer/StartingDrawer.css';
import useWindowDimensions from "../../../assets/js/CustomUtils";
import DrawerLogin from "./DrawerLogin";

export default function StartingDrawer(props: any) {
  const {width, height} = useWindowDimensions();
  const {
    step,
    prevStep,
    nextStep
  } = props;
  let component;
  switch (step) {
    case 0:
      component =
        <DrawerFirst
          step={step}
          nextStep={nextStep}
        />;
      break;
    case 1:
      component =
        <DrawerSecond
          step={step}
          prevStep={prevStep}
          nextStep={nextStep}
        />;
      break;
    case 2:
      component =
        <DrawerThird
          step={step}
          prevStep={prevStep}
          nextStep={nextStep}
        />;
      break;
    case 3:
      component =
        <DrawerFourth
          step={step}
          prevStep={prevStep}
          nextStep={nextStep}
        />;
      break;
    case 4:
      component =
        <DrawerLogin
          step={step}
          prevStep={prevStep}
          nextStep={nextStep}
        />;
      break;
    default:
      component =
        <DrawerFirst
          step={step}
          nextStep={nextStep}
        />;
  }
  return (
    <SwipeableDrawer
      anchor={width > 768 ? "right" : "bottom"}
      open={props.isDrawerOpen}
      onOpen={props.toggleDrawer()}
      onClose={props.toggleDrawer()}
      style={{
        zIndex: 9999,
        height: height
      }}
    >
      <div className="s-drawer">
        {component}
      </div>

    </SwipeableDrawer>
  );
}
