import Link from "next/link";

const ui = [
	{ id: 1, link: "/list", name: "List" },
	{ id: 2, link: "/card", name: "Card" },
	{ id: 3, link: "reviews", name: "Slider" },
	{ id: 4, link: "accordion", name: "Accordion" },
	{ id: 5, link: "menu", name: "Menu" },
	{ id: 6, link: "tabs", name: "Tabs" },
];

export default function Home() {
	return (
		<>
			<div className="home-container">
				{ui.map((item) => (
					<Link href={item.link} key={item.id}>
						<a className="links">{item.name}</a>
					</Link>
				))}
			</div>
		</>
	);
}
