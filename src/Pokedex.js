import React, { Component } from 'react'
import Pokecard from './Pokecard';

class Pokedex extends Component {

    render() {
        const { hand, total, isWinner } = this.props;
        // let color = isWinner ? 'winner-color' : 'loser-color'

        return (
            <div className='mt-3'>
                <h1 className={isWinner ? 'winner-color' : 'loser-color'}>
                    {isWinner ? 'Winning Hand' : 'Losing Hand'}
                </h1>
                <h3>Total Experience: {total}</h3>

                <div className="container">
                    <div className="row justify-content-center">

                        {hand.map(card =>
                            <Pokecard
                                key={card.id}
                                name={card.name}
                                image={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${card.id}.png`}
                                type={card.type}
                                exp={card.base_experience}
                            />
                        )}

                    </div>
                </div>

            </div>
        );
    }
}

export default Pokedex;

