const Product = (props) => {
	let {product, onAdd} = props;
	return (
		<div className="product">
			<h3>{product.name}</h3>
			<div className="product-img">
				<img src={product.img} alt="ha"></img>
			</div>
			<span>ID товара: {product.id}</span>
			<p className="price">Цена: {product.price}$</p>
			<button onClick={() => onAdd(product)} className='add-to-cart'>Добавить в корзину</button>
		</div>
	)
}

export default Product;