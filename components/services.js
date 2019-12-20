import React from 'react';

export default class Services extends React.Component {
	render() {
		return (
			<section id="services" className="services section-padding">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="section-title-header text-center">
								<h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">
									Why play with us?
								</h1>
								<p className="wow fadeInDown" data-wow-delay="0.2s">
									Super Kings Advantage
								</p>
							</div>
						</div>
					</div>
					<div className="row services-wrapper">
						<div className="col-md-6 col-lg-4 col-xs-12 padding-none">
							<div className="services-item wow fadeInDown" data-wow-delay="0.2s">
								<div className="icon">
									<i className="lni-heart"></i>
								</div>
								<div className="services-content">
									<h3>
										<a href="#">Multisport</a>
									</h3>
									<p>Cricket, Volleyball, Badmiton, Tennis, Athletics and more..</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 col-xs-12 padding-none">
							<div className="services-item wow fadeInDown" data-wow-delay="0.4s">
								<div className="icon">
									<i className="lni-gallery"></i>
								</div>
								<div className="services-content">
									<h3>
										<a href="#">Networking</a>
									</h3>
									<p>Lot of socializing and networking opportunities.</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 col-xs-12 padding-none">
							<div className="services-item wow fadeInDown" data-wow-delay="0.6s">
								<div className="icon">
									<i className="lni-envelope"></i>
								</div>
								<div className="services-content">
									<h3>
										<a href="#">Professional Training</a>
									</h3>
									<p> Work towards your goal with coaches and trainers.</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 col-xs-12 padding-none">
							<div className="services-item wow fadeInDown" data-wow-delay="0.8s">
								<div className="icon">
									<i className="lni-cup"></i>
								</div>
								<div className="services-content">
									<h3>
										<a href="#">Tournaments</a>
									</h3>
									<p>Tournaments and championships!</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 col-xs-12 padding-none">
							<div className="services-item wow fadeInDown" data-wow-delay="1s">
								<div className="icon">
									<i className="lni-user"></i>
								</div>
								<div className="services-content">
									<h3>
										<a href="#">Accountability</a>
									</h3>
									<p>We are a registered non-profit and comply to the by-laws</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 col-xs-12 padding-none">
							<div className="services-item wow fadeInDown" data-wow-delay="1.2s">
								<div className="icon">
									<i className="lni-bubble"></i>
								</div>
								<div className="services-content">
									<h3>
										<a href="#">Scholarship</a>
									</h3>
									<p>We provide sponsorship and scholarship to promising members</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
