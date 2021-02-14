import React from "react";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import SEO from "../utils/SEO";

interface Props {
  header?: any,
  footer?: any,
  canonical: string,
}

class MainLayout extends React.Component<Props> {

  render() {
    const {
      header,
      footer,
      canonical,
      children
    } = this.props;

    return (
      <>
        <SEO canonical={canonical} />
        {header && header === true
          ? <Header />
          : header
        }
        {children}
        {footer && <Footer />}
      </>
    );
  }
}

export default MainLayout;
