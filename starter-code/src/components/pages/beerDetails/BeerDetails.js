import React, { Component } from 'react'

class BeerDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            beer: {}
        }
    }

    componentDidMount = () => {
        this.props.getBeer(this.props.match.params.id)
            .then(response => this.setState({ beer: response }))
            .catch(err => console.log(`Hubo un error: ${err}`))
    }

    render() {
        return (
            <section className="beer-details">
                <figure>
                    <img src={this.state.beer.image_url} alt={this.state.beer.name} />
                </figure>
                <h1>{this.state.beer.name}</h1>
                <h2>{this.state.beer.tagline}</h2>
                <p>{this.state.beer.description}</p>
                <small>Created by: {this.state.beer.contributed_by}</small>
            </section>
        )
    }

}

export default BeerDetails