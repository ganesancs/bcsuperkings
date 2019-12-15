import React from 'react';

export default class Badminton extends React.Component {
	render() {
		return (
			<div id="main-slide" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#main-slide" data-slide-to="0" className="active"></li>
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							className="d-block w-100"
							src="http://yesofcorsa.com/wp-content/uploads/2018/01/Shuttlecock-Best-Wallpaper-1024x683.jpg"
							alt=""
						/>
						<div className="carousel-caption d-md-block">
							<h1 className="wow fadeInDown heading" data-wow-delay=".4s">
								Women & Kids Badminton Tournament
							</h1>
							<p className="fadeInUp wow" data-wow-delay=".6s">
								January 26, 2020
							</p>
							<a
								href="#badmintonRules"
								className="fadeInRight wow btn btn-border btn-lg"
								data-wow-delay=".6s"
							>
								Explore More
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
