function HomeHero () {
  return (
    <>
      <div className="clearfix"></div>
        <div className="banner trans" style={{backgroundImage: 'url(/images/slider-1.jpg)'}} data-overlay="6">
            <div className="container">
                <div className="banner-caption">
                    <div className="col-md-12 col-sm-12 banner-text">
                        <h1>7,000+ Browse Jobs</h1>
                        <div className="full-search-2 eclip-search italian-search hero-search-radius">
							<div className="hero-search-content">
								
								<div className="row">
								
									<div className="col-lg-4 col-md-4 col-sm-12 small-padd b-r">
										<div className="form-group">
											<div className="input-with-icon">
												<input type="text" className="form-control" placeholder="Job Title or Keywords" />
												<i className="ti-search"></i>
											</div>
										</div>
									</div>
									
									<div className="col-lg-3 col-md-3 col-sm-12 small-padd b-r">
										<div className="form-group">
											<div className="input-with-icon">
												<select id="choose-city" className="form-control select2-hidden-accessible" data-select2-id="choose-city" tabindex="-1" aria-hidden="true">
													<option data-select2-id="2">Choose City</option>
													<option>Chandigarh</option>
													<option>London</option>
													<option>England</option>
													<option>Pratapcity</option>
													<option>Ukrain</option>
													<option>Wilangana</option>
												</select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="1" style={{width: '280px'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-choose-city-container"><span className="select2-selection__rendered" id="select2-choose-city-container" role="textbox" aria-readonly="true" title="Choose City">Choose City</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
												<i className="ti-location-pin"></i>
											</div>
										</div>
									</div>
		
									<div className="col-lg-3 col-md-3 col-sm-12 small-padd">
										<div className="form-group">
										<div className="input-with-icon">
											<select id="choose-category" className="form-control select2-hidden-accessible" data-select2-id="choose-category" tabindex="-1" aria-hidden="true">
												<option data-select2-id="4">Job Category</option>
												<option>Education &amp; Trainee</option>
												<option>Sales &amp; Marketing</option>
												<option>Automotive Jobs</option>
												<option>Health &amp; Medical</option>
												<option>Design &amp; Development</option>
												<option>Book Services</option>
											</select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="3" style={{width: '281px'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-choose-category-container"><span className="select2-selection__rendered" id="select2-choose-category-container" role="textbox" aria-readonly="true" title="Job Category">Job Category</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
											<i className="ti-layers"></i>
										</div>
									</div>
									</div>
									
									<div className="col-lg-2 col-md-2 col-sm-12 small-padd">
										<div className="form-group">
											<div className="form-group">
												<a href="https://codeminifier.com/job-stock-5.4.1/job-stock/index.html#" className="btn btn-primary search-btn">Search</a>
											</div>
										</div>
									</div>
									
								</div>
								
							</div>
						</div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="clearfix"></div>
    </>
  )
}

export { HomeHero }
