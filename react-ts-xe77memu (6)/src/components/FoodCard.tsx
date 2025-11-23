import React from 'react';

interface Props {
  name: string;
  icon: string;
  price: number;
}

const FoodCard: React.FC<Props> = ({ name, icon, price }) => {
  return (
    <div
      style={{
        width: '180px',
        padding: '15px',
        borderRadius: '15px',
        background: '#FFF',
        boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
        textAlign: 'center',
        margin: '10px',
      }}
    >
      <div style={{ fontSize: '40px' }}>{icon}</div>
      <h4 style={{ marginTop: '8px' }}>{name}</h4>
      <p style={{ color: '#FF6B6B', fontWeight: '600' }}>${price}</p>
    </div>
  );
};

export default FoodCard;
