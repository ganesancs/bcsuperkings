import React from 'react';

export default class Carousel extends React.Component {
	render() {
		return (
			<div id="main-slide" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#main-slide" data-slide-to="0" className="active"></li>
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img className="d-block w-100" src="assets/img/slider/slide1.jpg" alt="First slide" />
						<div className="carousel-caption d-md-block">
							<h1 className="wow fadeInDown heading" data-wow-delay=".4s">
								BC Super Kings Sports Club
							</h1>
							<p className="fadeInUp wow" data-wow-delay=".6s">
								A Registered Non Profit Society
							</p>
							<a href="#about" className="fadeInRight wow btn btn-border btn-lg" data-wow-delay=".6s">
								Explore More
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
