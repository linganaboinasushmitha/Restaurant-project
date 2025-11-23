import React from 'react';

interface Props {
  onExplore: () => void;
}

const LandingPage: React.FC<Props> = ({ onExplore }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#FFF7F0',
        fontFamily: 'Poppins, sans-serif',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '50px', color: '#FF6B6B' }}>🍽️ Foodie World</h1>
      <p style={{ fontSize: '20px', margin: '20px 0', color: '#333' }}>
        Discover the best restaurants around you!
      </p>
      <button
        onClick={onExplore}
        style={{
          padding: '15px 30px',
          fontSize: '18px',
          borderRadius: '12px',
          border: 'none',
          background: '#FF6B6B',
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        Explore 🍕
      </button>
    </div>
  );
};

export default LandingPage;
