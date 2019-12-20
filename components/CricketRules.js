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
							<p> 
							Teams : 7 players/team + 2 sub <br/>
							Fees : Members - $50 per team | Non-Members - $100 per team <br/>
 							All players in a team should be BC Super Kings members to avail member price <br/>
							Registration closes by : 25th Dec 2019 before 7 PM. <br/>
							First 12 teams to register qualifies to participate <br />
							Payment : E-transfer to sports@bcsuperkings.ca <br />
							Prize Money : Cash Prize $150 for Winning Team / $75 Runner-Up Team <br/>
							Trophies : Winning Team - Rolling + Individual trophy (given at the awards nights) <br/>
							<ul>
									<li> 7 players per team + 2 substitutes max allowed </li>
									<li>Each game time slot is approximately 30mins </li>
									<li>Team selection will be done on the day of the event</li>
									<li>Fielding team - 1 wicket keeper + 1 bowler + 2 leg side + 3 off side </li>
									<li>6 overs per innings </li>
									<li>New Soft ball will be provided by the organizers for each new game only till finish </li>
									<li>Only one over per person (1full over/person) so 6 people to bowl compulsory.  <br />
									In any situation a bowler cannot finish an over, one of the substitute can bowl the remaining balls. <br />
									The original bowler of that over cannot return to the ground for that match. </li>
									<li>Any playing person can do wicket keeping and rotate as and when needed. </li>
									<li>Wides and no balls count as TWO runs. There will be an extra ball in either case. No ball carries a free hit. </li>
									<li>Anything on the leg side should be wide, anything over the head and over the waist for full toss is a no ball</li>
									<li>If 6 wickets fall before 6 overs are completed, the last remaining batsman bats on with the sixth batsman acting as a runner. <br/> 
									He always takes strike. The innings is complete when the seventh wicket falls.<br/> 
									In this scenario, the innings ends when run out happens on either ends. </li>
									<li>LBW is not an option to out a batsman. </li>
									<li>Batsmen retire not out on reaching 31 runs. <br />
									The idea being to reach 36 runs by hitting 6 sixes. <br />
									 A retired batsman can return to the crease after lower-order batsmen either retire or are out. </li>
									<li> If a batsman retires due to any other reasons, he cannot come back to the ground during the same innings </li>
									<li>A tournament points system awards TWO points for each match won, tie ONE point and loss ZERO points</li>
									<li>Winning team can earn a bonus point when they bowl out the opponents in the preliminary round.</li>
									<li> In case of tie during QF and SF, the team scored a bonus point during the preliminary round will be declared as the winner of that match. <br />
									 In case both the team do not secure any bonus points or both teams secured equal bonus points, a super over (6 balls) will decide the winner.</li>
									<li> Only a super over will be used to decide the winner for a tie during the Final match </li>
									<li>During a super over, only 1 bowler is allowed to bowl and only 3 batsmen are allowed to bat</li>
									<li> Umpires and match referee decisions are final and binding. <br/> 
									Organizers can alter the format anytime based on the available time / situation</li>
									<li>Due to restrictions and limited capacity at the venue, no spectators are allowed other than the participating team members. </li>
									<li> Team members without the waiver form signed will not be allowed to enter the event venue. </li>

							</ul>
</p>
							<h3> Await our announcement for a bigger summer outdoor soft ball tournament! </h3>
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
