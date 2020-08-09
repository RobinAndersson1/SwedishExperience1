import React from 'react';
import Product01 from './product01.png';

class Product extends React.Component {
    render() {
        return (
            <div className="product">
                <h1>LIGHT UP YOUR HOME<br/>YOUR STREET</h1>
                <p className="middle_text">Be the first to bring this Swedish Christmas tresure to light up your neighborhood. Brighten up the December dakness with this traditional Swedish Christmas decoration. Brings a warm feelig both inside and outside the house.</p>
                <div className="buy_btn"><p className="buy_btn_text">Buy</p></div>
                <img src={Product01} alt="product01"/>
            </div>
        )
    }
}

export default Product;