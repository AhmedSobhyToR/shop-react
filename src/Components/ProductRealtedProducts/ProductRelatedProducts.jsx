import React, { useContext, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext.jsx';
import Item from '../Item/Item';
import './ProductRelatedProducts.css';
import PageSlider from '../PageSlider/PageSlider.jsx';

const ProductRelatedProducts = (props) => {
    const { all_product } = useContext(ShopContext);
    const relatedProducts = all_product.filter(elem => elem.category === props.product.category);
    const itemsPerPage = 4;
    const numberOfPages = Math.ceil(relatedProducts.length / itemsPerPage);

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startSlice = (currentPage - 1) * itemsPerPage;
    const endSlice = startSlice + itemsPerPage;
    const fourProducts = relatedProducts.slice(startSlice, endSlice);

    return (
        <div className='product-related-products'>
            <h2>Related Products</h2>
            <div className='product-related-products-items'>
                {fourProducts.map((elem, i) => (
                    <Item key={i} id={elem.id} name={elem.name} image={elem.image} newPrice={elem.new_price} oldPrice={elem.old_price} />
                ))}
            </div>
            <div className='product-slidershow'>
                {[...Array(numberOfPages)].map((_, i) => (
                    <PageSlider key={i} pageNumber={i + 1} onPageChange={handlePageChange} />
                ))}
            </div>
        </div>
    );
};

export default ProductRelatedProducts;
