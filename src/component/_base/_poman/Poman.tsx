import React, {useState} from 'react';
import MainLayout from "../layout/MainLayout";
import '../../../assets/css/_base/_poman/poman.css';
import RandomGridImage from "./inner/RandomGridImage";
import Introduce from "./inner/Introduce";
import Title from "./inner/Title";
import Sns from "./inner/Sns";
import Career from "./inner/Career";
import {isMobile} from "react-device-detect";
import MobileRandomGridImage from "./inner/MobileRandomGridImage";
import nteveData from "./data/NteveData";
import eunstarData from "./data/EunstarData";
import jhkonaData from "./data/JhkonaData";
import zorouhnData from "./data/ZorouhnData";
import vs88929Data from "./data/Vs88929Data";
import FooterTail from "./inner/FooterTail";

export default function Poman(props: any) {
  const {
    who
  } = props;

  let data = nteveData();
  switch (who) {
    case 'nteve':
      data = nteveData();
      break;
    case 'eunstar':
      data = eunstarData();
      break;
    case 'jhkona':
      data = jhkonaData();
      break;
    case 'zorouhn':
      data = zorouhnData();
      break;
    case 'vs88929':
      data = vs88929Data();
      break;
    default:
  }

  const [refresh, setRefresh] = useState(false);

  return (
    <MainLayout canonical={"/nteve"}>
      <div className="poman">
        <div className="p-bg">
          {isMobile
            ? <MobileRandomGridImage
              minColumnCount={2}
              maxColumnCount={5}
              maxRowCount={4}
              minHeight={30}
              maxHeight={200}
              maxWidth={250}
              imagePool={data.imagePool}
              refresh={refresh}
            />
            : <RandomGridImage
              minColumnCount={2}
              maxColumnCount={5}
              maxRowCount={6}
              minHeight={40}
              maxHeight={300}
              maxWidth={250}
              imagePool={data.imagePool}
              refresh={refresh}
            />
          }
          <img
            className="p-profile-img"
            src={data.profile}
            alt="profile"
            onClick={() => setRefresh(!refresh)}
          />
        </div>
        <div className="p-info">
          <Title
            data={data}
          />
          <Sns data={data} />
          <Introduce
            text={data.text}
            maxLine={6}
          />
          <Career/>
        </div>
      </div>
      <FooterTail/>
    </MainLayout>
  );
}
