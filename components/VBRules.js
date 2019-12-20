import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

export default class VBRules extends React.Component {
	render() {
		return (
			<section id="volleyRules" className="section-padding">
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
							<p className="lead"> January 26, 2020 Contact: sports@bcsuperkings.ca</p>
							<hr className="my-2" />
							<p>Volley ball women team of 6
								Event Fees:
									Members 5 dollars 
									Non members 10 dollars .
							</p>
							<p className="lead">
								<Button href="https://forms.gle/qhW86kQuDpP5YcxN7" color="primary">
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
