import React from 'react';
import ModelCard from '../components/ModelCard';
import { models } from '../data';

export default function Home() {
  return (
    <div className="p-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {models.map((model) => (
        <ModelCard key={model.id} model={model} />
      ))}
    </div>
  );
}
