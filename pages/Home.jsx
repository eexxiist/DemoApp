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
    }, []);

    return (
        <div>
            <ul style={{ display: "flex" }}>
                {cards.map((card) => (
                    <li
                        key={card.id}
                        style={{
                            border: "1px solid black",
                            display: "block",
                            width: "300px",
                            margin: "10px",
                            padding: "20px",
                        }}
                    >
                        <h4 style={{ marginBottom: "20px" }}>{card.title}</h4>
                        <p>{card.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
