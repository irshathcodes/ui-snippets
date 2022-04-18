import { useState } from "react";
import styles from "./tabs.module.css";
import { ChevronDoubleRightIcon, LibraryIcon } from "@heroicons/react/solid";

function Tabs({ jobs }) {
	const [index, setIndex] = useState(0);

	const { title, company, dates, duties } = jobs[index];

	return (
		<main className={styles.main}>
			<h1>Experience</h1>
			<div className={styles.underline} />

			<div className={styles.flex_container}>
				{/* Buttons  */}
				<div className={styles.btn_container}>
					{jobs.map(({ title, id }, i) => (
						<button
							key={id}
							className={i === index && styles.active_btn}
							onClick={() => setIndex(i)}
						>
							{title}
						</button>
					))}
				</div>

				<section>
					<h2 className={styles.title}>{title}</h2>
					<h4 className={styles.company}>{company}</h4>
					<h6 className={styles.dates}>{dates}</h6>
					<ul className={styles.duties}>
						{duties.map((duty, index) => (
							<li key={index}>
								<ChevronDoubleRightIcon className={styles.icon} /> {duty}
							</li>
						))}
					</ul>

					<button className={styles.more_info_btn}>More Info</button>
				</section>
			</div>
		</main>
	);
}

export default Tabs;
