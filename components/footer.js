import React from 'react';

export default class Footer extends React.Component {
	render() {
		return (
			<footer className="footer-area section-padding">
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.2s">
							<h3>
								<img src="assets/img/thumbnail.png" alt="" />
							</h3>
							<p>A Registered non profit sports club</p>
						</div>
						<div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.4s">
							<h3>QUICK LINKS</h3>
							<ul>
								<li>
									<a href="#about">About Us</a>
								</li>
								<li>
									<a href="#team">Team</a>
								</li>
								<li>
									<a href="#schedules">Upcoming Events</a>
								</li>
							</ul>
						</div>
						<div className="widget">
							<h5 className="widget-title">FOLLOW US ON</h5>
							<ul className="footer-social">
								<li>
									<a className="facebook" href="https://www.facebook.com/BCSKI/">
										<i className="lni-facebook-filled"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
