function LeftFilter() {
  return (
    <div className="full-sidebar-wrap">
      <a
        href="javascript:void(0)"
        onclick="openNav()"
        className="btn btn-dark full-width mrg-bot-20 hidden-lg hidden-md hidden-xl"
      >
        <i className="ti-filter mrg-r-5"></i>Filter Search
      </a>

      <a
        href="javascript:void(0)"
        className="btn btn-info full-width mrg-bot-20"
        data-toggle="modal"
        data-target="#job-alert"
      >
        Get Job Alert!
      </a>

      <div className="show-hide-sidebar hidden-xs hidden-sm">
        <div className="sidebar-widgets">
          <div className="ur-detail-wrap">
            <div className="ur-detail-wrap-header">
              <h4>Search Job Here</h4>
            </div>
            <div className="ur-detail-wrap-body">
              <form>
                <div className="form-group">
                  <label>Keyword</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Job Title or Keyword"
                  />
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ex. New York"
                  />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select
                    id="choose-category"
                    className="form-control select2-hidden-accessible"
                    data-select2-id="choose-category"
                    tabindex="-1"
                    aria-hidden="true"
                  >
                    <option data-select2-id="4">Choose Category</option>
                    <option>Banking Job</option>
                    <option>IT / Software</option>
                    <option>Medical &amp; Hospital</option>
                    <option>Networking</option>
                    <option>Automotive</option>
                    <option>Business Development</option>
                  </select>
                  <span
                    className="select2 select2-container select2-container--default"
                    dir="ltr"
                    data-select2-id="3"
                    style={{ width: "323px" }}
                  >
                    <span className="selection">
                      <span
                        className="select2-selection select2-selection--single"
                        role="combobox"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabindex="0"
                        aria-labelledby="select2-choose-category-container"
                      >
                        <span
                          className="select2-selection__rendered"
                          id="select2-choose-category-container"
                          role="textbox"
                          aria-readonly="true"
                          title="Choose Category"
                        >
                          Choose Category
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
                <button type="submit" className="btn btn-primary full-width">
                  Find Jobs
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="sidebar-widgets">
          <div className="ur-detail-wrap">
            <div className="ur-detail-wrap-header">
              <h4>Top Designation</h4>
            </div>
            <div className="ur-detail-wrap-body">
              <ul className="advance-list">
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="aw" />
                    <label for="aw"></label>
                  </span>
                  Project Manager
                  <span className="pull-right">102</span>
                </li>
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="dd" />
                    <label for="dd"></label>
                  </span>
                  Business Executive
                  <span className="pull-right">78</span>
                </li>
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="er" />
                    <label for="er"></label>
                  </span>
                  Supervisor
                  <span className="pull-right">12</span>
                </li>
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="tr" />
                    <label for="tr"></label>
                  </span>
                  Team Leader
                  <span className="pull-right">85</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sidebar-widgets">
          <div className="ur-detail-wrap">
            <div className="ur-detail-wrap-header">
              <h4>Experince</h4>
            </div>
            <div className="ur-detail-wrap-body">
              <ul className="advance-list">
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="uy" />
                    <label for="uy"></label>
                  </span>
                  0 - 1 Year
                  <span className="pull-right">102</span>
                </li>
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="io" />
                    <label for="io"></label>
                  </span>
                  1 - 2 Year
                  <span className="pull-right">78</span>
                </li>
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="lo" />
                    <label for="lo"></label>
                  </span>
                  2 - 4 Year
                  <span className="pull-right">12</span>
                </li>
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="kj" />
                    <label for="kj"></label>
                  </span>
                  4 - 6 Year
                  <span className="pull-right">85</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sidebar-widgets">
          <div className="ur-detail-wrap colps-wrap">
            <div className="ur-detail-wrap-header">
              <h4
                className="colps-head collapsed"
                data-toggle="collapse"
                href="#jb-types"
                role="button"
                aria-expanded="false"
                aria-controls="jb-types"
              >
                Job Type
              </h4>
            </div>
            <div
              className="collapse"
              id="jb-types"
              aria-expanded="false"
              style={{ height: "0px" }}
            >
              <div className="ur-detail-wrap-body">
                <ul className="advance-list">
                  <li>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="1" />
                      <label for="1"></label>
                    </span>
                    Full Time
                    <span className="pull-right">102</span>
                  </li>
                  <li>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="2" />
                      <label for="2"></label>
                    </span>
                    Part Time
                    <span className="pull-right">78</span>
                  </li>
                  <li>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="3" />
                      <label for="3"></label>
                    </span>
                    Internship
                    <span className="pull-right">12</span>
                  </li>
                  <li>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="4" />
                      <label for="4"></label>
                    </span>
                    Freelancer
                    <span className="pull-right">85</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar-widgets">
          <div className="ur-detail-wrap colps-wrap">
            <div className="ur-detail-wrap-header">
              <h4
                className="colps-head collapsed"
                data-toggle="collapse"
                href="#jb-location"
                role="button"
                aria-expanded="false"
                aria-controls="jb-location"
              >
                Popular Locations
              </h4>
            </div>
            <div className="collapse" id="jb-location">
              <div className="ur-detail-wrap-body">
                <ul className="advance-list">
                  <li>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="1" />
                      <label for="1"></label>
                    </span>
                    Mohali
                    <span className="pull-right">102</span>
                  </li>

                  <li>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="2" />
                      <label for="2"></label>
                    </span>
                    Chandigarh
                    <span className="pull-right">78</span>
                  </li>

                  <li>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="3" />
                      <label for="3"></label>
                    </span>
                    Chennai
                    <span className="pull-right">12</span>
                  </li>

                  <li>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="4" />
                      <label for="4"></label>
                    </span>
                    Delhi
                    <span className="pull-right">85</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar-widgets">
          <div className="ur-detail-wrap colps-wrap">
            <div className="ur-detail-wrap-header">
              <h4
                className="colps-head collapsed"
                data-toggle="collapse"
                href="#jb-Compensation"
                role="button"
                aria-expanded="false"
                aria-controls="jb-Compensation"
              >
                Compensation
              </h4>
            </div>
            <div className="collapse" id="jb-Compensation">
              <div className="ur-detail-wrap-body">
                <ul className="advance-list">
                  <li>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="1" />
                      <label for="1"></label>
                    </span>
                    Under $10,000
                    <span className="pull-right">102</span>
                  </li>
                  <li>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="2" />
                      <label for="2"></label>
                    </span>
                    $10,000 - $15,000
                    <span className="pull-right">78</span>
                  </li>
                  <li>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="3" />
                      <label for="3"></label>
                    </span>
                    $15,000 - $20,000
                    <span className="pull-right">12</span>
                  </li>
                  <li>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="4" />
                      <label for="4"></label>
                    </span>
                    $20,000 - $30,000
                    <span className="pull-right">85</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftFilter;
export { LeftFilter };
