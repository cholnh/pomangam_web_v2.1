import useWindowDimensions from "../../../assets/js/CustomUtils";
import React, {useEffect, useState} from "react";
import {isMobile} from 'react-device-detect';
import '../../../assets/css/_base/_poman/poman.css';

interface Props {
  minColumnCount: number,
  maxColumnCount: number,
  maxRowCount: number,
  minHeight: number,
  maxHeight: number,
  maxWidth: number,
  imagePool: any[],
}
export default function RandomGridImage(props: Props) {

  /*
   * 모바일 최대 열 개수
   */
  const MOBILE_MAX_ROW_COUNT = 4;

  /*
   * 모바일 최대 열 개수
   */
  const MOBILE_MAX_HEIGHT = 200;

  /*
   * 애니메이션 효과 (interval 동안 몇번 랜더링 할지 결정)
   */
  const ANIMATION_COUNT = 20;

  /*
 * 애니메이션 효과 (랜더링 간격 ms)
 */
  const ANIMATION_INTERVAL = 10;

  /*
   * animation 효과
   */
  // @ts-ignore
  const [count, setCount] = useState(0);
  useEffect(() => {
    if(isMobile) return () => {};
    let i = count;
    const action = setInterval(() => {
      setCount(i++);
      if(i >= ANIMATION_COUNT) {
        clearInterval(action);
      }
    }, ANIMATION_INTERVAL);

    return () => clearInterval(action);
  }, []);

  /*
   * 내부 변수
   */
  const {width} = useWindowDimensions();
  const howManyMin:number = props.minColumnCount;
  const howManyMax:number = props.maxColumnCount;
  const minH:number = props.minHeight;
  const maxWidth:number = props.maxWidth;
  const imagePool: any = props.imagePool;
  const maxRowCount:number =
    width > 768
      ? props.maxRowCount
      : props.maxRowCount > MOBILE_MAX_ROW_COUNT
        ? MOBILE_MAX_ROW_COUNT
        : props.maxRowCount;
  const maxHeight:number =
    width > 768
      ? props.maxHeight
      : props.maxHeight > MOBILE_MAX_HEIGHT
        ? MOBILE_MAX_HEIGHT
        : props.maxHeight;
  const w = Math.floor((width-(10*maxRowCount))/maxRowCount);
  const compos = [];
  const minHeight = (maxHeight/howManyMax) < minH
    ? (maxHeight/howManyMax)
    : minH;

  for(let i=0; i<maxRowCount; i++) {
    let remainHeight = maxHeight;
    let firstVerticalCount = random(howManyMin, howManyMax);
    let firstHeight = [];
    let prevImageIndex = -1;
    for(let j=0; j<firstVerticalCount; j++) {
      if(j !== firstVerticalCount - 1) {
        let height = random(minHeight, (remainHeight - (minHeight * (firstVerticalCount - (j + 1)))));
        firstHeight.push(height);
        remainHeight -= height;
      } else {
        firstHeight.push(remainHeight);
      }
    }

    compos.push((
      <div
        key={'key-poman-image-'+i}
        style={{display: "inline-block", overflow: "hidden"}}
      >
        {firstHeight.map((h, index) => {
          let imgIndex = 0;
          while (true) {
            imgIndex = random(0, imagePool.length-1);
            if(prevImageIndex !== imgIndex) {
              prevImageIndex = imgIndex;
              break;
            }
          }

          return (
            <div
              key={'key-poman-image-'+i+'-'+index}
              className="p-bg-img-container"
              style={{
                height: h,
                marginTop: "2px",
                marginBottom: "2px",
                marginLeft: "1px",
                marginRight: "1px"
              }}
            >
              <img
                className="p-bg-img"
                style={{
                  display: "inline-block",
                  maxWidth: maxWidth,
                  objectFit: "cover",
                }}
                src={imagePool[imgIndex]}
                alt={imgIndex.toString()}
                width={w}
                height={h}
              />
            </div>
          );
        })}
      </div>
    ));
  }

  return (
    <div>
      {compos}
    </div>
  );
}

function random(min: number, max: number): number {
  return Math.floor(min + Math.random() * (max - min + 1));
}