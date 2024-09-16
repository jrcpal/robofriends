import React from 'react';
import Card from './Card';

export default function CardList({robots}) {
  console.log('rendering CardList');
  return (
    <div>
      {robots.map((robot) => (
        <Card key={robot.id} robot={robot} />
      ))}
    </div>
  );
}