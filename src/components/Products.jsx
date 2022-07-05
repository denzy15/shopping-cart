import Product from "./Product";

const Products = (props) => {
	let products = props.products;
	return (
		<article className='products'>
			<h1>Товары</h1>
			<div className="row">
				{products.map((p) => {
					return <Product product={p} key = {p.id} onAdd={props.onAdd} />
				})}
			</div>	
		</article>
	)
}

export default Products;