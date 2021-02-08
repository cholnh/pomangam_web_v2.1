import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import SEO from "./SEO";

interface Props {
  header?: any,
  footer?: any,
  canonical: string,
}

class MainLayout extends React.Component<Props> {

  render() {
    let {
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