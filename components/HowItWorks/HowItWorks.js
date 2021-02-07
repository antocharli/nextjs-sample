function HowItWorks() {
  return (
    <>
      <section className="how-it-works">
        <div className="container">
          <div className="row" data-aos="fade-up">
            <div className="col-md-12">
              <div className="main-heading">
                <p>Working Process</p>
                <h2>
                  How It <span>Works</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <div className="working-process">
                <span className="process-img">
                  <img
                    src="/images/step-1.png"
                    className="img-responsive"
                    alt=""
                  />
                  <span className="process-num">01</span>
                </span>
                <h4>Create An Account</h4>
                <p>
                  Post a job to tell us about your project. We'll quickly match
                  you with the right freelancers find place best.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="working-process">
                <span className="process-img">
                  <img
                    src="/images/step-2.png"
                    className="img-responsive"
                    alt=""
                  />
                  <span className="process-num">02</span>
                </span>
                <h4>Search Jobs</h4>
                <p>
                  Post a job to tell us about your project. We'll quickly match
                  you with the right freelancers find place best.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="working-process">
                <span className="process-img">
                  <img
                    src="/images/step-3.png"
                    className="img-responsive"
                    alt=""
                  />
                  <span className="process-num">03</span>
                </span>
                <h4>Save &amp; Apply</h4>
                <p>
                  Post a job to tell us about your project. We'll quickly match
                  you with the right freelancers find place best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="clearfix"></div>
      <section className="testimonial" id="testimonial">
        <div className="container">
          <div className="row">
            <div className="main-heading">
              <p>What Say Our Client</p>
              <h2>
                Our Success <span>Stories</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div
              id="client-testimonial-slider"
              className="owl-carousel owl-theme"
              style={{ opacity: 1, display: "block" }}
            >
              <div className="owl-wrapper-outer">
                <div
                  className="owl-wrapper"
                  style={{
                    width: "3304px",
                    left: "0",
                    display: "block",
                    transition:
                      "all 1000ms ease 0s; transform: translate3d(0px, 0px, 0px)",
                  }}
                >
                  <div
                    className="owl-item"
                    style={{ width: "413px", display: "none !important" }}
                  >
                    {/* <div className="client-testimonial">
                      <div className="pic">
                        <img src="/images/client-1.jpg" alt="" />
                      </div>
                      <p className="client-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor et dolore magna aliqua.
                      </p>
                      <h3 className="client-testimonial-title">Lacky Mole</h3>
                      <ul className="client-testimonial-rating">
                        <li className="fa fa-star-o"></li>
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                      </ul>
                    </div> */}
                  </div>

                  <div className="owl-item" style={{ width: "413px" }}>
                    <div className="client-testimonial">
                      <div className="pic">
                        <img src="/images/client-1.jpg" alt="" />
                      </div>
                      <p className="client-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor et dolore magna aliqua.
                      </p>
                      <h3 className="client-testimonial-title">Lacky Mole</h3>
                      <ul className="client-testimonial-rating">
                        <li className="fa fa-star-o"></li>
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                      </ul>
                    </div>
                  </div>

                  <div className="owl-item" style={{ width: "413px" }}>
                    <div className="client-testimonial">
                      <div className="pic">
                        <img src="/images/client-2.jpg" alt="" />
                      </div>
                      <p className="client-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor et dolore magna aliqua.
                      </p>
                      <h3 className="client-testimonial-title">Karan Wessi</h3>
                      <ul className="client-testimonial-rating">
                        <li className="fa fa-star-o"></li>
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                      </ul>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: "413px" }}>
                    <div className="client-testimonial">
                      <div className="pic">
                        <img src="/images/client-3.jpg" alt="" />
                      </div>
                      <p className="client-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor et dolore magna aliqua.
                      </p>
                      <h3 className="client-testimonial-title">Roul Pinchai</h3>
                      <ul className="client-testimonial-rating">
                        <li className="fa fa-star-o"></li>
                        <li className="fa fa-star-o"></li>
                        <li className="fa fa-star"></li>
                      </ul>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: "413px" }}>
                    <div className="client-testimonial">
                      <div className="pic">
                        <img src="/images/client-1.jpg" alt="" />
                      </div>
                      <p className="client-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor et dolore magna aliqua.
                      </p>
                      <h3 className="client-testimonial-title">Adam Jinna</h3>
                      <ul className="client-testimonial-rating">
                        <li className="fa fa-star-o"></li>
                        <li className="fa fa-star-o"></li>
                        <li className="fa fa-star"></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export { HowItWorks };
