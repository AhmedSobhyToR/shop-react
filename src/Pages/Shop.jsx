import React from 'react';
import Main from '../Components/Main/Main';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import Collections from '../Components/NewCollections/Collections';
import Newsletter from '../Components/NewsLetter/Newsletter';


const Shop = () => {
    return (
        <div>
            <Main></Main>
            <Popular></Popular>
            <Offers></Offers>
            <Collections></Collections>
            <Newsletter></Newsletter>
            
        </div>
    );
}

export default Shop;
