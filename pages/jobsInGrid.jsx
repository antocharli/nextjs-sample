function JobsInGrid() {
  return (
    <section>
      <div className="container">
        <div className="row extra-mrg">
          <div className="wrap-search-filter">
            <form>
              <div className="col-md-4 col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Keyword: Name, Tag"
                />
              </div>
              <div className="col-md-3 col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Location: City, State, Zip"
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
                  <span className="dropdown-wrapper" aria-hidden="true"></span>
                </span>
              </div>
              <div className="col-md-2 col-sm-2">
                <button type="submit" className="btn btn-primary full-width">
                  Filter
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="row extra-mrg">
          <div className="col-md-4 col-sm-6">
            <div className="grid-view brows-job-list">
              <div className="brows-job-company-img">
                <img
                  src="/images/com-1.jpg"
                  className="img-responsive"
                  alt=""
                />
              </div>
              <div className="brows-job-position">
                <h3>
                  <a href="job-detail.html">Web Developer</a>
                </h3>
                <p>
                  <span>Google</span>
                </p>
              </div>
              <div className="job-position">
                <span className="job-num">5 Position</span>
              </div>
              <div className="brows-job-type">
                <span className="full-time">Full Time</span>
              </div>
              <ul className="grid-view-caption">
                <li>
                  <div className="brows-job-location">
                    <p>
                      <i className="fa fa-map-marker"></i>QBL Park, C40
                    </p>
                  </div>
                </li>
                <li>
                  <p>
                    <span className="brows-job-sallery">
                      <i className="fa fa-money"></i>$110 - 200
                    </span>
                  </p>
                </li>
              </ul>
              <span className="tg-themetag tg-featuretag">Premium</span>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="grid-view brows-job-list">
              <div className="brows-job-company-img">
                <img
                  src="/images/com-2.jpg"
                  className="img-responsive"
                  alt=""
                />
              </div>
              <div className="brows-job-position">
                <h3>
                  <a href="job-detail.html">Web Developer</a>
                </h3>
                <p>
                  <span>Google</span>
                </p>
              </div>
              <div className="job-position">
                <span className="job-num">5 Position</span>
              </div>
              <div className="brows-job-type">
                <span className="part-time">Part Time</span>
              </div>
              <ul className="grid-view-caption">
                <li>
                  <div className="brows-job-location">
                    <p>
                      <i className="fa fa-map-marker"></i>QBL Park, C40
                    </p>
                  </div>
                </li>
                <li>
                  <p>
                    <span className="brows-job-sallery">
                      <i className="fa fa-money"></i>$110 - 200
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="grid-view brows-job-list">
              <div className="brows-job-company-img">
                <img
                  src="/images/com-3.jpg"
                  className="img-responsive"
                  alt=""
                />
              </div>
              <div className="brows-job-position">
                <h3>
                  <a href="job-detail.html">Web Developer</a>
                </h3>
                <p>
                  <span>Google</span>
                </p>
              </div>
              <div className="job-position">
                <span className="job-num">5 Position</span>
              </div>
              <div className="brows-job-type">
                <span className="freelanc">Freelancer</span>
              </div>
              <ul className="grid-view-caption">
                <li>
                  <div className="brows-job-location">
                    <p>
                      <i className="fa fa-map-marker"></i>QBL Park, C40
                    </p>
                  </div>
                </li>
                <li>
                  <p>
                    <span className="brows-job-sallery">
                      <i className="fa fa-money"></i>$110 - 200
                    </span>
                  </p>
                </li>
              </ul>
              <span className="tg-themetag tg-featuretag">Premium</span>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="grid-view brows-job-list">
              <div className="brows-job-company-img">
                <img
                  src="/images/com-4.jpg"
                  className="img-responsive"
                  alt=""
                />
              </div>
              <div className="brows-job-position">
                <h3>
                  <a href="job-detail.html">Web Developer</a>
                </h3>
                <p>
                  <span>Google</span>
                </p>
              </div>
              <div className="job-position">
                <span className="job-num">5 Position</span>
              </div>
              <div className="brows-job-type">
                <span className="enternship">Enternship</span>
              </div>
              <ul className="grid-view-caption">
                <li>
                  <div className="brows-job-location">
                    <p>
                      <i className="fa fa-map-marker"></i>QBL Park, C40
                    </p>
                  </div>
                </li>
                <li>
                  <p>
                    <span className="brows-job-sallery">
                      <i className="fa fa-money"></i>$110 - 200
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="grid-view brows-job-list">
              <div className="brows-job-company-img">
                <img
                  src="/images/com-5.jpg"
                  className="img-responsive"
                  alt=""
                />
              </div>
              <div className="brows-job-position">
                <h3>
                  <a href="job-detail.html">Web Developer</a>
                </h3>
                <p>
                  <span>Google</span>
                </p>
              </div>
              <div className="job-position">
                <span className="job-num">5 Position</span>
              </div>
              <div className="brows-job-type">
                <span className="full-time">Full Time</span>
              </div>
              <ul className="grid-view-caption">
                <li>
                  <div className="brows-job-location">
                    <p>
                      <i className="fa fa-map-marker"></i>QBL Park, C40
                    </p>
                  </div>
                </li>
                <li>
                  <p>
                    <span className="brows-job-sallery">
                      <i className="fa fa-money"></i>$110 - 200
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="grid-view brows-job-list">
              <div className="brows-job-company-img">
                <img
                  src="/images/com-6.jpg"
                  className="img-responsive"
                  alt=""
                />
              </div>
              <div className="brows-job-position">
                <h3>
                  <a href="job-detail.html">Web Developer</a>
                </h3>
                <p>
                  <span>Google</span>
                </p>
              </div>
              <div className="job-position">
                <span className="job-num">5 Position</span>
              </div>
              <div className="brows-job-type">
                <span className="part-time">Part Time</span>
              </div>
              <ul className="grid-view-caption">
                <li>
                  <div className="brows-job-location">
                    <p>
                      <i className="fa fa-map-marker"></i>QBL Park, C40
                    </p>
                  </div>
                </li>
                <li>
                  <p>
                    <span className="brows-job-sallery">
                      <i className="fa fa-money"></i>$110 - 200
                    </span>
                  </p>
                </li>
              </ul>
              <span className="tg-themetag tg-featuretag">Premium</span>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="grid-view brows-job-list">
              <div className="brows-job-company-img">
                <img
                  src="/images/com-6.jpg"
                  className="img-responsive"
                  alt=""
                />
              </div>
              <div className="brows-job-position">
                <h3>
                  <a href="job-detail.html">Web Developer</a>
                </h3>
                <p>
                  <span>Google</span>
                </p>
              </div>
              <div className="job-position">
                <span className="job-num">5 Position</span>
              </div>
              <div className="brows-job-type">
                <span className="full-time">Full Time</span>
              </div>
              <ul className="grid-view-caption">
                <li>
                  <div className="brows-job-location">
                    <p>
                      <i className="fa fa-map-marker"></i>QBL Park, C40
                    </p>
                  </div>
                </li>
                <li>
                  <p>
                    <span className="brows-job-sallery">
                      <i className="fa fa-money"></i>$110 - 200
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="grid-view brows-job-list">
              <div className="brows-job-company-img">
                <img
                  src="/images/com-7.jpg"
                  className="img-responsive"
                  alt=""
                />
              </div>
              <div className="brows-job-position">
                <h3>
                  <a href="job-detail.html">Web Developer</a>
                </h3>
                <p>
                  <span>Google</span>
                </p>
              </div>
              <div className="job-position">
                <span className="job-num">5 Position</span>
              </div>
              <div className="brows-job-type">
                <span className="freelanc">Freelancer</span>
              </div>
              <ul className="grid-view-caption">
                <li>
                  <div className="brows-job-location">
                    <p>
                      <i className="fa fa-map-marker"></i>QBL Park, C40
                    </p>
                  </div>
                </li>
                <li>
                  <p>
                    <span className="brows-job-sallery">
                      <i className="fa fa-money"></i>$110 - 200
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="grid-view brows-job-list">
              <div className="brows-job-company-img">
                <img
                  src="/images/com-1.jpg"
                  className="img-responsive"
                  alt=""
                />
              </div>
              <div className="brows-job-position">
                <h3>
                  <a href="job-detail.html">Web Developer</a>
                </h3>
                <p>
                  <span>Google</span>
                </p>
              </div>
              <div className="job-position">
                <span className="job-num">5 Position</span>
              </div>
              <div className="brows-job-type">
                <span className="enternship">Enternship</span>
              </div>
              <ul className="grid-view-caption">
                <li>
                  <div className="brows-job-location">
                    <p>
                      <i className="fa fa-map-marker"></i>QBL Park, C40
                    </p>
                  </div>
                </li>
                <li>
                  <p>
                    <span className="brows-job-sallery">
                      <i className="fa fa-money"></i>$110 - 200
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <ul className="pagination">
            <li>
              <a href="#">
                <i className="ti-arrow-left"></i>
              </a>
            </li>
            <li className="active">
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-ellipsis-h"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ti-arrow-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default JobsInGrid;
export { JobsInGrid };
