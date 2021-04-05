import React, { Component } from 'react'

class Custom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: null,
            url: null
        }
    }

    fetchURL = (e) => {
        this.setState({url: e.target.value})
    }

    getSize = (e) => {
        this.setState({size: e.target.value})
    }

    render() {
        const image = this.state.url
        const imageSize = this.state.size;
        return (
            <div>
                <h1>Customize Image</h1>
                <div>
                <input type="text" placeholder='image url' onChange={this.fetchURL}/>
                </div>
                <div>
                <input type="range" min='0' max='200' onChange={this.getSize}/>
                </div>
                {image !== null && (
                    <img style={{width: `${imageSize}px` }} src={image}/>
                )}
            </div>
        )
    }
}


export default Custom