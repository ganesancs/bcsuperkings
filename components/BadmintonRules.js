import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

export default class BadmintonRules extends React.Component {
	render() {
		return (
			<section id="badmintonRules" className="section-padding">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="section-title-header text-center">
								<h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">
									Before you enroll....
								</h1>
							</div>
						</div>
					</div>

					<Jumbotron fluid>
						<Container fluid>
							<h1 className="display-3">Rules and Regulations</h1>
							<p className="lead">Event Timing: January 26, 2020 Contact: sports@bcsuperkings.ca</p>
							<p className="lead">Walnut Road Elementary School, 16152 82 Ave, Surrey, BC V4N 0N5</p>
							<hr className="my-2" />
							<p> <b>Categories - (boys and girls under each category)</b> <br/>
								Sub junior -Ages 8 to 12 <br/>
								Junior - Ages 13 to 16 <br/>
								Teen - Ages 17 and 18 <br />
								Women singles <br />

								<b> Evnet Fees </b> <br/>
								Members 5 dollars <br/>
								Non members 10 dollars .</p>
							<p className="lead">
								<Button href="https://forms.gle/YtF6SQGCvKQL4m2G6" color="primary">
									REGISTER!
								</Button>
							</p>
						</Container>
					</Jumbotron>
				</div>
			</section>
		);
	}
}
