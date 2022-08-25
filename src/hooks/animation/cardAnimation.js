export default function cardAnimation() {
	const initial = { y: 10, opacity: 0 };
	const animate = { y: 0, opacity: 1 };
	const exit = { y: -10, opacity: 0 };
	const transition = { duration: 0.2 };

	return { initial, animate, exit, transition };
}
