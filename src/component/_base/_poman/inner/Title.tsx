import React from "react";
import useDencrypt from "use-dencrypt-effect/dist";

export default function Title(props: any) {
  return (
    <>
      <div className="p-info-name">{props.data.name}</div>
      <div className="p-info-rank">
        <AnimationText text={props.data.rank} />
      </div>
      {/*<a href={props.data.animationHref}>*/}
      {/*  <AnimationText text={props.data.animationText} />*/}
      {/*</a>*/}
    </>
  );
}

function AnimationText(props: any) {
  const { result, dencrypt } = useDencrypt();
  setTimeout(() => {
    dencrypt(props.text);
  }, 1000);

  return (
    <div>
      {result}
    </div>
  );
}
