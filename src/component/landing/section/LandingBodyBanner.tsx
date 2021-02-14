import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../../../assets/css/landing/LandingBodyBanner.css';

interface Props {
  to?: string | any;
  title: React.ReactNode | string;
  button: React.ReactNode | string;
  onClick?: any
}

interface States {

}

class LandingBodyBanner extends Component<Props, States> {

  render() {

    const {
      to,
      title,
      button,
      onClick
    } = this.props;

    return (
      <div className="l-body-banner">
        <div className="l-body-banner-container">
          <div className="l-body-banner-title">
            {title}
          </div>
          <div className="l-body-banner-button">
            {to
              ? <Link to={to}>
                  <Button className="l-body-banner-button-inner">
                    {button}
                  </Button>
                </Link>
              :  <Button
                  className="l-body-banner-button-inner"
                  onClick={onClick ? onClick : ()=>{}}
                >
                 {button}
                </Button>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default LandingBodyBanner;
