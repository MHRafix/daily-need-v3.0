import { motion } from 'framer-motion';
import Head from 'next/head';
import { HiArrowSmUp } from 'react-icons/hi';
import ScrollToTop from 'react-scroll-to-top';
import FooterCopyrightArea from '../Footer/FooterCopyrightArea';
import FooterFeaturesCard from '../Footer/FooterFeaturesCard';
import FooterMain from '../Footer/FooterMain';
import HeaderMain from '../Header/HeaderMain';

export default function LayoutContainer({ children, title, description }) {
	return (
		<motion.div
			className='page_main_wrapper'
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.3 }}
		>
			<Head>
				<title>
					{title ? `${title.toUpperCase()} - Daily Needs` : 'Daily Needs'}
				</title>
				<meta name='description' content={description} />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{/* app header is here */}
			<header>
				<HeaderMain />
			</header>
			{/* app body is here */}
			<main>
				<div className='container_wrapper'>{children}</div>

				{/* messenger chat icon here */}
				{/* <MessengerCustomerChat
          pageId="110944118380097"
          appId="588889365150764"
        /> */}

				{/* scroll to top btn */}
				<div>
					<ScrollToTop
						smooth={true}
						top={300}
						color='#fff'
						component={<HiArrowSmUp />}
						id='gotop_client_btn'
					/>
				</div>
			</main>

			{/* app footer is here */}
			<footer className='bg-slate-100 mt-20'>
				<FooterFeaturesCard />
				<FooterMain />
				<FooterCopyrightArea />
			</footer>
		</motion.div>
	);
}
