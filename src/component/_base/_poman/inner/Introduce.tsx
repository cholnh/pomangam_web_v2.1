import React, {useState} from 'react';

function Introduce(props: any) {

    const [isShowIntro, setIsShowIntro] = useState(false);

    const onIntroduceClicked = (e: any) => {
        setIsShowIntro(true);
    };

    const {
        maxLine
    } = props;

    const text = props.text.trimEnd().trimStart();
    let textLines = text.split('\n');
    let isLong = false;

    if(!isShowIntro && textLines.length > maxLine) {
        isLong = true;
        while(textLines.length > maxLine) {
            textLines.pop();
        }
    }
    let isShow = isShowIntro || (!isLong);

    return (
        <div className="p-info-introduce">
            <div className="p-category">
                소개
            </div>
            <p className="p-info-introduce-text">
                {textLines.map((line: string) => {
                    return (<span>{line}<br/></span>)
                })}
            </p>
            {isShow
                ? <hr />
                : <Hide onShowClicked={onIntroduceClicked} />
            }
        </div>
    );
}

function Hide(props: any) {

    const onClick = props.onShowClicked;

    return (
        <div
            className="p-info-introduce-hide"
            onClick={onClick}
        >
            <div className="p-info-introduce-hr-sect">
                <span className="p-info-introduce-hr-sect-contents">더보기</span>
            </div>
        </div>
    );
}

export default Introduce;
