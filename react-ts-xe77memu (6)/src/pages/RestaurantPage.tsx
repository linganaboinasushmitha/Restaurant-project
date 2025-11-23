import React, { useState } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import { restaurants } from '../data/restaurants';

interface Props {
  onSelectRestaurant: (id: number) => void;
}

const RestaurantPage: React.FC<Props> = ({ onSelectRestaurant }) => {
  const [search, setSearch] = useState('');

  const filteredRestaurants = restaurants.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        padding: '20px',
        fontFamily: 'Poppins, sans-serif',
        background: '#FFF7F0',
        minHeight: '100vh',
      }}
    >
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '30px',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <h1 style={{ color: '#FF6B6B', fontSize: '28px' }}>Foodie Fam Spot</h1>

        <input
          type="text"
          placeholder="Search restaurants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: '10px',
            flex: 1,
            minWidth: '200px',
            margin: '0 20px',
            borderRadius: '10px',
            border: '1px solid #ccc',
          }}
        />
      </header>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
        }}
      >
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            name={restaurant.name}
            icon={restaurant.icon}
            rating={restaurant.rating}
            onClick={() => onSelectRestaurant(restaurant.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;
