import styles from "./accordion.module.css";
import questions from "./data";
import Question from "./Question";

export default function Accordion() {
	return (
		<section className={styles.section}>
			<h1>Frequently Asked Questions</h1>
			{questions.map((question) => (
				<Question key={question.id} {...question} />
			))}
		</section>
	);
}
