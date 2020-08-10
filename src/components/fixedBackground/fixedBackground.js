import React from 'react';

import backgroundimage1 from "./background.jpeg";

class FixedBackground extends React.Component {
    constructor() {
        super()

        this.state = {
            backgroundImages: {display:"none"},
            backgroundFixedImages: {display:"inherit"}
            
        }
    }


componentDidMount() {
    console.log(window.innerWidth)
    if (window.innerWidth < 770) {
        this.setState({
            backgroundImages: {display:"inherit"},
            backgroundFixedImages: {display:"none"}
        })
    }
    if (window.innerWidth < 376) {
        console.log("iPhoneX")
        this.setState({
            backgroundImages: {display:"inherit"},
            backgroundFixedImages: {display:"none"}
        })
    }
    
}

    render() {
        return (
            <div>
                <img className="static_background1" src={backgroundimage1} style={this.state.backgroundImages} alt="background1" />
                <div className="fixedBackground" style={this.state.backgroundFixedImages}></div>
            </div>
            
        )
    }
}

export default FixedBackground;