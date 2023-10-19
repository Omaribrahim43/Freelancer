
import React from "react";
import Banner  from './banner'
import Detail  from './detail'
export default function Content() {
    return (
      <>
         <Banner />
      <main id="wt-main" className="wt-main wt-haslayout wt-innerbgcolor">
				<div className="wt-haslayout wt-main-section">
             
                <Detail/>
      
      
                </div>
			</main>
      </>
    );
}