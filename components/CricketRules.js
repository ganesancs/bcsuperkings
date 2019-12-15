import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

export default class CricketRules extends React.Component {
	render() {
		return (
			<section id="cricketRules" className="section-padding">
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
							<p className="lead">Stallions Cricket Center:  304, 12886 Anvil Way #305, Surrey, BC V3W 8E7</p>
							<p className="lead">8AM - 8PM</p>
							<hr className="my-2" />
							<p> 7 members per team. Maximum of 12 teams. 
                          Team of seven if all are members 50 dollars/ team 
                          Team of seven if non members 100 dollars/ team 
                          Registration deadline dec 31 or soon as we hit 12 teams 
                          Winner 100 dollar cash prize 
                          Runner up 50 dollar cash prize.
                          Trophy to winner will be presented at our awards night .</p>
							<p className="lead">
								<Button href="https://forms.gle/kgqaGpF9rY4aDbMH8" color="primary">
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
