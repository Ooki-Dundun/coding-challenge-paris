import React, { Component } from 'react'

class Temperature extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: null
        }
    }
    
    handleChange = (e) => {
        if (e.target.value === '') {
            this.setState({temperature: null})
            return
        }
        this.setState({temperature: e.target.value})
    }
    
    render() {
        const temperature = this.state.temperature;
        return (
            <div>
                <h1>Temperature</h1>
                <input type="number" placeholder='Temperature in Celsius' onChange={this.handleChange}/>
                {temperature !== null && temperature < 10 && (
                    <p id='cold'>It's cold ❄️</p>
                )}
                {temperature !== null && temperature >= 10 && temperature <= 30  && (
                    <p id='nice'>It's nice 🌼</p>
                )}
                 {temperature !== null && temperature > 30 && (
                    <p id='warm'>It's warm ☀️</p>
                )}
            </div>
        )
    }
}


export default Temperature