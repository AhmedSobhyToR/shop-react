import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import ProductDescription from '../Components/ProductDescription/ProductDescription';
import './CSS/Product.css'
import ProductRelatedProducts from '../Components/ProductRealtedProducts/ProductRelatedProducts';
const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));

    return (
        <div className='product'>
                <ProductDisplay product={product}></ProductDisplay>
                <ProductDescription product={product}></ProductDescription>
                <ProductRelatedProducts product={product}></ProductRelatedProducts>
        </div>

    );
}

export default Product;
