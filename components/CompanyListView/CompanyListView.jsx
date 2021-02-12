function CompanyListView() {
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
                  style={{ width: "200px" }}
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

        <div className="item-click">
          <article>
            <div className="brows-job-list">
              <div className="col-md-6 col-sm-6">
                <div className="item-fl-box">
                  <div className="brows-job-company-img">
                    <a href="job-detail.html">
                      <img
                        src="/images/com-1.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="brows-job-position">
                    <h3>
                      <a href="job-apply-detail.html">
                        Digital Marketing Manager
                      </a>
                    </h3>
                    <p>
                      <span>Autodesk</span>
                      <span className="brows-job-sallery">
                        <i className="fa fa-money"></i>$750 - 800
                      </span>
                      <span className="job-type cl-success bg-trans-success">
                        Full Time
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="brows-job-location">
                  <p>
                    <i className="fa fa-map-marker"></i>QBL Park, C40
                  </p>
                </div>
              </div>
              <div className="col-md-2 col-sm-2">
                <div className="brows-job-link">
                  <a href="job-apply-detail.html" className="btn btn-default">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
            <span className="tg-themetag tg-featuretag">Premium</span>
          </article>
        </div>

        <div className="item-click">
          <article>
            <div className="brows-job-list">
              <div className="col-md-6 col-sm-6">
                <div className="item-fl-box">
                  <div className="brows-job-company-img">
                    <a href="job-detail.html">
                      <img
                        src="/images/com-2.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="brows-job-position">
                    <h3>
                      <a href="job-apply-detail.html">Compensation Analyst</a>
                    </h3>
                    <p>
                      <span>Google</span>
                      <span className="brows-job-sallery">
                        <i className="fa fa-money"></i>$810 - 900
                      </span>
                      <span className="job-type bg-trans-warning cl-warning">
                        Part Time
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="brows-job-location">
                  <p>
                    <i className="fa fa-map-marker"></i>QBL Park, C40
                  </p>
                </div>
              </div>
              <div className="col-md-2 col-sm-2">
                <div className="brows-job-link">
                  <a href="job-apply-detail.html" className="btn btn-default">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="item-click">
          <article>
            <div className="brows-job-list">
              <div className="col-md-6 col-sm-6">
                <div className="item-fl-box">
                  <div className="brows-job-company-img">
                    <a href="job-detail.html">
                      <img
                        src="/images/com-3.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="brows-job-position">
                    <h3>
                      <a href="job-apply-detail.html">Investment Banker</a>
                    </h3>
                    <p>
                      <span>Honda</span>
                      <span className="brows-job-sallery">
                        <i className="fa fa-money"></i>$800 - 910
                      </span>
                      <span className="job-type bg-trans-primary cl-primary">
                        Freelancer
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="brows-job-location">
                  <p>
                    <i className="fa fa-map-marker"></i>QBL Park, C40
                  </p>
                </div>
              </div>
              <div className="col-md-2 col-sm-2">
                <div className="brows-job-link">
                  <a href="job-apply-detail.html" className="btn btn-default">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
            <span className="tg-themetag tg-featuretag">Premium</span>
          </article>
        </div>

        <div className="item-click">
          <article>
            <div className="brows-job-list">
              <div className="col-md-6 col-sm-6">
                <div className="item-fl-box">
                  <div className="brows-job-company-img">
                    <a href="job-detail.html">
                      <img
                        src="/images/com-4.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="brows-job-position">
                    <h3>
                      <a href="job-apply-detail.html">Financial Analyst</a>
                    </h3>
                    <p>
                      <span>Microsoft</span>
                      <span className="brows-job-sallery">
                        <i className="fa fa-money"></i>$580 - 600
                      </span>
                      <span className="job-type bg-trans-success cl-success">
                        Full Time
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="brows-job-location">
                  <p>
                    <i className="fa fa-map-marker"></i>QBL Park, C40
                  </p>
                </div>
              </div>
              <div className="col-md-2 col-sm-2">
                <div className="brows-job-link">
                  <a href="job-apply-detail.html" className="btn btn-default">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="item-click">
          <article>
            <div className="brows-job-list">
              <div className="col-md-6 col-sm-6">
                <div className="item-fl-box">
                  <div className="brows-job-company-img">
                    <a href="job-detail.html">
                      <img
                        src="/images/com-5.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="brows-job-position">
                    <h3>
                      <a href="job-apply-detail.html">Service Representative</a>
                    </h3>
                    <p>
                      <span>Autodesk</span>
                      <span className="brows-job-sallery">
                        <i className="fa fa-money"></i>$800 - 900
                      </span>
                      <span className="job-type bg-trans-denger cl-danger">
                        Enternship
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="brows-job-location">
                  <p>
                    <i className="fa fa-map-marker"></i>QBL Park, C40
                  </p>
                </div>
              </div>
              <div className="col-md-2 col-sm-2">
                <div className="brows-job-link">
                  <a href="job-apply-detail.html" className="btn btn-default">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
            <span className="tg-themetag tg-featuretag">Premium</span>
          </article>
        </div>

        <div className="item-click">
          <article>
            <div className="brows-job-list">
              <div className="col-md-6 col-sm-6">
                <div className="item-fl-box">
                  <div className="brows-job-company-img">
                    <a href="job-detail.html">
                      <img
                        src="/images/com-6.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="brows-job-position">
                    <h3>
                      <a href="job-apply-detail.html">
                        Chief Executive Officer
                      </a>
                    </h3>
                    <p>
                      <span>Google</span>
                      <span className="brows-job-sallery">
                        <i className="fa fa-money"></i>$510 - 700
                      </span>
                      <span className="job-type bg-trans-success cl-success">
                        Full Time
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="brows-job-location">
                  <p>
                    <i className="fa fa-map-marker"></i>QBL Park, C40
                  </p>
                </div>
              </div>
              <div className="col-md-2 col-sm-2">
                <div className="brows-job-link">
                  <a href="job-apply-detail.html" className="btn btn-default">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="item-click">
          <article>
            <div className="brows-job-list">
              <div className="col-md-6 col-sm-6">
                <div className="item-fl-box">
                  <div className="brows-job-company-img">
                    <a href="job-detail.html">
                      <img
                        src="/images/com-7.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="brows-job-position">
                    <h3>
                      <a href="job-apply-detail.html">Administrative Manager</a>
                    </h3>
                    <p>
                      <span>Honda</span>
                      <span className="brows-job-sallery">
                        <i className="fa fa-money"></i>$700 - 800
                      </span>
                      <span className="job-type bg-trans-warning cl-warning">
                        Part Time
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="brows-job-location">
                  <p>
                    <i className="fa fa-map-marker"></i>QBL Park, C40
                  </p>
                </div>
              </div>
              <div className="col-md-2 col-sm-2">
                <div className="brows-job-link">
                  <a href="job-apply-detail.html" className="btn btn-default">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
            <span className="tg-themetag tg-featuretag">Premium</span>
          </article>
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

export { CompanyListView };
export default CompanyListView;
