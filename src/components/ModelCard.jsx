import React from 'react';
import { Link } from 'react-router-dom';

export default function ModelCard({ model }) {
  return (
    <Link to={`/profile/${model.id}`}>
  <div className="bg-white rounded-xl shadow-lg p-4 hover:scale-105 transform transition duration-300">
    <img 
      src={model.images[0]} 
      alt={model.name} 
      className="rounded-xl w-full h-48 sm:h-64 object-cover"
    />
    <h2 className="text-xl font-bold mt-2">{model.name}</h2>
    <p className="text-gray-600">{model.age} years</p>
    <p className="text-gray-500 text-sm mt-1">{model.description}</p>
  </div>
</Link>

  );
}
