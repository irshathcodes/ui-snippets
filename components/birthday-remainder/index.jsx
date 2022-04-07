import { useState } from "react";
import Image from "next/image";
import styles from "./index.module.css";
import data from "./data";

function Index() {
	const [people, setPeople] = useState(data);
	return (
		<section className={styles.birthday_wrapper}>
			<div className={styles.section}>
				<h2>{people.length} birthdays today</h2>
				<div className={styles.list}>
					{people.map(({ id, name, image, age }) => (
						<>
							<div key={id} className={styles.flex}>
								<Image
									src={image}
									className={styles.image}
									width={75}
									height={75}
								/>
								<div>
									<h3>{name}</h3>
									<p>{age} years</p>
								</div>
							</div>
						</>
					))}
				</div>

				<button onClick={() => setPeople([])}>Clear All</button>
			</div>
		</section>
	);
}

export default Index;
