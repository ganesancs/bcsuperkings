import React from 'react';

export default class Schedule extends React.Component {
	render() {
		return (
			<section id="schedules" className="schedule section-padding">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="section-title-header text-center">
								<h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">
									Event Schedules
								</h1>
								<p className="wow fadeInDown" data-wow-delay="0.2s">
									Upcoming events and meetings
								</p>
							</div>
						</div>
					</div>
					<div className="schedule-area row wow fadeInDown" data-wow-delay="0.3s">
						<div className="schedule-tab-title col-md-3 col-lg-3 col-xs-12">
							<div className="table-responsive">
								<ul className="nav nav-tabs" id="myTab" role="tablist">
									<li className="nav-item">
										<a
											className="nav-link active"
											id="monday-tab"
											data-toggle="tab"
											href="#monday"
											role="tab"
											aria-controls="monday"
											aria-expanded="true"
										>
											<div className="item-text">
												<h4>Sunday</h4>
												<h5>5 Jan</h5>
											</div>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="schedule-tab-content col-md-9 col-lg-9 col-xs-12 clearfix">
							<div className="tab-content" id="myTabContent">
								<div
									className="tab-pane fade show active"
									id="monday"
									role="tabpanel"
									aria-labelledby="monday-tab"
								>
									<div id="accordion">
										<div className="card">
											<div id="headingOne">
												<div
													className="collapsed card-header"
													data-toggle="collapse"
													data-target="#collapseOne"
													aria-expanded="false"
													aria-controls="collapseOne"
												>
													<div className="images-box">
														<img
															className="img-fluid"
															src="assets/img/speaker/speakers-1.png"
															alt=""
														/>
													</div>
													<span className="time">8am - 8pm</span>
													<h4>Indoor Cricket Tournament</h4>
												</div>
											</div>
											<div
												id="collapseOne"
												className="collapse show"
												aria-labelledby="headingOne"
												data-parent="#accordion"
											>
												<div className="card-body">
													<div className="location">
														< a href="/cricket">Click here for registration and more details</a> <br/>
														<span>Location:</span> Stallions Cricket Center: 304, 12886 Anvil Way #305, Surrey, BC V3W 8E7
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="schedule-area row wow fadeInDown" data-wow-delay="0.3s">
						<div className="schedule-tab-title col-md-3 col-lg-3 col-xs-12">
							<div className="table-responsive">
								<ul className="nav nav-tabs" id="myTab" role="tablist">
									<li className="nav-item">
										<a
											className="nav-link active"
											id="monday-tab"
											data-toggle="tab"
											href="#monday"
											role="tab"
											aria-controls="monday"
											aria-expanded="true"
										>
											<div className="item-text">
												<h4>Sunday</h4>
												<h5>26 Jan</h5>
											</div>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="schedule-tab-content col-md-9 col-lg-9 col-xs-12 clearfix">
							<div className="tab-content" id="myTabContent">
								<div
									className="tab-pane fade show active"
									id="monday"
									role="tabpanel"
									aria-labelledby="monday-tab"
								>
									<div id="accordion">
										<div className="card">
											<div id="headingOne">
												<div
													className="collapsed card-header"
													data-toggle="collapse"
													data-target="#collapseOne"
													aria-expanded="false"
													aria-controls="collapseOne"
												>
													<div className="images-box">
														<img
															className="img-fluid"
															src="assets/img/speaker/speakers-1.png"
															alt=""
														/>
													</div>
													<span className="time">8am - 8pm</span>
													<h4>Womens Volleyball Tournament</h4>
												</div>
											</div>
											<div
												id="collapseOne"
												className="collapse show"
												aria-labelledby="headingOne"
												data-parent="#accordion"
											>
												<div className="card-body">
													<div className="location">
														< a href="/volleyball-2019">Click here for registration and more details</a> <br />
														<span>Location:</span> TBA
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="schedule-area row wow fadeInDown" data-wow-delay="0.3s">
						<div className="schedule-tab-title col-md-3 col-lg-3 col-xs-12">
							<div className="table-responsive">
								<ul className="nav nav-tabs" id="myTab" role="tablist">
									<li className="nav-item">
										<a
											className="nav-link active"
											id="monday-tab"
											data-toggle="tab"
											href="#monday"
											role="tab"
											aria-controls="monday"
											aria-expanded="true"
										>
											<div className="item-text">
												<h4>Sunday</h4>
												<h5>26 Jan</h5>
											</div>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="schedule-tab-content col-md-9 col-lg-9 col-xs-12 clearfix">
							<div className="tab-content" id="myTabContent">
								<div
									className="tab-pane fade show active"
									id="monday"
									role="tabpanel"
									aria-labelledby="monday-tab"
								>
									<div id="accordion">
										<div className="card">
											<div id="headingOne">
												<div
													className="collapsed card-header"
													data-toggle="collapse"
													data-target="#collapseOne"
													aria-expanded="false"
													aria-controls="collapseOne"
												>
													<div className="images-box">
														<img
															className="img-fluid"
															src="assets/img/speaker/speakers-1.png"
															alt=""
														/>
													</div>
													<span className="time">8am - 8pm</span>
													<h4>Kids Badminton Tournament</h4>
												</div>
											</div>
											<div
												id="collapseOne"
												className="collapse show"
												aria-labelledby="headingOne"
												data-parent="#accordion"
											>
												<div className="card-body">
													<div className="location">
														< a href="/badminton2020">Click here for registration and more details</a> <br />
														<span>Location:</span> TBA
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
			</section>
		);
	}
}
