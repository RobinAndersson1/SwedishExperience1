import React from 'react';
import image01 from './image01.JPG';
import image02 from './image02.JPG';
import image04 from './other.JPG';
import image03 from './image03.png';
import backgroundsvideo from './Ljusstakar_1.mp4'

class Front extends React.Component {
    constructor() {
        super()

        this.state = {
            desktop: {display:"inherit"},
            navbarTablet: {position:"absolute"},
            tablet: {display:"none"},
            blackOverlay: {display:"none"}
            
        }
    }


componentDidMount() {
    console.log(window.innerWidth)
    if (window.innerWidth < 769) {
        console.log("ipad2")
        this.setState({
            desktop: {display:"none"}, 
            tablet: {
            display:"inherit",
            position: "absolute",
            top: 0,
            left: "-112%",
            width: "323vw"
        },
        blackOverlay: {
            display:"inherit",
            
        }
        })
    }
    if (window.innerWidth < 376) {
        console.log("iPhoneX")
        this.setState({
            desktop: {display:"none"}, 
            tablet: {
            display:"inherit",
            position: "absolute",
            top: 0,
            left: "-138%",
            width: "386vw"
        },
        blackOverlay: {
            display:"inherit",
            
        }
        })
    }
    
}

    render() {
        return (
            <div className="front">
                
                <div className="container" style={{display:"grid"}}>

                    <div className="font_navbar" stype={this.state.navbarTablet}>
                        <p></p>
                    </div>

                    <video autoPlay loop muted className="backgroundvideo" style={this.state.tablet}> 
                        <source src={backgroundsvideo} type="video/mp4" />
                    </video>
                    <div className="backgroundOverlay animate__animated animate__fadeIn" style={this.state.blackOverlay}>
                    <h1>THE SWEDISH <br/>EXPERIENCE</h1>
                    <div className="overlay_text"><p>If you ever been in Sweden during winter times you would have seen candles in almost every window in almost every home.</p></div>
                    
                        <div className="middle_btn"><p className="show_experience">Show the experience</p></div>
                    </div>

                    <div className="first_image" style={this.state.desktop}>
                        <img src={image04} />
                    </div>

                    <div className="middle_section" style={this.state.desktop}>
                        <h1>THE SWEDISH <br/>EXPERIENCE</h1>
                        <p className="middle_text">If you ever been in Sweden in winter times you would have seen these candles burning bright in almost every window in almost every home.</p>
                        <div className="middle_btn"><p className="show_experience">Show the experience</p></div>
                    </div>
                    
                    <div className="last_image" style={this.state.desktop}>
                        <img src={image03} />
                    </div>

                </div>

            </div>
        )
    }
}

export default Front;