import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function PlayingCardList() {
    const [cards, setCards] = useState([]);
    const addCard = async () => {
        const response = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/draw/"
        );

        setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    };
    return (
        <div className="PlayingCardList">
        <h3>Pick a card, any card!</h3>
        <div>
            <button onClick={addCard}>Add a playing card!</button>
        </div>
        <div className="PlayingCardList-card-area">
            {cards.map(cardData => (
            <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
            ))}
        </div>
        </div>
    );
}

PlayingCardList.defaultProps = {};

export default PlayingCardList;
