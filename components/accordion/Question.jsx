import { useState } from "react";
import styles from "./accordion.module.css";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";

function Question({ title, info }) {
	const [showQuestion, setShowQuestion] = useState(false);
	return (
		<>
			<div className={styles.question}>
				<div onClick={() => setShowQuestion(!showQuestion)}>
					<h3>{title}</h3>
					<button>
						{showQuestion ? (
							<MinusIcon className={styles.icon} />
						) : (
							<PlusIcon className={styles.icon} />
						)}
					</button>
				</div>

				<p className={`${styles.answer} ${showQuestion && styles.show_answer}`}>
					{info}
				</p>
			</div>
		</>
	);
}

export default Question;
