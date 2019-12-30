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
									<a href="/events">Upcoming Events</a>
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
				<div id="copyright">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="site-info">
									<p>© BC Super Kings 2019 - 2020</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<a href="#" className="back-to-top">
					<i className="lni-chevron-up"></i>
				</a>
			</footer>
		);
	}
}
