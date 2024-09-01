'use client';
import React, { useState } from 'react';

const ResultPage = ({ params }: { params: { makeId: string; model: string } }) => {
  const { makeId, model } = params;
  const [result, setResult] = useState<any[]>([]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold text-center mb-6">Results</h1>
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-300 ease-in-out">
        <h2 className="text-2xl font-semibold mb-2 text-blue-600">Marka: {makeId}</h2>
        <h2 className="text-2xl font-semibold mb-2 text-blue-600">Yıl: {model}</h2>
      </div>

      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {result.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg border border-gray-200 shadow-md hover:border-blue-500 
                       hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <h3 className="text-lg font-bold text-gray-800">{item.name || 'Car Name'}</h3>
            <p className="text-gray-600">{item.description || 'Description of the car'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultPage;
