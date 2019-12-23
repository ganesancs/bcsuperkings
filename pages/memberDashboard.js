import React from 'react';
import Footer from '../components/footer';
import UserProfile from '../components/userProfile';
import MemberDashboard from '../components/memberDashboardNav';
import Header from '../components/head';
const Home = () => (
	<body>
		<Header />
		<MemberDashboard />
		<UserProfile />
		<Footer />
	</body>
);

export default Home;
