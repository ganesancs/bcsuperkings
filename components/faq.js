import React from 'react';

export default class Faq extends React.Component {
	render() {
		return (
			<section id="faq" className="section-padding">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="section-title-header text-center">
								<h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">
									Frequently Asked Questions
								</h1>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
							<div className="accordion">
								<div className="card">
									<div className="card-header" id="headingOne">
										<div
											className="header-title"
											data-toggle="collapse"
											data-target="#questionOne"
											aria-expanded="true"
											aria-controls="collapseOne"
										>
											<i className="lni-pencil"></i> Why should I become a member?
										</div>
									</div>
									<div
										id="questionOne"
										className="collapse"
										aria-labelledby="headingOne"
										data-parent="#question"
									>
										<div className="card-body">
											Members will have reduced fee for all the events conducted by the club.
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingTwo">
										<div
											className="header-title"
											data-toggle="collapse"
											data-target="#questionTwo"
											aria-expanded="false"
											aria-controls="questionTwo"
										>
											<i className="lni-pencil"></i> Which payment methods do you accept?
										</div>
									</div>
									<div
										id="questionTwo"
										className="collapse"
										aria-labelledby="headingTwo"
										data-parent="#question"
									>
										<div className="card-body">Credit/Debit cards, cheques, cash</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingThree">
										<div
											className="header-title"
											data-toggle="collapse"
											data-target="#questionThree"
											aria-expanded="false"
											aria-controls="questionThree"
										>
											<i className="lni-pencil"></i> Is the membership fees one time?
										</div>
									</div>
									<div
										id="questionThree"
										className="collapse"
										aria-labelledby="headingThree"
										data-parent="#question"
									>
										<div className="card-body">
											No, it is yearly membership. And, you will receive an invoice from us for
											your payments.
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingThree">
										<div
											className="header-title"
											data-toggle="collapse"
											data-target="#questionFour"
											aria-expanded="false"
											aria-controls="questionFour"
										>
											<i className="lni-pencil"></i> How will I know what initiatives are being
											undertaken?
										</div>
									</div>
									<div
										id="questionFour"
										className="collapse"
										aria-labelledby="headingThree"
										data-parent="#question"
									>
										<div className="card-body">
											We understand that the members need to be informed of the decisions and the
											initiatives taken by the club. We will ensure we communicate via the
											registered email and our social media accounts.
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
							<div className="accordion">
								<div className="card">
									<div className="card-header" id="headingOne2">
										<div
											className="header-title"
											data-toggle="collapse"
											data-target="#questionOne2"
											aria-expanded="true"
											aria-controls="collapseOne"
										>
											<i className="lni-pencil"></i> Is this a single sport or a multisport club?
											?
										</div>
									</div>
									<div
										id="questionOne2"
										className="collapse"
										aria-labelledby="headingOne"
										data-parent="#question"
									>
										<div className="card-body">
											We are a multisport club. We strive to cater the spectrum of interests of
											the club members.
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
