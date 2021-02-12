function HomeBanner() {
  return (
    <>
      <div className="clearfix"></div>
      <div
        className="simple-banner"
        style={{ backgroundImage: "url(/images/simple-banner.jpeg)" }}
      >
        <div className="container">
          <div className="simple-banner-caption">
            <div className="col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1 banner-text">
              <h3>We Are Available On</h3>
              <h1>
                Job <span>Stock</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { HomeBanner };
export default HomeBanner;
