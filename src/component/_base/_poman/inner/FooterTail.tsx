import React from "react";
import {Link} from "react-router-dom";

export default function FooterTail(props: any) {
  return (
    <Link to="./">
      <div className="p-footer-tail">
        <div className="p-footer-tail-container">
          <div className="p-footer-tail-copyright">
            © 2021. 포만감 Co. all rights reserved.
          </div>
        </div>
      </div>
    </Link>
  );
}
