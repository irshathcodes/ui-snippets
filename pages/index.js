import Link from "next/link";

const ui = [
	{ id: 1, link: "birthday-remainder", name: "Birthday Remainder" },
	{ id: 2, link: "tours", name: "Tours" },
	{ id: 3, link: "reviews", name: "Reviews" },
	{ id: 4, link: "accordion", name: "Accordion" },
];

export default function Home() {
	return (
		<>
			<div className="home-container">
				{ui.map((item) => (
					<Link href={item.link} key={item.id}>
						<a>{item.name}</a>
					</Link>
				))}
			</div>
		</>
	);
}
