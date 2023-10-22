
import React from "react";
import Banner  from './banner'
import Detail  from './detail'
import Comments  from './comments'
export default function Content() {
    return (
      <>
        <Banner />
        <main id="wt-main" className="wt-main wt-haslayout wt-innerbgcolor">
          <div className="wt-haslayout wt-main-section">
            <Detail />
          </div>
        </main>
        <div
          className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 float-left"
          style={{ position: "relative" }}>
          <div className="wt-userlistingholder wt-userlisting wt-haslayout">
            <Comments />
          </div>
        </div>
      </>
    );
}