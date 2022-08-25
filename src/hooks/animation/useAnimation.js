export default function useAnimation() {
	// fade down to up animation
	const fadeUp = {
		viewport: { once: true, amount: 0.2 },
		offscreen: {
			y: 50,
			opacity: 0,
		},

		onscreen: {
			y: 0,
			opacity: 1,
			transition: { type: 'spring', bounce: 0.4, duration: 0.3 },
		},
	};

	// fade right to left animation
	const fadeLeft = {
		viewport: { once: true, amount: 0.2 },
		offscreen: {
			x: -50,
			opacity: 0,
		},

		onscreen: {
			x: 0,
			opacity: 1,
			transition: { type: 'spring', bounce: 0.4, duration: 1, delay: 0.3 },
		},
		// exit: { x: 50, opacity: 0, duration: 0.5 },
	};

	// fade left to right animation
	const fadeRight = {
		viewport: { once: true, amount: 0.2 },
		offscreen: {
			x: 100,
			opacity: 0,
		},

		onscreen: {
			x: 0,
			opacity: 1,
			transition: { type: 'spring', duration: 0.5 },
		},

		exit: {
			x: 100,
			opacity: 0,
			transition: {
				duration: 0.3,
				ease: 'easeOut',
			},
		},
	};

	// slide down to up animation
	const slideUp = {
		viewport: { once: true, amount: 0.2 },
		offscreen: {
			y: 60,
		},

		onscreen: {
			y: 0,
			transition: {
				type: 'spring',
				bounce: 0.4,
				duration: 0.7,
			},
		},
	};

	// scale small to big animation
	const pulseZoom = {
		viewport: { once: true, amount: 0.2 },
		offscreen: {
			scale: 0.7,
		},

		onscreen: {
			scale: 1,
			transition: {
				type: 'spring',
				bounce: 0.4,
				duration: 0.3,
			},
		},
	};
	return { fadeUp, slideUp, fadeLeft, fadeRight, pulseZoom };
}
