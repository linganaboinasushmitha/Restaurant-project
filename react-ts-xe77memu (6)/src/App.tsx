import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import RestaurantPage from './pages/RestaurantPage';
import RestaurantDetailsPage from './pages/RestaurantDetailsPage';
import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
  const [page, setPage] = useState<
    'landing' | 'restaurants' | 'details' | 'login'
  >('landing');
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<
    number | null
  >(null);

  return (
    <div>
      {page === 'landing' && (
        <LandingPage onExplore={() => setPage('restaurants')} />
      )}

      {page === 'restaurants' && (
        <RestaurantPage
          onSelectRestaurant={(id) => {
            setSelectedRestaurantId(id);
            setPage('details');
          }}
        />
      )}

      {page === 'details' && selectedRestaurantId && (
        <RestaurantDetailsPage
          restaurantId={selectedRestaurantId}
          onBack={() => setPage('restaurants')}
          onOrder={() => setPage('login')}
        />
      )}

      {page === 'login' && <LoginPage onBack={() => setPage('details')} />}
    </div>
  );
};

export default App;
