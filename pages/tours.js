import Tours from "../components/tours";

export default function Index({ data }) {
	return <Tours data={data} />;
}

export async function getStaticProps() {
	const response = await fetch("https://course-api.com/react-tours-project");

	const data = await response.json();
	return {
		props: { data },
	};
}
