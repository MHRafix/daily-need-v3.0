export default function useAnimation() {
	/**
	 * fade down to up animation
	 * usein: cart table body item
	 */

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

	/**
	 * fade right to left animation
	 * usein: mini cart item card
	 */

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

	/**
	 * fade left to right animation for
	 * mini cart area wrapper
	 */

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

	/**
	 * slide down to up animation
	 * usein: product grid and list card
	 */

	const slideUp = {
		offscreen: {
			y: 100,
		},

		onscreen: {
			y: 0,
			transition: {
				type: 'spring',
				bounce: 0.4,
				duration: 0.5,
			},
		},
	};

	/**
	 * scale small to big animation
	 * usein: admin dashboard summury grid box
	 */

	const pulseZoom = {
		offscreen: {
			scale: 0.7,
			opacity: 0,
		},

		onscreen: {
			scale: 1,
			opacity: 1,
			transition: {
				type: 'spring',
				bounce: 0.3,
				duration: 0.5,
				ease: 'easeOut',
			},
		},

		exit: {
			scale: 0.7,
			opacity: 0,
			transition: { duration: 0.5 },
		},
	};

	/**
	 * fade pop animation
	 * usein: admin dashboard tabledataaction plate
	 */

	const fadePop = {
		offscreen: {
			scale: 0.8,
		},

		onscreen: {
			scale: 1,
			transition: {
				duration: 0.09,
			},
		},

		exit: {
			scale: 0.8,
			transition: {
				duration: 0.09,
			},
		},
	};

	// return all animation here
	return { fadeUp, slideUp, fadeLeft, fadeRight, pulseZoom, fadePop };
}
