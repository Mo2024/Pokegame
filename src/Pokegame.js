import React, { Component } from 'react'
import Pokedex from './Pokedex'

class Pokegame extends Component {
    static defaultProps = {
        pokeGameCards: [
            { id: '004', name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: '007', name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: '011', name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: '012', name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: '025', name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: '039', name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: '094', name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: '133', name: 'Eevee', type: 'normal', base_experience: 65 }
        ].sort(() => .5 - Math.random())
    }
    render() {
        let pokeGameCards = this.props.pokeGameCards
        let hand1 = [];
        let hand2 = [];
        pokeGameCards.slice(0, 4).map(card => hand1.push(card))
        pokeGameCards.slice(4, 8).map(card => hand2.push(card))
        let exp1 = hand1.map(item => item.base_experience).reduce((prev, curr) => prev + curr, 0)
        let exp2 = hand2.map(item => item.base_experience).reduce((prev, curr) => prev + curr, 0)


        return (
            <div>
                <Pokedex
                    hand={hand1}
                    total={exp1}
                    isWinner={exp1 > exp2}
                />
                <Pokedex
                    hand={hand2}
                    total={exp2}
                    isWinner={exp2 > exp1}
                />
            </div>
        );
    }
}

export default Pokegame;