function CompanyCarousel() {
  return(
    <div className="company-brand">
			<div className="container">
				<div id="company-brands" className="owl-carousel owl-theme" style={{ display: 'block', opacity: '1'}}>
					<div className="owl-wrapper-outer"><div className="owl-wrapper" style={{width: '3872px', left: '0', display: 'block', transition: 'all 1000ms ease 0s; transform: translate3d(0px, 0px, 0px)'}}><div className="owl-item" ><div className="brand-img">
						<img src="/images/microsoft-home-dark.png" className="img-responsive" alt="" />
					</div></div><div className="owl-item" style={{width: '242px'}}><div className="brand-img">
						<img src="/images/img-home-dark.png" className="img-responsive" alt="" />
					</div></div><div className="owl-item" style={{width: '242px'}}><div className="brand-img">
						<img src="/images/mothercare-hom-darke.png" className="img-responsive" alt="" />
					</div></div><div className="owl-item" style={{width: '242px'}}><div className="brand-img">
						<img src="/images/paypal-home-dark.png" className="img-responsive" alt="" />
					</div></div><div className="owl-item" style={{width: '242px'}}><div className="brand-img">
						<img src="/images/serv-home-dark.png" className="img-responsive" alt="" />
					</div></div><div className="owl-item" style={{width: '242px'}}><div className="brand-img">
						<img src="/images/xerox-home-dark.png" className="img-responsive" alt="" />
					</div></div><div className="owl-item" style={{width: '242px'}}><div className="brand-img">
						<img src="/images/yahoo-home-dark.png" className="img-responsive" alt="" />
					</div></div><div className="owl-item" style={{width: '242px'}}><div className="brand-img">
						<img src="/images/mothercare-hom-darke.png" className="img-responsive" alt="" />
					</div></div></div></div>
				</div>
			</div>
		</div>
  )
}

export { CompanyCarousel }