import React from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

const cities = [
  'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad',
  'Chennai', 'Kolkata', 'Pune', 'Jaipur', 'Lucknow',
];

const SeedProducts = () => {
  const getRandomCity = () => {
    return cities[Math.floor(Math.random() * cities.length)];
  };

  const handleSeed = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();

      for (const item of data) {
        await addDoc(collection(db, 'ads'), {
          title: item.title,
          price: item.price,
          description: item.description,
          location: getRandomCity(), 
          postedAt: new Date().toLocaleDateString(),
          imageUrl: item.image,
        });
      }

      alert('Products added to Firestore');
    } catch (err) {
      console.error('Seeding error:', err);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={handleSeed}
        className="bg-green-600 text-white px-4 py-2 rounded-md"
      >
        Seed Products
      </button>
    </div>
  );
};

export default SeedProducts;
