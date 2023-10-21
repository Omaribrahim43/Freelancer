import Contactus from "../../pages/contactus";



export default function content() {
    return (
      <>
        <>
          {/*Inner Home Banner Start*/}
          <div className="wt-haslayout wt-innerbannerholder">
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-6 push-lg-3">
                  <div className="wt-innerbannercontent">
                    <div className="wt-title">
                      <h2>A Brief Intro</h2>
                    </div>
                    <ol className="wt-breadcrumb">
                      <li>
                        <a href="index-2.html">Home</a>
                      </li>
                      <li className="wt-active">About</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Inner Home End*/}
          {/*Main Start*/}
          <main id="wt-main" className="wt-main wt-haslayout wt-innerbgcolor">
            <div className="wt-haslayout wt-main-section">
              {/*Greetings & Welcome Start*/}
              <section className="wt-haslayout">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="wt-greeting-holder">
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-7 float-left">
                            <div className="wt-greetingcontent">
                              <div className="wt-sectionhead">
                                <div className="wt-sectiontitle">
                                  <h2>Greetings &amp; Welcome</h2>
                                  <span>Start Today For a Great Future</span>
                                </div>
                                <div className="wt-description">
                                  <h3>About Us</h3>
                                  <p>
                                    At Freelancers, we bridge the gap between visionary ideas and digital reality. We are a team of experienced freelance web development business analysts who are passionate about helping businesses harness the power of the web to drive growth and success.
                                  </p>
                                  <h3>Our Mission</h3>
                                  <p>
                                    Our mission is to transform your business goals into functional and visually appealing web solutions. We understand that every business is unique, and that's why we approach each project with a fresh perspective. Our focus is not just on creating websites, but on crafting digital experiences that captivate your audience, streamline your operations, and boost your bottom line.
                                  </p>
                                  
                                 
                                </div>
                              </div>
                              <div id="wt-statistics" className="wt-statistics">
                                <div className="wt-statisticcontent wt-countercolor1">
                                  <h3
                                    data-from={0}
                                    data-to={1500}
                                    data-speed={8000}
                                    data-refresh-interval={50}>
                                    1500
                                  </h3>
                                  <em>k</em>
                                  <h4>Active Projects</h4>
                                </div>
                                <div className="wt-statisticcontent wt-countercolor2">
                                  <h3
                                    data-from={0}
                                    data-to={99}
                                    data-speed={8000}
                                    data-refresh-interval="5.9">
                                    99%
                                  </h3>
                                  <em>%</em>
                                  <h4>Great Feedback</h4>
                                </div>
                                <div className="wt-statisticcontent wt-countercolor3">
                                  <h3
                                    data-from={0}
                                    data-to={5000}
                                    data-speed={8000}
                                    data-refresh-interval={100}>
                                    5000
                                  </h3>
                                  <em>k</em>
                                  <h4>Active Freelancers</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 col-lg-5 float-left">
                            <div className="wt-greetingvideo">
                              <figure>
                                <a
                                  data-rel="prettyPhoto[video]"
                                  href="https://www.youtube.com/watch?v=J37W6DjqT3Q">
                                  <img src="images/video-img.png" alt="video" />
                                </a>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/*Greetings & Welcome End*/}
              {/*Signup Start*/}
              
              <section className="wt-haslayout">
                <div className="container">
                  <div className="row">
                    
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="wt-signupholder" style={{
                        background: 'url(https://images.pexels.com/photos/3182792/pexels-photo-3182792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 pull-right">
                          
                          <div className="wt-signupcontent">
                            <Contactus />
                            {/* <div className="wt-title">
                              <h2>
                                <span>Signup as</span>Freelancer
                              </h2>
                            </div>
                            <div className="wt-description">
                              <p>
                                Consectetur adipisicing elit amissed dotem
                                eiusmod tempor incuntes utneai labore etdolore.
                              </p>
                            </div>
                            <div className="wt-btnarea">
                              <a
                                href="javascript:void(0);"
                                className="wt-btn wt-btnvtwo">
                                Join Now
                              </a>
                              <a href="javascript:void(0);" className="wt-btn">
                                What’s new
                              </a>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/*Signup End*/}
              {/*Brand Start*/}
              <div className="wt-haslayout">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div
                        id="wt-brandslider"
                        className="wt-barandslider wt-haslayout owl-carousel">
                        <figure className="item wt-brandimg">
                          <img
                            src="images/brands/img-01.png"
                            alt="image description"
                          />
                        </figure>
                        <figure className="item wt-brandimg">
                          <img
                            src="images/brands/img-02.png"
                            alt="image description"
                          />
                        </figure>
                        <figure className="item wt-brandimg">
                          <img
                            src="images/brands/img-03.png"
                            alt="image description"
                          />
                        </figure>
                        <figure className="item wt-brandimg">
                          <img
                            src="images/brands/img-04.png"
                            alt="image description"
                          />
                        </figure>
                        <figure className="item wt-brandimg">
                          <img
                            src="images/brands/img-05.png"
                            alt="image description"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Brand End*/}
              {/*Our Team Start*/}
              <section className="wt-haslayout">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="wt-ourteamhold wt-haslayout wt-bgwhite">
                        <div
                          id="filter-masonry"
                          className="wt-teamfilter wt-haslayout">
                          <div className="wt-sectionhead">
                            <div className="wt-sectiontitle">
                              <h2>Our Professionals</h2>
                              <span>Team Behind The Curtain</span>
                            </div>
                          </div>
                          <div className="wt-teamholder">
                            <figure className="wt-speakerimg">
                              <img
                                src="https://media.licdn.com/dms/image/D4E03AQGNKltWPRhB2Q/profile-displayphoto-shrink_800_800/0/1697909040131?e=1703116800&v=beta&t=67jJSSskj3nP6PXOSV1toHgdJ_WDOVqgBiqygEsgJOk"
                                alt="image description"
                              />
                            </figure>
                            <div className="wt-teamcontent">
                              <div className="wt-title">
                                <h2>
                                  <a href="javascript:void(0);">Luisa Moxley</a>
                                </h2>
                                <span>Marketing Manager</span>
                              </div>
                              <ul className="wt-socialicons wt-socialiconssimple">
                                <li className="wt-facebook">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-facebook" />
                                  </a>
                                </li>
                                <li className="wt-twitter">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-twitter" />
                                  </a>
                                </li>
                                <li className="wt-linkedin">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-linkedin" />
                                  </a>
                                </li>
                                <li className="wt-googleplus">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-google-plus" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="wt-teamholder">
                            <figure className="wt-speakerimg">
                              <img
                                src="https://media.licdn.com/dms/image/D4E35AQFf2naX75mL1w/profile-framedphoto-shrink_800_800/0/1695588382607?e=1698516000&v=beta&t=lBYk80Wwwmgn6i3D-WfnYl3n4r1vEuhC6MvA9MK-2UY"
                                alt="image description"
                              />
                            </figure>
                            <div className="wt-teamcontent">
                              <div className="wt-title">
                                <h2>
                                  <a href="javascript:void(0);">Guadalupe</a>
                                </h2>
                                <span>Marketing Administrator</span>
                              </div>
                              <ul className="wt-socialicons wt-socialiconssimple">
                                <li className="wt-facebook">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-facebook" />
                                  </a>
                                </li>
                                <li className="wt-twitter">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-twitter" />
                                  </a>
                                </li>
                                <li className="wt-linkedin">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-linkedin" />
                                  </a>
                                </li>
                                <li className="wt-googleplus">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-google-plus" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="wt-teamholder">
                            <figure className="wt-speakerimg">
                              <img
                                src="https://media.licdn.com/dms/image/D4E35AQGAHYznobjoEA/profile-framedphoto-shrink_800_800/0/1695592792532?e=1698516000&v=beta&t=ESYEHRvk9Chq6w0GNYzK4Cmyi7X94PLwoj2JOiGcU-w"
                                alt="image description"
                              />
                            </figure>
                            <div className="wt-teamcontent">
                              <div className="wt-title">
                                <h2>
                                  <a href="javascript:void(0);">
                                    Brande Feeley
                                  </a>
                                </h2>
                                <span>Marketing Director</span>
                              </div>
                              <ul className="wt-socialicons wt-socialiconssimple">
                                <li className="wt-facebook">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-facebook" />
                                  </a>
                                </li>
                                <li className="wt-twitter">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-twitter" />
                                  </a>
                                </li>
                                <li className="wt-linkedin">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-linkedin" />
                                  </a>
                                </li>
                                <li className="wt-googleplus">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-google-plus" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="wt-teamholder">
                            <figure className="wt-speakerimg">
                              <img
                                src="https://media.licdn.com/dms/image/D4E35AQFuWAu8tO2FtA/profile-framedphoto-shrink_800_800/0/1695733676783?e=1698516000&v=beta&t=cr4c32QIZyHGzqOvEp9AR9xk0YeoYTEuyHQThTngwRQ"
                                alt="image description"
                              />
                            </figure>
                            <div className="wt-teamcontent">
                              <div className="wt-title">
                                <h2>
                                  <a href="javascript:void(0);">
                                    Joseph Farner
                                  </a>
                                </h2>
                                <span>VP Marketing</span>
                              </div>
                              <ul className="wt-socialicons wt-socialiconssimple">
                                <li className="wt-facebook">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-facebook" />
                                  </a>
                                </li>
                                <li className="wt-twitter">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-twitter" />
                                  </a>
                                </li>
                                <li className="wt-linkedin">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-linkedin" />
                                  </a>
                                </li>
                                <li className="wt-googleplus">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-google-plus" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="wt-teamholder">
                            <figure className="wt-speakerimg">
                              <img
                                src="https://media.licdn.com/dms/image/D4E35AQEl2KwtoDU-ig/profile-framedphoto-shrink_800_800/0/1696843526372?e=1698516000&v=beta&t=THVGhR9ByZ7n0yAs9q-HROijnuJtqWKxuRprBoUuFQ8"
                                alt="image description"
                              />
                            </figure>
                            <div className="wt-teamcontent">
                              <div className="wt-title">
                                <h2>
                                  <a href="javascript:void(0);">Rozella Hott</a>
                                </h2>
                                <span>Marketing Director</span>
                              </div>
                              <ul className="wt-socialicons wt-socialiconssimple">
                                <li className="wt-facebook">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-facebook" />
                                  </a>
                                </li>
                                <li className="wt-twitter">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-twitter" />
                                  </a>
                                </li>
                                <li className="wt-linkedin">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-linkedin" />
                                  </a>
                                </li>
                                <li className="wt-googleplus">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-google-plus" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* <div className="wt-teamholder">
                            <figure className="wt-speakerimg">
                              <img
                                src="images/team/img-06.jpg"
                                alt="image description"
                              />
                            </figure>
                            <div className="wt-teamcontent">
                              <div className="wt-title">
                                <h2>
                                  <a href="javascript:void(0);">
                                    Duane Villalta
                                  </a>
                                </h2>
                                <span>Marketing Administrator</span>
                              </div>
                              <ul className="wt-socialicons wt-socialiconssimple">
                                <li className="wt-facebook">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-facebook" />
                                  </a>
                                </li>
                                <li className="wt-twitter">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-twitter" />
                                  </a>
                                </li>
                                <li className="wt-linkedin">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-linkedin" />
                                  </a>
                                </li>
                                <li className="wt-googleplus">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-google-plus" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="wt-teamholder">
                            <figure className="wt-speakerimg">
                              <img
                                src="images/team/img-07.jpg"
                                alt="image description"
                              />
                            </figure>
                            <div className="wt-teamcontent">
                              <div className="wt-title">
                                <h2>
                                  <a href="javascript:void(0);">
                                    Johanne Deyoung
                                  </a>
                                </h2>
                                <span>VP Marketing</span>
                              </div>
                              <ul className="wt-socialicons wt-socialiconssimple">
                                <li className="wt-facebook">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-facebook" />
                                  </a>
                                </li>
                                <li className="wt-twitter">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-twitter" />
                                  </a>
                                </li>
                                <li className="wt-linkedin">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-linkedin" />
                                  </a>
                                </li>
                                <li className="wt-googleplus">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-google-plus" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="wt-teamholder">
                            <figure className="wt-speakerimg">
                              <img
                                src="images/team/img-08.jpg"
                                alt="image description"
                              />
                            </figure>
                            <div className="wt-teamcontent">
                              <div className="wt-title">
                                <h2>
                                  <a href="javascript:void(0);">
                                    Joseph Farner
                                  </a>
                                </h2>
                                <span>Marketing Manager</span>
                              </div>
                              <ul className="wt-socialicons wt-socialiconssimple">
                                <li className="wt-facebook">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-facebook" />
                                  </a>
                                </li>
                                <li className="wt-twitter">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-twitter" />
                                  </a>
                                </li>
                                <li className="wt-linkedin">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-linkedin" />
                                  </a>
                                </li>
                                <li className="wt-googleplus">
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-google-plus" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/*Our Team End*/}
            </div>
          </main>
          {/*Main End*/}
        </>
      </>
    );
}

