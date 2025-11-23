import React from 'react';
import FoodCard from '../components/FoodCard';
import { foods } from '../data/foods';
import { restaurants } from '../data/restaurants';

interface Props {
  restaurantId: number;
  onBack: () => void;
  onOrder: () => void;
}

const RestaurantDetailsPage: React.FC<Props> = ({
  restaurantId,
  onBack,
  onOrder,
}) => {
  const restaurant = restaurants.find((r) => r.id === restaurantId);
  const foodItems = foods[restaurantId] || [];

  return (
    <div style={{ padding: '20px', fontFamily: 'Poppins, sans-serif' }}>
      <button
        onClick={onBack}
        style={{
          padding: '8px 15px',
          borderRadius: '8px',
          border: 'none',
          background: '#FF6B6B',
          color: '#fff',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
      >
        ← Back
      </button>

      <h1 style={{ fontSize: '28px', color: '#FF6B6B' }}>
        {restaurant?.name} {restaurant?.icon}
      </h1>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        {foodItems.map((food) => (
          <FoodCard
            key={food.id}
            name={food.name}
            icon={food.icon}
            price={food.price}
          />
        ))}
      </div>

      <button
        onClick={onOrder}
        style={{
          marginTop: '30px',
          padding: '15px 25px',
          borderRadius: '12px',
          border: 'none',
          background: '#FF6B6B',
          color: '#fff',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Order Now 🍽️
      </button>
    </div>
  );
};

export default RestaurantDetailsPage;
