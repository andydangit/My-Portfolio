import React from 'react'
import { Link } from 'react-router-dom';

function CardItem() {
    return (
        <>
        <li className="cards_item">
            <Link className="cards_item_link">
                <div className="cards_item_info">
                    <h5 className="cards_item_text">  </h5>
                </div>
            </Link>
        </li>
        </>
    )
}

export default CardItem