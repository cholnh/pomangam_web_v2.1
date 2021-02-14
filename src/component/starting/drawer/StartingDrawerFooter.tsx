import React from 'react';
import '../../../assets/css/starting/drawer/StartingDrawer.css';
import {Button} from "react-bootstrap";

function StartingDrawerFooter(props: any) {
  const {
    canNext = true,
    onNext,
    children
  } = props;
  return (
    <div className="s-d-footer">
      <Button
        className={canNext ? "s-s-footer-button-inner" : "s-s-footer-button-inner disabled"}
        onClick={canNext ? onNext : ()=>{}}
      >
        {children}
      </Button>
    </div>
  );
}

export default StartingDrawerFooter;
