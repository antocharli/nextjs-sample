function PopularJobs() {
  return (
    <>
      <section className="inner-header-page">
        <div className="container">
          <h2>2,472 Jobs Found</h2>
          <p>
            The top freelancing website trusted by over 5 million businesses.
          </p>
        </div>
      </section>
      <section className="accordion">
        <div className="container">
          <div className="row extra-mrg">
            <div className="wrap-search-filter">
              <form>
                <div className="col-md-3 col-sm-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Anywhere..."
                  />
                </div>
                <div className="col-md-3 col-sm-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Keyword. Design, Seo.."
                  />
                </div>
                <div className="col-md-3 col-sm-3">
                  <select
                    className="form-control select2-hidden-accessible"
                    id="j-category"
                    data-select2-id="j-category"
                    tabindex="-1"
                    aria-hidden="true"
                  >
                    <option value="" data-select2-id="2">
                      &nbsp;
                    </option>
                    <option value="1">Information Technology</option>
                    <option value="2">Mechanical</option>
                    <option value="3">Hardware</option>
                    <option value="4">Hospitality &amp; Tourism</option>
                    <option value="5">Education &amp; Training</option>
                    <option value="6">Government &amp; Public</option>
                    <option value="7">Architecture</option>
                  </select>
                  <span
                    className="select2 select2-container select2-container--default"
                    dir="ltr"
                    data-select2-id="1"
                    style={{ width: "280px" }}
                  >
                    <span className="selection">
                      <span
                        className="select2-selection select2-selection--single"
                        role="combobox"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabindex="0"
                        aria-labelledby="select2-j-category-container"
                      >
                        <span
                          className="select2-selection__rendered"
                          id="select2-j-category-container"
                          role="textbox"
                          aria-readonly="true"
                        >
                          <span className="select2-selection__placeholder">
                            Choose Category...
                          </span>
                        </span>
                        <span
                          className="select2-selection__arrow"
                          role="presentation"
                        >
                          <b role="presentation"></b>
                        </span>
                      </span>
                    </span>
                    <span
                      className="dropdown-wrapper"
                      aria-hidden="true"
                    ></span>
                  </span>
                </div>
                <div className="col-md-3 col-sm-3">
                  <button type="submit" className="btn btn-primary full-width">
                    Filter
                  </button>
                </div>
              </form>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="popular-jobs-container">
                  <div className="popular-jobs-box">
                    <span className="popular-jobs-status bg-success">
                      hourly
                    </span>
                    <h4 className="flc-rate">$17/hr</h4>
                    <div className="popular-jobs-box">
                      <div className="popular-jobs-box-detail">
                        <h4>Google Inc</h4>
                        <span className="desination">Software Designer</span>
                      </div>
                    </div>
                    <div className="popular-jobs-box-extra">
                      <ul>
                        <li>Php</li>
                        <li>Android</li>
                        <li>Html</li>
                        <li className="more-skill bg-primary">+3</li>
                      </ul>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui.
                      </p>
                    </div>
                  </div>
                  <a
                    href="job-detail-2.html"
                    className="btn btn-popular-jobs bt-1"
                  >
                    View Detail
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="popular-jobs-container">
                  <div className="popular-jobs-box">
                    <span className="popular-jobs-status bg-warning">
                      Monthly
                    </span>
                    <h4 className="flc-rate">$570/Mo</h4>
                    <div className="popular-jobs-box">
                      <div className="popular-jobs-box-detail">
                        <h4>Duff Beer</h4>
                        <span className="desination">Marketting</span>
                      </div>
                    </div>
                    <div className="popular-jobs-box-extra">
                      <ul>
                        <li>Php</li>
                        <li>Android</li>
                        <li>Html</li>
                        <li className="more-skill bg-primary">+3</li>
                      </ul>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui.
                      </p>
                    </div>
                  </div>
                  <a
                    href="job-detail-2.html"
                    className="btn btn-popular-jobs bt-1"
                  >
                    View Detail
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="popular-jobs-container">
                  <div className="popular-jobs-box">
                    <span className="popular-jobs-status bg-info">Weekly</span>
                    <h4 className="flc-rate">$200/We</h4>
                    <div className="popular-jobs-box">
                      <div className="popular-jobs-box-detail">
                        <h4>Cyberdyne Systems</h4>
                        <span className="desination">Human Resource</span>
                      </div>
                    </div>
                    <div className="popular-jobs-box-extra">
                      <ul>
                        <li>Php</li>
                        <li>Android</li>
                        <li>Html</li>
                        <li className="more-skill bg-primary">+3</li>
                      </ul>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui.
                      </p>
                    </div>
                  </div>
                  <a
                    href="job-detail-2.html"
                    className="btn btn-popular-jobs bt-1"
                  >
                    View Detail
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="popular-jobs-container">
                  <div className="popular-jobs-box">
                    <span className="popular-jobs-status bg-danger">
                      Yearly
                    </span>
                    <h4 className="flc-rate">$2000/Pa</h4>
                    <div className="popular-jobs-box">
                      <div className="popular-jobs-box-detail">
                        <h4>Wayne Enterprises</h4>
                        <span className="desination">App Designer</span>
                      </div>
                    </div>
                    <div className="popular-jobs-box-extra">
                      <ul>
                        <li>Php</li>
                        <li>Android</li>
                        <li>Html</li>
                        <li className="more-skill bg-primary">+3</li>
                      </ul>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui.
                      </p>
                    </div>
                  </div>
                  <a
                    href="job-detail-2.html"
                    className="btn btn-popular-jobs bt-1"
                  >
                    View Detail
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="popular-jobs-container">
                  <div className="popular-jobs-box">
                    <span className="popular-jobs-status bg-warning">
                      monthly
                    </span>
                    <h4 className="flc-rate">$480/Mo</h4>
                    <div className="popular-jobs-box">
                      <div className="popular-jobs-box-detail">
                        <h4>Gekko &amp; Co</h4>
                        <span className="desination">Data Analysist</span>
                      </div>
                    </div>
                    <div className="popular-jobs-box-extra">
                      <ul>
                        <li>Php</li>
                        <li>Android</li>
                        <li>Html</li>
                        <li className="more-skill bg-primary">+3</li>
                      </ul>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui.
                      </p>
                    </div>
                  </div>
                  <a
                    href="job-detail-2.html"
                    className="btn btn-popular-jobs bt-1"
                  >
                    View Detail
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="popular-jobs-container">
                  <div className="popular-jobs-box">
                    <span className="popular-jobs-status bg-success">
                      hourly
                    </span>
                    <h4 className="flc-rate">$17/hr</h4>
                    <div className="popular-jobs-box">
                      <div className="popular-jobs-box-detail">
                        <h4>Ollivander's Shop</h4>
                        <span className="desination">Graphic Designer</span>
                      </div>
                    </div>
                    <div className="popular-jobs-box-extra">
                      <ul>
                        <li>Php</li>
                        <li>Android</li>
                        <li>Html</li>
                        <li className="more-skill bg-primary">+3</li>
                      </ul>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui.
                      </p>
                    </div>
                  </div>
                  <a
                    href="job-detail-2.html"
                    className="btn btn-popular-jobs bt-1"
                  >
                    View Detail
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="popular-jobs-container">
                  <div className="popular-jobs-box">
                    <span className="popular-jobs-status bg-info">weekly</span>
                    <h4 className="flc-rate">$178/We</h4>
                    <div className="popular-jobs-box">
                      <div className="popular-jobs-box-detail">
                        <h4>Stark Industries</h4>
                        <span className="desination">Project Manager</span>
                      </div>
                    </div>
                    <div className="popular-jobs-box-extra">
                      <ul>
                        <li>Php</li>
                        <li>Android</li>
                        <li>Html</li>
                        <li className="more-skill bg-primary">+3</li>
                      </ul>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui.
                      </p>
                    </div>
                  </div>
                  <a
                    href="job-detail-2.html"
                    className="btn btn-popular-jobs bt-1"
                  >
                    View Detail
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="popular-jobs-container">
                  <div className="popular-jobs-box">
                    <span className="popular-jobs-status bg-success">
                      hourly
                    </span>
                    <h4 className="flc-rate">$17/hr</h4>
                    <div className="popular-jobs-box">
                      <div className="popular-jobs-box-detail">
                        <h4>Acme Corp</h4>
                        <span className="desination">Web Designer</span>
                      </div>
                    </div>
                    <div className="popular-jobs-box-extra">
                      <ul>
                        <li>Php</li>
                        <li>Android</li>
                        <li>Html</li>
                        <li className="more-skill bg-primary">+3</li>
                      </ul>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui.
                      </p>
                    </div>
                  </div>
                  <a
                    href="job-detail-2.html"
                    className="btn btn-popular-jobs bt-1"
                  >
                    View Detail
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="popular-jobs-container">
                  <div className="popular-jobs-box">
                    <span className="popular-jobs-status bg-danger">
                      yearly
                    </span>
                    <h4 className="flc-rate">$2700/Pa</h4>
                    <div className="popular-jobs-box">
                      <div className="popular-jobs-box-detail">
                        <h4>Wonka Industries</h4>
                        <span className="desination">Manager</span>
                      </div>
                    </div>
                    <div className="popular-jobs-box-extra">
                      <ul>
                        <li>Php</li>
                        <li>Android</li>
                        <li>Html</li>
                        <li className="more-skill bg-primary">+3</li>
                      </ul>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui.
                      </p>
                    </div>
                  </div>
                  <a
                    href="job-detail-2.html"
                    className="btn btn-popular-jobs bt-1"
                  >
                    View Detail
                  </a>
                </div>
              </div>
              <div className="col-md-12 col-sm-12">
                <div className="text-center">
                  <a href="#" className="btn btn-primary">
                    Load More
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

export default PopularJobs;

export { PopularJobs };
