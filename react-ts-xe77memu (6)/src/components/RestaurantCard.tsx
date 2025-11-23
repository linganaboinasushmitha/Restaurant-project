import React from 'react';

interface Props {
  name: string;
  icon: string;
  rating: number;
  onClick?: () => void;
}

const RestaurantCard: React.FC<Props> = ({ name, icon, rating, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: '230px',
        padding: '18px',
        borderRadius: '20px',
        background: '#FFFFFF',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        textAlign: 'center',
        margin: '15px',
        cursor: 'pointer',
        transition: '0.3s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.25)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      }}
    >
      <div style={{ fontSize: '45px' }}>{icon}</div>
      <h3 style={{ fontWeight: '600', marginTop: '10px' }}>{name}</h3>
      <p style={{ fontSize: '16px', marginTop: '5px', color: '#FF6B6B' }}>
        ⭐ {rating}
      </p>
    </div>
  );
};

export default RestaurantCard;
