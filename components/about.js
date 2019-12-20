import React from 'react';

export default class About extends React.Component {
	render() {
		return (
			<section id="about" className="section-padding">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="section-title-header text-center">
								<h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">
									About Us
								</h1>
								<p className="wow fadeInDown" data-wow-delay="0.2s">
									BC Super Kings
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12 col-md-6 col-lg-4">
							<div className="about-item">
								<img className="img-fluid" src="assets/img/about/img1.jpg" alt="" />
								<div className="about-text">
									<h3>
										<a href="#">Our Mission</a>
									</h3>
									<p>
										Develop, select, support, and manage teams of British Columbia Super Kings
										Sports Club athletes to represent in school, community, provincial and national
										levels.
									</p>
								</div>
							</div>
						</div>
						<div className="col-xs-12 col-md-6 col-lg-4">
							<div className="about-item">
								<img className="img-fluid" src="assets/img/about/img2.jpg" alt="" />
								<div className="about-text">
									<h3>
										<a href="#">Our Vision</a>
									</h3>
									<p>
										To assist with the identification and development of sports facilities which
										will cater the community in the Province of British Columbia.
									</p>
								</div>
							</div>
						</div>
						<div className="col-xs-12 col-md-6 col-lg-4">
							<div className="about-item">
								<img className="img-fluid" src="assets/img/about/img3.jpg" alt="" />
								<div className="about-text">
									<h3>
										<a href="#">Values</a>
									</h3>
									<p>
										We want to promote, encourage, and develop the widest participation in sports.
										We are Transparent, Accountable, Responsible and Passionate!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
