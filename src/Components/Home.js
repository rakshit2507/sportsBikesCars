import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
           <div>
                <h1 className="ho-me">Sports Bikes and Cars</h1>
                <span><img className="home-image" src="assets/image/bike3.jpg"/>
                <img className="home-image" src="assets/image/car1.jpg"/>
                <img className="home-image" src="assets/image/bike2.jpg"/></span>
            </div>
        )
    }
}

export default Home
