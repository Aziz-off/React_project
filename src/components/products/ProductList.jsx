import React, { useEffect, useState } from 'react';
import { useProducts } from '../context/ProductContextProvider';
import ProductCard from './ProductCard';
import { useSearchParams } from 'react-router-dom';
import { Box } from '@mui/material';
import PaginationControlled from './Pagination';

const ProductList = () => {
	const {getProducts, products} = useProducts();
	//!=====SEARCH============

	const [searchParams, setSearchParams] = useSearchParams();
	useEffect(() => {
		getProducts()
	}, [searchParams]);
	//!=====PAGINATION=========
	const [page, setPage] = useState(1);
	const handleChange = (event, value) =>{
		setPage(value);
	}

	const ITEMS_PER_PAGE = 4;
	const count = Math.ceil(products.length / ITEMS_PER_PAGE);
	console.log(count);

	function currData(){
		const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return products.slice(startIndex, endIndex);
	}
	return (
		<div>
		  <Box
			sx={{
			  display: 'flex',
			  flexWrap: 'wrap',
			  justifyContent: 'space-between',
			  mt: '25px',
			}}
		  >
			{currData().map((item) => (
			  <ProductCard key={item.id} elem={item} />
			))}
		  </Box>
		  <Box
			sx={{
			  display: 'flex',
			  justifyContent: 'center',
			  mt: '15px', 
			}}
		  >
			<PaginationControlled handleChange={handleChange} page={page} count={count} />
		  </Box>
		</div>
	  );
	};
	
export default ProductList;