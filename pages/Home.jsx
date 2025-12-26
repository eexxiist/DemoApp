import React, { useEffect, useState } from "react";

const Home = () => {
    const [cards, setCards] = useState([]);
    const limit = 5;
    useEffect(() => {
        const getCards = async () => {
            try {
                const res = await fetch(
                    `https://dummyjson.com/posts?limit=${limit}`
                );
                const data = await res.json();
                setCards(data.posts);
            } catch (error) {
                console.log(error, "Error");
            }
        };
        getCards();
        console.log(cards);
    }, []);

    return (
        <div>
            <ul>
                {cards.map((card) => (
                    <li>
                        <h4>{card.title}</h4>
                        <p>{card.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
