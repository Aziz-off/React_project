import React, { useEffect } from 'react';
import { useProducts } from '../context/ProductContextProvider';
import ProductCard from './ProductCard';

const ProductList = () => {
	const {getProducts, products} = useProducts();
	useEffect(() => {
		getProducts()
	}, []);
  return (
	<div style={{display: "flex", flexWrap: "wrap", margin: "0 auto", maxWidth: "80%"}}>
	  {products ? (products.map((item) => <ProductCard item={item}/>)) : (<h2>Loading...</h2>)}
	</div>
  );
}

export default ProductList;
