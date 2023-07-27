import React from "react";
import { useAxios } from "./hooks";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

const BASE_URL = "https://deckofcardsapi.com/api";


/* Renders a list of playing cards.
 * Can also add a new card at random. */
function PlayingCardList() {
    const [cards, addCard] = useAxios(BASE_URL);

    return (
        <div className="PlayingCardList">
            <h3>Pick a card, any card!</h3>
            <div>
                <button onClick={() => addCard("/deck/new/draw/")}>Add a playing card!</button>
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
