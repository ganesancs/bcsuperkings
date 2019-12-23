import React from 'react';
import Nav from '../components/nav';
import Carousel from '../components/carousel';
import Services from '../components/services';
import About from '../components/about';
import Team from '../components/team';
import Faq from '../components/faq';
import Sponsors from '../components/sponsors';
import Contact from '../components/contact';
import Footer from '../components/footer';
import EventsBar from '../components/navEvents';
import Header from '../components/head';
const Home = () => (
	<body>
		<Header />
		<header id="header-wrap">
			<Nav />
			<Carousel />
		</header>
		<Services />
		<About />
		<Team />
		<EventsBar />
		<Faq />
		<Sponsors />
		<Contact />
		<Footer />
	</body>
);

export default Home;
