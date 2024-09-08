import React, { useContext, useMemo } from 'react';
import { ProductContext } from '../Context/ProductContext';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import ProductDescription from '../Components/ProductDescription/ProductDescription';
import ProductRelatedProducts from '../Components/ProductRealtedProducts/ProductRelatedProducts';
import './CSS/Product.css';

const Product = () => {
    const { all_product } = useContext(ProductContext);
    const { productId } = useParams();
    const product = useMemo(() => all_product.find((e) => e.id === Number(productId)), [all_product, productId]);

    return (
        <div className='product'>

            <ProductDisplay product={product} />
            <ProductDescription product={product} />
            <ProductRelatedProducts product={product} />

        </div>
    );
}

export default React.memo(Product);
