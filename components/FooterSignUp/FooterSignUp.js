function FooterSignUp() {
  return (
    <>
      <section className="theme-bg call-to-act-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="call-to-act">
                <div className="call-to-act-head">
                  <h3>Want to Become a Success Employers?</h3>
                  <span>We'll help you to grow your career and growth.</span>
                </div>
                <a
                  href="https://codeminifier.com/job-stock-5.4.1/job-stock/index.html#"
                  className="btn btn-call-to-act"
                >
                  SignUp Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="before-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="jb4-form-fields">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email address"
                  />
                  <span className="input-group-btn">
                    <button className="btn theme-bg" type="submit">
                      <span className="fa fa-paper-plane-o"></span>
                    </button>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-6 hill">
              <ul className="job stock-facts">
                <li>
                  <span>2744</span>
                  <br />
                  Jobs Posted
                </li>
                <li>
                  <span>2365</span>
                  <br />
                  Jobs Posted
                </li>
                <li>
                  <span>2021</span>
                  <br />
                  Freelancer
                </li>
                <li>
                  <span>7542</span>
                  <br />
                  Companies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { FooterSignUp };
