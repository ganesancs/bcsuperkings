import React from 'react';
export default class Pricing extends React.Component {
	render() {
		return (
			<section id="pricing" className="section-padding">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="section-title-header text-center">
								<h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">
									Membership Fees{' '}
								</h1>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6 col-sm-6 col-xa-12 mb-4">
							<div className="price-block-wrapper wow fadeInLeft" data-wow-delay="0.2s">
								<div className="icon">
									<i className="lni-package"></i>
								</div>
								<div className="colmun-title">
									<h5>Family Membership</h5>
								</div>
								<div className="price">
									<h2>$20</h2>
								</div>
								<div className="pricing-list">
									<ul>
										<li>
											<i className="lni-check-mark-circle"></i>
											<span className="text">2 adults + 2 Kids(below 12 Years)</span>
										</li>
										<li>
											<i className="lni-check-mark-circle"></i>
											<span className="text">
												$5/per additional child or child 12 - 18 years{' '}
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-sm-6 col-xa-12 mb-4">
							<div className="price-block-wrapper wow fadeInUp" data-wow-delay="0.3s">
								<div className="icon">
									<i className="lni-leaf"></i>
								</div>
								<div className="colmun-title">
									<h5>Individual - Youth/Student(18-25 years)</h5>
								</div>
								<div className="price">
									<h2>$5</h2>
								</div>
								<div className="pricing-list">
									<ul>
										<li></li>
										<li></li>
										<li></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-sm-6 col-xa-12 mb-4">
							<div className="price-block-wrapper wow fadeInRight" data-wow-delay="0.4s">
								<div className="icon">
									<i className="lni-layers"></i>
								</div>
								<div className="colmun-title">
									<h5>Individual Adult(>25 years)</h5>
								</div>
								<div className="price">
									<h2>$15</h2>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-sm-6 col-xa-12 mb-4">
							<div className="price-block-wrapper wow fadeInRight" data-wow-delay="0.4s">
								<div className="icon">
									<i className="lni-basketball"></i>
								</div>
								<div className="colmun-title">
									<h5>Senior Members (>60 years)</h5>
								</div>
								<div className="price">
									<h2>FREE</h2>
								</div>
							</div>
						</div>
					</div>
					<div align="center">
						<a href="https://forms.gle/X7RXDZCEqjS2pcjC9" className="btn btn-common">
							Become a member
						</a>
					</div>
				</div>
			</section>
		);
	}
}
