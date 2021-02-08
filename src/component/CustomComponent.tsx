import React, { Component } from 'react';

/*
 * 속성 인터페이스
 * 부모에게 물려받는 불변속성의 값들
 */
interface Props {
  color?: 'blue' | 'green' | 'red'; // 파이프라인(|)은 'or' 를 뜻 함.
  value?: string; // '?:'는 부모가 해당 컴포넌트를 호출할 때 해당 속성(value)을 필수로 갖지 않아도 됨.
  noUse?: any; // 'any' 는 속성의 값이 아무 타입의 값을 허용함을 뜻한다.
  onClick(e: any): void; // any 타입의 인자를 받고 void 를 반환하는 함수를 속성으로 받는다.
}

/*
 * 상태 인터페이스
 * 컴포넌트 내부에서만 조작가능한 상태 값들
 */
interface States {
  temperature: any;
}

// 속성과 상태 인터페이스를 제너릭으로 받는다.
class CustomComponent extends Component<Props, States> {

  /*
   * ref 생성
   * ref 를 생성하여 HTMLInputElement 에 접근한다. (아래 focus 코드 확인)
   * 최대한 지양해야 할 코드
   * 동시에 공유 해야 하는 상태가 필요하다면, 공통으로 묶인 state 를 상위 조상 컴포넌트로 올린다.
   * 그 후 공유가 필요한 하위 컴포넌트들에게 prop 으로 전달한다.
   */
  // inputRef = createRef<HTMLInputElement>();

  /*
   * 생성자
   * state 정의
   * 이벤트 핸들러에 this 객체 바인딩
   */
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this); // 아래 handleChange 선언 후, 생성자에 바인딩(bind) 하는 것이 올바른 코딩 컨벤션.
    this.state = {temperature: ''};
  }

  /*
   * 변화를 감지하는 이벤트 핸들러
   * 이벤트 (e: any) 의 값이 temperature (상태 값) 로 복사
   * 상태변화는 항상 setState 안에서 이루어 진다.
   *
   * LiveTemplate Key : 'och'
   *
   */
  handleChange(e: any) {
    this.setState({temperature: e.target.value});
  }

  /*
   * 속성 기본값
   * typescript 에서 적용 안 됨
   */
  defaultProps = {
    value: '기본값'
  }

  /*
   * 렌더 메서드
   */
  render() {

    /*
     * props 를 블록 상수로 복사
     */
    const {
      onClick,
      color,
      value,
    } = this.props;

    /*
     * state 를 블록 상수로 복사
     */
    const {
      temperature
    } = this.state;

    /*
     * 예제를 위한 list 데이터
     */
    const todos: any[] = [
      {id: 1, name: 'park'},
      {id: 2, name: 'kim'}
    ];

    /*
     * 렌더 메서드가 최종으로 반환하는 값이다. (목표: JSX 그리기)
     */
    return (  // 아래는 JSX 문법으로 작성되어 있다.
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={temperature} // 값들은 {} 중괄호로 감싸서 나타낸다.
          onChange={this.handleChange}
        />
        <BoilingVerdict
          celsius={parseFloat(temperature)}
        />
        <button
          type="button"
          style={{color}} // css 값 넣는 방식은 중괄호가 두 개이다.
          onClick={onClick}
        >
          {value}
        </button>

        {/* 반복문 예제 */}
        {todos.map(todo => ( // forEach 올바른 코드 컨벤션이다.
          <div key={todo.id}>
            {todo.name}
          </div>
        ))}
      </fieldset>
    );
  }

  // componentDidMount() {
  //   const node = this.inputRef.current; // ref.current 는 랜더링 전 null 상태일 수 있으므로 null check 을 해준다.
  //   if (node) {
  //     node.focus();
  //   }
  // }

  // componentDidMount() {
  //   const interval = 3000;
  //
  //   const timerId = setInterval(() => {
  //     let max = this.state.data.length - 1;
  //     if(this.state.curIdx < max) {
  //       this.setState({
  //         curIdx: this.state.curIdx + 1
  //       });
  //     } else {
  //       this.setState({
  //         curIdx: 0
  //       });
  //     }
  //   }, interval );
  //
  //   this.setState({
  //     timerId: timerId
  //   })
  // }
  //
  // componentWillUnmount() {
  //   clearInterval(this.state.timerId);
  // }
}

/*
 * 클래스 외부에 컴포넌트 작성.
 * 경량 컴포넌트 또는 정적 컴포넌트를 자주 작성할 듯 하다.
 */
function BoilingVerdict(props: any) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

// function Slider(props: any) {
//   const data: any[] = props.data;
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slideRef: any = useRef(null);
//
//   useEffect(() => {
//     if (slideRef.current != null) {
//       slideRef.current.style.transition = "all 0.5s fade-out";
//       slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
//     }
//   }, [currentSlide]);
//
//   const onClick = (e: any) => {
//     let max = data.length - 1;
//     if(currentSlide < max) {
//       setCurrentSlide(currentSlide + 1);
//     } else {
//       setCurrentSlide(0);
//     }
//   }
//
//   return (
//     <div style={{overflow: "hidden", width: "100%"}}>
//       {currentSlide}
//       <div style={{display: "flex", width: "100%"}} ref={slideRef}>
//         {data.map(item => (
//           <img
//             key={'key-slider-'+item.idx}
//             className="d-block w-100"
//             style={{width: "100%", borderColor: "1px bold red"}}
//             src={item.imagePath}
//             alt={'slide-'+item.idx}
//           />
//         ))}
//       </div>
//       <button
//         type="button"
//         onClick={onClick}
//       >
//         BUTTON
//       </button>
//     </div>
//   );
// }

export default CustomComponent; // 해당 컴포넌트를 외부 컴포넌트들이 사용할 수 있도록 내보내기(export) 시킨다.