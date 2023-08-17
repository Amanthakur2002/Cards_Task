import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';
import { CardData } from './api';

const App = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    CardData().then(data => {
      setCardData(data.products);
      console.log("data",data)
    });
  }, []);

  return (
    <div className="App">
      <h1>Card Component</h1>
      <div className="card-container">
        {cardData.map(card => (
          <Card
            key={card.id}
            images={card.thumbnail}
            title={card.title}
            name={card.description}
            rating={card.rating}
            price={card.price}
          />
        ))}
      </div>
    </div>
  );
};

export default App;