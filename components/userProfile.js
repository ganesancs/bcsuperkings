import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import { Badge } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import CookieSessionStoreSettings from '@auth0/nextjs-auth0/dist/session/cookie-store/settings';

export default class UserProfile extends React.Component {
	constructor(props) {
		super(props);

		// Assign state itself, and a default value for items
		this.state = {
			session: {},
			metaData: '',
			memberIcon: '',
			active: false,
		};
	}
	async componentDidMount() {
		const namespace = 'https://bcsuperkingssportsclub/custom_user_data';
		const res = await fetch('/api/userProfile');

		if (res.ok) {
			this.setState({
				session: await res.json(),
			});
			this.setState({
				metaData: this.state.session[namespace],
			});
			if (this.state.metaData.paymentStatus === 'paid') {
				this.setState({ active: true });
			} else {
				this.setState({ active: false });
			}
			this.setState({ memberFrom: this.state.metaData.memberFrom });
			const parts = this.state.memberFrom.split('-');
			console.log(parts);
			const mydate = new Date(parts[0], parts[1] - 1, parts[2]);
			const renewalDate = new Date(mydate.setFullYear(mydate.getFullYear() + 1));
			this.setState({ renewal: renewalDate.toString() });
			if (this.state.metaData.gender === 'male') {
				if (this.state.metaData.membershipType === 'adult') {
					this.setState({ memberIcon: 'assets/img/membershipDashboard/adult_m.svg' });
				} else if (this.state.metaData.membershipType === 'student') {
					this.setState({ memberIcon: 'assets/img/membershipDashboard/student_m.svg' });
				} else if (this.state.metaData.membershipType === 'senior') {
					this.setState({ memberIcon: 'assets/img/membershipDashboard/senior_m.svg' });
				} else {
					this.setState({ memberIcon: 'assets/img/membershipDashboard/question.svg' });
				}
			} else {
				if (this.state.metaData.membershipType === 'adult') {
					this.setState({ memberIcon: 'assets/img/membershipDashboard/adult_f.svg' });
				} else if (this.state.metaData.membershipType === 'student') {
					this.setState({ memberIcon: 'assets/img/membershipDashboard/student_f.svg' });
				} else if (this.state.metaData.membershipType === 'senior') {
					this.setState({ memberIcon: 'assets/img/membershipDashboard/senior_f.svg' });
				} else {
					this.setState({ memberIcon: 'assets/img/membershipDashboard/question.svg' });
				}
			}
		}
	}
	render() {
		return (
			<section id="memberDashboard" className="section-padding">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="section-title-header text-center">
								<h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">
									Your Membership Details...
								</h1>
							</div>
						</div>
					</div>

					<Jumbotron fluid>
						<Container fluid>
							<h1 className="display-3">Hello, {this.state.session.name}!</h1>
							<p className="lead">Thanks for being part of us!</p>
							<hr className="my-2" />

							{
								(this.state.active = true && (
									<Badge color="success" pill>
										Membership Active
									</Badge>
								))
							}
							<hr className="my-2" />
							<img height="60" width="60" src={this.state.memberIcon} />
							<p>You are enrolled for {this.state.metaData.membershipType} membership</p>
							<p>You are due for renewal on {this.state.renewal}.</p>
						</Container>
					</Jumbotron>
				</div>
			</section>
		);
	}
}
