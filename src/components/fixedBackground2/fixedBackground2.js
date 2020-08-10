import React from 'react';
import backgroundimage2 from "./outside.JPG";


class FixedBackground2 extends React.Component {
    constructor() {
        super()

        this.state = {
            backgroundImages: {display:"none"}
            
        }
    }


componentDidMount() {
    console.log(window.innerWidth)
    if (window.innerWidth < 769) {
        this.setState({
            backgroundImages: {display:"inherit"}
        })
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
                <img className="static_background1" src={backgroundimage2} style={this.state.backgroundImages} alt="background2" />
                <div className="fixedBackground2"></div>
            </div>
        )
    }
}

export default FixedBackground2;