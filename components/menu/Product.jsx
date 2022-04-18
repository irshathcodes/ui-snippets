import Image from "next/image";
import styles from "./menu.module.css";

function Product({ name, price, productImage: image }) {
	return (
		<>
			<div className={styles.product}>
				<Image src={image} layout={"fill"} className={styles.image} />
				<div>
					<h3>{name}</h3>
					<h4>₹ {price}</h4>
				</div>
			</div>
		</>
	);
}

export default Product;
