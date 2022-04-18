import { useState } from "react";
import styles from "./menu.module.css";
import Product from "./Product";

function Menu({ categories, products: data }) {
	const [products, setProducts] = useState(data);

	const changeCategory = async (name) => {
		const category = name.toLowerCase();

		const res = await fetch(
			`https://ecommercenode-api.herokuapp.com/api/v1/products?category=${category}`
		);

		const data = await res.json();

		setProducts(data.products);
	};

	return (
		<main className={styles.main}>
			<h1>Clothes for Men</h1>

			{/* Categories */}
			<div className={styles.categories}>
				<button onClick={() => setProducts(data)}>All</button>
				{categories.map((category, index) => {
					return (
						<button key={index} onClick={() => changeCategory(category)}>
							{category}
						</button>
					);
				})}
			</div>

			{/* Products */}
			<section>
				{products.map((product) => (
					<Product {...product} key={product._id} />
				))}
			</section>
		</main>
	);
}

export default Menu;
