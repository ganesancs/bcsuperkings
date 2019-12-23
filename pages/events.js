import React from 'react';
import Nav from '../components/nav';
import Schedule from '../components/schedule';
import Header from '../components/head';

const Home = () => (
	<body>
		<Header />
		<header id="header-wrap">
			<Nav />
		</header>
		<Schedule />
	</body>
);

export default Home;
