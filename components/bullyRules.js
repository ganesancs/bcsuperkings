import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class BullyRules extends React.Component {
	render() {
		return (
			<section id="bullyRules" className="section-padding">
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
							<h1 className="display-3">More details about the event</h1>
							<p className="lead">North Delta Recreation Centre: 11415 84 Ave, Delta, BC V4C 2L9</p>
							<p className="lead">4 pm - 8 pm</p>
							<hr className="my-2" />
							<p>
								{' '}
								Presided over by clinical psychologist and Early Childhood Educator. <br />
							</p>
							<h3>
								Key Takeaways
								<br />
							</h3>
							<div>
								<ListGroup>
									<ListGroupItem> Rules of Engagement </ListGroupItem>
									<ListGroupItem>How to diffuse ANY bullying situation </ListGroupItem>
									<ListGroupItem>Team selection will be done on the day of the event</ListGroupItem>
									<ListGroupItem>Verbal Communication Techniques</ListGroupItem>
									<ListGroupItem>Simple & effective self defense </ListGroupItem>
									<ListGroupItem>How to control a bully on the ground</ListGroupItem>
								</ListGroup>{' '}
							</div>

							<h3> Await our announcement for a bigger summer outdoor soft ball tournament! </h3>
							<p className="lead">
								<Button href="https://forms.gle/VAxzrJMsyjMYo8Na9" color="primary">
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