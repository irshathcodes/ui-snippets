import Menu from "../components/menu";

function Index(props) {
	return <Menu {...props} />;
}

export default Index;

export async function getStaticProps() {
	const res = await fetch(
		"https://ecommerce-api.up.railway.app/api/v1/products/get/categories"
	);
	const categories = await res.json();

	const data = await fetch(
		"https://ecommerce-api.up.railway.app/api/v1/products"
	);

	const products = await data.json();

	return {
		props: {
			categories,
			products: products.products,
		},
	};
}
