import { useState } from "react";
import styles from "./tours.module.css";
import Image from "next/image";

export default function Tours({ data }) {
	const [showMore, setShowMore] = useState(false);
	const [tours, setTours] = useState(data);

	return (
		<section className={styles.section}>
			<h2>Our Tours</h2>
			{tours.map(({ id, name, info, image, price }) => {
				return (
					<div key={id} className={styles.card}>
						<Image
							src={image}
							width={200}
							height={200}
							className={styles.image}
						/>
						<div>
							<h3>{name}</h3>
							<h4>${price}</h4>
						</div>
						<p>
							{showMore ? info : info.substring(0, 200) + "..."}
							<button onClick={() => setShowMore(!showMore)}>
								{showMore ? "Show less" : "show More"}
							</button>
						</p>
						<button
							onClick={() => setTours(tours.filter((item) => item.id !== id))}
						>
							Not Interested
						</button>
					</div>
				);
			})}
		</section>
	);
}
