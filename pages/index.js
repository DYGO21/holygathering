import Head from 'next/head';
import { About } from '../components/About';
import { BibleVerse } from '../components/BibleVerse';
import { Contact } from '../components/Contact';
import { Programs } from '../components/Programs';
import { Header } from '../components/Header';
import { AboutPastor } from '../components/AboutPastor';
import { Events } from '../components/Events';
import { Kids } from '../components/Kids';
import { Youth } from '../components/Youth';
import { Donations } from '../components/Donations';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

function Home() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="overflow-auto"
		>
			<Head>
				<title>Glorious Hill</title>
			</Head>

			<section id="home" className="bg-slate-500">
				<Header />
			</section>

			<section>
				<BibleVerse />
			</section>

			<section id="about">
				<About />
			</section>

			<section>
				<Programs />
			</section>

			<section>
				<AboutPastor />
			</section>

			<section id="events">
				<Events />
			</section>

			<section>
				<Kids />
			</section>

			<section>
				<Youth />
			</section>

			<section>
				<Donations />
			</section>

			<section id="contact">
				<Contact />
			</section>

			<footer>
				<Footer />
			</footer>
		</motion.div>
	);
}

// export default Home;

export default dynamic(() => Promise.resolve(Home), { ssr: false });
