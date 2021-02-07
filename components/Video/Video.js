function Video() {
  return (
    <>
      <div className="clearfix"></div>
      <section
        className="video-sec dark"
        id="video"
        style={{ backgroundImage: "url(/images/banner-10.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="main-heading">
              <p>Best For Your Projects</p>
              <h2>
                Watch Our <span>video</span>
              </h2>
            </div>
          </div>
          <div className="video-part">
            <a
              href="https://codeminifier.com/job-stock-5.4.1/job-stock/index.html#"
              data-toggle="modal"
              data-target="#my-video"
              className="video-btn"
            >
              <i className="fa fa-play"></i>
            </a>
          </div>
        </div>
      </section>
      <div className="clearfix"></div>
    </>
  );
}

export { Video };
