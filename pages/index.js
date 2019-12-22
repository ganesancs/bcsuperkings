import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import Carousel from '../components/carousel';
import Services from '../components/services';
import About from '../components/about';
import Schedule from '../components/schedule';
import Team from '../components/team';
import Faq from '../components/faq';
import Sponsors from '../components/sponsors';
import Contact from '../components/contact';
import Footer from '../components/footer';

const Home = () => (
	<div>
		<Head>
			<title>BC Super Kings</title>

			<link rel="icon" href="/favicon.ico" />
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
			<link rel="stylesheet" type="text/css" href="assets/fonts/line-icons.css" />
			<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.10/slicknav.css" />
			<link rel="sylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/nivo-lightbox/1.3.1/nivo-lightbox.css" />
			<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css" />
			<link rel="stylesheet" type="text/css" href="assets/css/main.css" />
			<link rel="stylesheet" type="text/css" href="assets/css/responsive.css" />
		</Head>
		<header id="header-wrap">
			<Nav />
			<Carousel />
		</header>
		<Services />
		<About />
		<Team />
		<Faq />
		<Sponsors />
		<Contact />
		<Footer />

		<div id="copyright">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="site-info">
							<p>© BC Super Kings 2019 - 2020</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<a href="#" className="back-to-top">
			<i className="lni-chevron-up"></i>
		</a>

		<div id="preloader">
			<div className="sk-circle">
				<div className="sk-circle1 sk-child"></div>
				<div className="sk-circle2 sk-child"></div>
				<div className="sk-circle3 sk-child"></div>
				<div className="sk-circle4 sk-child"></div>
				<div className="sk-circle5 sk-child"></div>
				<div className="sk-circle6 sk-child"></div>
				<div className="sk-circle7 sk-child"></div>
				<div className="sk-circle8 sk-child"></div>
				<div className="sk-circle9 sk-child"></div>
				<div className="sk-circle10 sk-child"></div>
				<div className="sk-circle11 sk-child"></div>
				<div className="sk-circle12 sk-child"></div>
			</div>
		</div>

		<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.min.map"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.10/jquery.slicknav.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-one-page-nav/3.0.0/jquery.nav.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/nivo-lightbox/1.3.1/nivo-lightbox.js"></script>
		<script src="assets/js/wow.js"></script>
		<script src="assets/js/main.js"></script>
	</div>
);

export default Home;
