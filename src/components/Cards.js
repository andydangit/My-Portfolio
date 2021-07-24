import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1> My Projects </h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem 
                        text="test 1"
                        label = "test 1 project"
                        path='/About'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
