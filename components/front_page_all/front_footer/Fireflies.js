import React, { useEffect, useState } from 'react';
import './footer.css';

const Fireflies = () => {
  const [fireflies, setFireflies] = useState([]);

  useEffect(() => {
    const newFireflies = [];
    for (let i = 0; i < 5; i++) {
      newFireflies.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 5 + Math.random() * 10
      });
    }
    setFireflies(newFireflies);
  }, []);

  return (
    <>
      {fireflies.map(firefly => (
        <div
          key={firefly.id}
          className="firefly"
          style={{
            left: `${firefly.x}%`,
            top: `${firefly.y}%`,
            animation: `fireflyFloat ${firefly.duration}s ease-in-out ${firefly.delay}s infinite`
          }}
        />
      ))}
    </>
  );
};

export default Fireflies;