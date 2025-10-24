import React from 'react';
import { useParams } from 'react-router-dom';
import { models } from '../data';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Profile() {
  const { id } = useParams();
  const model = models.find((m) => m.id === parseInt(id));

  if (!model) return <div className="p-6">Model not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">{model.name}</h1>
      <p className="text-gray-600 mb-2">Age: {model.age}</p>
      <p className="text-gray-500 mb-4">{model.description}</p>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {model.images.map((img, i) => (
          <img key={i} src={img} alt={`${model.name}-${i}`} className="rounded-xl w-full h-48 object-cover" />
        ))}
      </div>
      <WhatsAppButton number={model.whatsapp} />
    </div>
  );
}
