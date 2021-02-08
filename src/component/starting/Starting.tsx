import React, {Component} from 'react';
import MainLayout from "../_base/MainLayout";
import StartingHeader from "./StartingHeader";

class Starting extends Component {
  render() {
    return (
      <MainLayout
        header={<StartingHeader hideTargetId="target" />}
        footer
        canonical={"/start"}
      >
        <div style={{height: "500px"}}>
        </div>
        <div id="target" style={{height: "1000px"}}>
          <hr />
          hi
        </div>
      </MainLayout>
    );
  }
}

export default Starting;