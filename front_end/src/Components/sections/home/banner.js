export default function banner(params) {
    return (
      <>
        <div className="wt-haslayout wt-bannerholder">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                <div className="wt-bannerimages">
                  <figure className="wt-bannermanimg" data-tilt="">
                    <img
                      src="images/bannerimg/img-01.png"
                      alt="img description"
                    />
                    <img
                      src="images/bannerimg/img-02.png"
                      className="wt-bannermanimgone"
                      alt="img description"
                    />
                    <img
                      src="images/bannerimg/img-03.png"
                      className="wt-bannermanimgtwo"
                      alt="img description"
                    />
                  </figure>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
                <div className="wt-bannercontent">
                  <div className="wt-bannerhead">
                    <div className="wt-title">
                      <h1>
                        <span>Hire expert freelancers</span> for any job, Online
                      </h1>
                    </div>
                    <div className="wt-description">
                      <p>
                      Passionately crafting your vision into reality. Your dreams, our expertise. Let's make it happen.
                      </p>
                    </div>
                  </div>
                  <form className="wt-formtheme wt-formbanner">
                    <fieldset>
                      <div className="form-group">
                        <input
                          type="text"
                          name="fullname"
                          className="form-control"
                          placeholder="I’m looking for"
                        />
                        <div className="wt-formoptions">
                          <div className="wt-dropdown">
                            <span>
                              In:{" "}
                              <em className="selected-search-type">
                                Freelancers{" "}
                              </em>
                              <i className="lnr lnr-chevron-down" />
                            </span>
                          </div>
                          <div className="wt-radioholder">
                            <span className="wt-radio">
                              <input
                                id="wt-freelancers"
                                data-title="Freelancers"
                                type="radio"
                                name="searchtype"
                                defaultValue="freelancer"
                                defaultChecked=""
                              />
                              <label htmlFor="wt-freelancers">
                                Freelancers
                              </label>
                            </span>
                            <span className="wt-radio">
                              <input
                                id="wt-jobs"
                                data-title="Jobs"
                                type="radio"
                                name="searchtype"
                                defaultValue="job"
                              />
                              <label htmlFor="wt-jobs">Jobs</label>
                            </span>
                            <span className="wt-radio">
                              <input
                                id="wt-company"
                                data-title="Companies"
                                type="radio"
                                name="searchtype"
                                defaultValue="job"
                              />
                              <label htmlFor="wt-company">Companies</label>
                            </span>
                          </div>
                          <a href="userlisting.html" className="wt-searchbtn">
                            <i className="lnr lnr-magnifier" />
                          </a>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                  <div className="wt-videoholder">
                    <div className="wt-videoshow">
                      <a
                        data-rel="prettyPhoto[video]"
                        href="https://youtu.be/ggHACGb0mtU?si=hc1HHL07lyiYkG_b">
                        <i className="fa fa-play" />
                      </a>
                    </div>
                    <div className="wt-videocontent">
                      <span>
                        See For Yourself!
                        <em>How it works &amp; experience the ultimate joy.</em>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}