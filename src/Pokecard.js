import React, { Component } from 'react'
import './pokecard.css'

class Pokecard extends Component {

    render() {
        const { name, image, exp, type } = this.props
        // const styles = { width: '18rem' }
        return (
            <div className="col-md-6 col-lg-4 col-xl-3 pt-4">
                {/* <div className="card-body card" style={styles}> */}
                <div className="card-body card">
                    <h3>{name}</h3>
                    <img src={image} className="card-img-top" />
                    <div className="card-body">
                        <p className="card-text">Type: {type} <br />Exp: {exp}</p>
                    </div>
                </div>

            </div>


        );
    }
}

export default Pokecard;

