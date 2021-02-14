import React from 'react';
import MainLayout from "../_base/layout/MainLayout";
import Header from "../_base/header/Header";

function Payment(props: any) {

  return (
    <MainLayout
      header={
        <Header isOnlyIcon />
      }
      footer
      canonical={"/payment"}
    >
      <div style={{height: "700px"}} />
    </MainLayout>
  );
}

export default Payment;
