import Sidebar from "./sidebar";
import Cards from "./cards";

export default function Content() {
  return (
    <>
      <div className="wt-haslayout wt-main-section">
        {/* User Listing Start */}
        <div className="wt-haslayout">
          <div className="container">
            <div className="row">
              <div id="wt-twocolumns" className="wt-twocolumns wt-haslayout">
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4 float-left">
                  {/* Sidebar Start */}
                  <Sidebar />
                  {/* Sidebar End */}
                </div>
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 float-left">
                  {/* Cards Start */}
                  <Cards />
                  {/* Cards End */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* User Listing End */}
      </div>
    </>
  );
}
