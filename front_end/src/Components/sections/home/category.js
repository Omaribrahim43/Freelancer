import useReadApi from "../../../coustmHooks/UseReadapi"
const url = 
export default function category() {
    return (
      <>
        <section className="wt-haslayout wt-main-section">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-6 push-lg-3">
                <div className="wt-sectionhead wt-textcenter">
                  <div className="wt-sectiontitle">
                    <h2>Explore Categories</h2>
                    <span>Professional by categories</span>
                  </div>
                </div>
              </div>
              <div className="wt-categoryexpl">
                
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 float-left">
                  <div className="wt-categorycontent">
                    <figure>
                      <img
                        src="images/categories/img-01.png"
                        alt="image description"
                      />
                    </figure>
                    <div className="wt-cattitle">
                      <h3>
                        <a href="javascrip:void(0);">Mobiles</a>
                      </h3>
                    </div>
                    <div className="wt-categoryslidup">
                      <p>
                        Consectetur adipisicing elitaed eiusmod tempor
                        incididuatna labore et dolore magna.
                      </p>
                      <a href="javascript:void(0);">
                        Explore <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
             
           
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 float-left">
                  <div className="wt-btnarea">
                    <a href="javascript:void(0)" className="wt-btn">
                      View All
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}