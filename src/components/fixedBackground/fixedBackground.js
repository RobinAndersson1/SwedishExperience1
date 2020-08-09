import React from 'react';

import backgroundimage1 from "./background.jpeg";

class FixedBackground extends React.Component {
    constructor() {
        super()

        this.state = {
            backgroundImages: {display:"none"}
            
        }
    }


componentDidMount() {
    console.log(window.innerWidth)
    if (window.innerWidth < 769) {
    
    }
    if (window.innerWidth < 376) {
        console.log("iPhoneX")
        this.setState({
            backgroundImages: {display:"inherit"}
        })
    }
    
}

    render() {
        return (
            <div>
                <img className="static_background1" src={backgroundimage1} style={this.state.backgroundImages} alt="background1" />
                <div className="fixedBackground"></div>
            </div>
            
        )
    }
}

export default FixedBackground;