import Tabs from "../components/tabs";

function Index(props) {
	return <Tabs jobs={props.jobs} />;
}

export default Index;

export async function getStaticProps() {
	const res = await fetch("https://course-api.com/react-tabs-project");

	const jobs = await res.json();

	return {
		props: { jobs },
	};
}
