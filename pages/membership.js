import React from 'react';
import Pricing from '../components/pricing';
import Footer from '../components/footer';
import Nav from '../components/nav';
import Header from '../components/head';

const Home = () => (
	<body>
		<Header />
		<header id="header-wrap">
			<Nav />
		</header>
		<Pricing />
		<Footer />
	</body>
);

export default Home;
