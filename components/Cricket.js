import React from 'react';

export default class Cricket extends React.Component {
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
							src="http://fullhdwall.com/wp-content/uploads/2019/07/Nice-Cricket-Wallpaper.jpg"
							alt=""
						/>
						<div className="carousel-caption d-md-block">
							<h1 className="wow fadeInDown heading" data-wow-delay=".4s">
								Indoor Cricket Tournament
							</h1>
							<p className="fadeInUp wow" data-wow-delay=".6s">
								January 5, 2020
							</p>
							<a
								href="#cricketRules"
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
