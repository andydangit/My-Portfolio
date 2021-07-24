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
                        src="images/web_app_icon_2.jpg"
                        label ="test 1 project"
                        path='/https://www.google.com'
                        />
                        <a href="https://www.google.com"> project 1 </a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
