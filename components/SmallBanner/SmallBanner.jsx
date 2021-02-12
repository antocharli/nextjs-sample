function SmallBanner() {
  return (
    <>
      <section
        className="inner-header-title"
        style={{ backgroundImage: "url(/images/banner-10.jpg)" }}
      >
        <div className="container">
          <h1>Browse Jobs</h1>
        </div>
      </section>
      <div className="clearfix"></div>
    </>
  );
}

export default SmallBanner;
export { SmallBanner };
