import { useState } from "react";
import Image from "next/image";
import styles from "./reviews.module.css";
import data from "./data";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

export default function Reviews() {
	const [index, setIndex] = useState(0);

	const { name, job, image, text } = data[index];

	const checkNumber = (number) => {
		if (number < 0) {
			return data.length - 1;
		}
		if (number > data.length - 1) {
			return 0;
		}
		return number;
	};

	const prevPerson = (number) => {
		setIndex(() => {
			const decreaseNum = number - 1;
			return checkNumber(decreaseNum);
		});
	};

	const nextPerson = (number) => {
		setIndex(() => {
			const increaseNum = number + 1;
			return checkNumber(increaseNum);
		});
	};

	const randomPerson = (state) => {
		setIndex(() => {
			let randomNum = Math.floor(Math.random() * data.length);
			if (randomNum === state) {
				randomNum = randomNum + 1;
			}
			return checkNumber(randomNum);
		});
	};

	return (
		<section className={styles.section}>
			<h1>Our Reviews</h1>
			<article className={styles.article}>
				<Image src={image} width={150} height={150} className={styles.image} />
				<h3>{name}</h3>
				<h4>{job}</h4>
				<p>{text}</p>

				<div>
					<button onClick={() => prevPerson(index)}>
						<ChevronLeftIcon className={styles.left_icon} />
					</button>
					<button onClick={() => nextPerson(index)}>
						<ChevronRightIcon className={styles.right_icon} />
					</button>
				</div>

				<button onClick={() => randomPerson(index)}>Surprise Me</button>
			</article>
		</section>
	);
}
