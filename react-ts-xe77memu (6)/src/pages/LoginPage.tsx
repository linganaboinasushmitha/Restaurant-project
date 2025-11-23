import React, { useState } from 'react';

interface Props {
  onBack: () => void;
}

const LoginPage: React.FC<Props> = ({ onBack }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Order placed!\nName: ${name}\nAddress: ${address}`);
  };

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

      <h1 style={{ color: '#FF6B6B' }}>Login & Order</h1>

      <form
        onSubmit={handleSubmit}
        style={{ marginTop: '20px', maxWidth: '400px' }}
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
            borderRadius: '10px',
            border: '1px solid #ccc',
          }}
        />

        <textarea
          placeholder="Delivery Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
            borderRadius: '10px',
            border: '1px solid #ccc',
          }}
        />

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '12px',
            border: 'none',
            background: '#FF6B6B',
            color: '#fff',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Place Order 🍕
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
