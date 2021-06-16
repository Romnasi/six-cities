import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const cardData = [
  {
    city: {
      name: 'Amsterdam',
    },
    id: 1,
    name: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    previewImage: 'apartment-01.jpg',
    isPremium: true,
    isFavorite: false,
    rating: 80,
  },
  {
    city: {
      name: 'Amsterdam',
    },
    id: 2,
    name: 'Wood and stone place',
    type: 'Private offer',
    price: 80,
    previewImage: 'room.jpg',
    isPremium: false,
    isFavorite: true,
    rating: 80,
  },
  {
    city: {
      name: 'Amsterdam',
    },
    id: 3,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    previewImage: 'apartment-02.jpg',
    isPremium: false,
    isFavorite: false,
    rating: 80,
  },
  {
    city: {
      name: 'Amsterdam',
    },
    id: 4,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    previewImage: 'apartment-03.jpg',
    isPremium: true,
    isFavorite: false,
    rating: 100,
  },
  {
    city: {
      name: 'Amsterdam',
    },
    id: 5,
    name: 'Wood and stone place',
    type: 'Private offer',
    price: 80,
    previewImage: 'room.jpg',
    isPremium: false,
    isFavorite: true,
    rating: 80,
  },
  {
    city: {
      name: 'Cologne',
    },
    id: 5,
    name: 'White castle',
    type: 'Apartment',
    price: 180,
    previewImage: 'apartment-small-04.jpg',
    isPremium: true,
    isFavorite: true,
    rating: 100,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App
      cardData={cardData}
    />
  </React.StrictMode>,
  document.getElementById('root'));
