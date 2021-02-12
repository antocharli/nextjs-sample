import Link from "next/link";

function Header() {
  return (
    <nav className="navbar navbar-default navbar-fixed navbar-light white bootsnav on no-full">
      <div className="container">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#navbar-menu"
        >
          <i className="fa fa-bars"></i>
        </button>
        <div className="navbar-header">
          <a
            className="navbar-brand"
            href="https://codeminifier.com/job-stock-5.4.1/job-stock/index.html"
          >
            <img src="/images/logo.png" className="logo logo-scrolled" alt="" />
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbar-menu">
          <ul
            className="nav navbar-nav navbar-left"
            data-in="fadeInDown"
            data-out="fadeOutUp"
          >
            <li className="active">
              <input
                type="text"
                className="form-control"
                placeholder="Find Freelancer"
              />
            </li>
            <li className="dropdown">
              <a
                href="https://codeminifier.com/job-stock-5.4.1/job-stock/login.html"
                className="dropdown-toggle"
                data-toggle="dropdown"
              >
                Home
              </a>
              <ul
                className="dropdown-menu animated fadeOutUp"
                style={{ display: "none", opacity: 1 }}
              >
                <li>
                  <Link href="/">Home Page 1</Link>
                </li>
                <li>
                  <Link href="/homepage2">Home Page 2</Link>
                </li>
                <li>
                  <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/index-3.html">
                    Home Page 3
                  </a>
                </li>
                <li>
                  <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/index-4.html">
                    Home Page 4
                  </a>
                </li>
                <li>
                  <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/index-5.html">
                    Home Page 5
                  </a>
                </li>
                <li>
                  <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/index-6.html">
                    Home Page 6
                  </a>
                </li>
                <li>
                  <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/freelancing.html">
                    Freelancing
                  </a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a
                href="https://codeminifier.com/job-stock-5.4.1/job-stock/login.html"
                className="dropdown-toggle"
                data-toggle="dropdown"
              >
                Jobs
              </a>
              <ul
                className="dropdown-menu animated fadeOutUp"
                style={{ display: "none", opacity: 1 }}
              >
                <li className="dropdown">
                  <a
                    href="https://codeminifier.com/job-stock-5.4.1/job-stock/index-6.html#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Job Listing
                  </a>
                  <ul className="dropdown-menu animated fadeOutUp">
                    <li>
                      <Link href="/browsejobs">Browse Jobs</Link>
                    </li>
                    <li>
                      <Link href="/browsejobswithfilter">
                        Browse Jobs With Sidebar
                      </Link>
                    </li>
                    <li>
                      <Link href="/jobsInGrid">Job In Grid</Link>
                    </li>
                    <li>
                      <Link href="/searchjobs">Search Job</Link>
                    </li>
                    <li>
                      <Link href="/popularjobs">Popular Jobs</Link>
                    </li>
                  </ul>
                </li>

                <li className="dropdown">
                  <a
                    href="https://codeminifier.com/job-stock-5.4.1/job-stock/index-6.html#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Job Detail
                  </a>
                  <ul className="dropdown-menu animated fadeOutUp">
                    <li>
                      <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/job-detail-1.html">
                        Job Detail 1
                      </a>
                    </li>
                    <li>
                      <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/job-detail-2.html">
                        Job Detail 2
                      </a>
                    </li>
                    <li>
                      <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/job-detail-3.html">
                        Job Detail 3
                      </a>
                    </li>
                    <li>
                      <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/advance-search.html">
                        Advance Search Job
                      </a>
                    </li>
                    <li>
                      <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/advance-search-2.html">
                        Advance Search Job 2
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/job-with-map.html">
                    Job With Map
                  </a>
                </li>
                <li>
                  <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/register.html">
                    SignUp Page
                  </a>
                </li>
                <li>
                  <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/dashboard/index.html">
                    Dashboard
                  </a>
                </li>
              </ul>
            </li>

            <li className="dropdown megamenu-fw">
              <a
                href="https://codeminifier.com/job-stock-5.4.1/job-stock/index-6.html#"
                className="dropdown-toggle"
                data-toggle="dropdown"
              >
                Brows
              </a>
              <ul
                className="dropdown-menu megamenu-content animated fadeOutUp"
                role="menu"
                style={{ display: "none", opacity: 1 }}
              >
                <li>
                  <div className="row">
                    <div className="col-menu col-md-3">
                      <h6 className="title">Main Pages</h6>
                      <div className="content">
                        <ul className="menu-col">
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/login.html">
                              New Login
                            </a>
                          </li>
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/signin-signup.html">
                              Sign In / Sign Up
                            </a>
                          </li>
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/search-job.html">
                              Search Job
                            </a>
                          </li>
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/accordion.html">
                              Accordion
                            </a>
                          </li>
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/tab.html">
                              Tab Style
                            </a>
                          </li>
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/blog.html">
                              Blog
                            </a>
                          </li>
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/pricing.html">
                              Pricing
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-menu col-md-3">
                      <h6 className="title">For Candidate</h6>
                      <div className="content">
                        <ul className="menu-col">
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/candidate-dashboard.html">
                              Candidate Dashboard
                            </a>
                          </li>
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/browse-candidate-list.html">
                              Browse Candidates
                            </a>
                          </li>
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/manage-candidate.html">
                              Browse Candidate
                            </a>
                          </li>
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/top-candidate.html">
                              Top candidate
                            </a>
                          </li>
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/candidate-profile.html">
                              Candidate Detail
                            </a>
                          </li>
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/candidate-detail.html">
                              New Candidate Detail
                            </a>
                          </li>
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/browse-resume-grid.html">
                              Browse Candidate Grid
                            </a>
                          </li>
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/browse-candidate-map.html">
                              Browse Candidate With Map
                            </a>
                          </li>
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/browse-resume.html">
                              Browse Resume
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-menu col-md-3">
                      <h6 className="title">For Employer</h6>
                      <div className="content">
                        <ul className="menu-col">
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/dashboard.html">
                              Employer Dashboard
                            </a>
                          </li>
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/browse-employer-list.html">
                              Employer With Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/browse-company.html">
                              Browse Companies
                            </a>
                          </li>
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/company-detail.html">
                              Company Detail
                            </a>
                          </li>
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/create-job.html">
                              Create Job
                            </a>
                          </li>
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/create-company.html">
                              Create Company
                            </a>
                          </li>
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/manage-company.html">
                              Manage Company
                            </a>
                          </li>
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/manage-employee.html">
                              Manage Employee
                            </a>
                          </li>
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/employer-profile.html">
                              Employer Profile
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-menu col-md-3">
                      <h6 className="title">
                        Extra Pages <span className="new-offer">New</span>
                      </h6>
                      <div className="content">
                        <ul className="menu-col">
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/top-candidate-detail.html">
                              Top Candidate detail
                            </a>
                          </li>
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/payment-methode.html">
                              Payment Methode
                            </a>
                          </li>
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/new-login-signup.html">
                              New LogIn / SignUp
                            </a>
                          </li>
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/top-candidate-2.html">
                              Top candidate 2
                            </a>
                          </li>
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/premium-candidate.html">
                              Premium Candidate
                            </a>
                          </li>
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/premium-candidate-detail.html">
                              Premium Candidate Detail
                            </a>
                          </li>
                          <li>
                            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/contact.html">
                              Get in Touch
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
          <ul
            className="nav navbar-nav navbar-right"
            data-in="fadeInDown"
            data-out="fadeOutUp"
          >
            <li>
              <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/login.html">
                <i className="fa fa-pencil" aria-hidden="true"></i>SignUp
              </a>
            </li>
            <li className="left-br">
              <a
                href="javascript:void(0)"
                data-toggle="modal"
                data-target="#signup"
                className="signin"
              >
                Sign In Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export { Header };
