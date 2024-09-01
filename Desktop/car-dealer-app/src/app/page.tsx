'use client'; 
import { useState, useEffect } from 'react';
import Dropdown from '../components/Dropdown';
import { useRouter } from 'next/navigation';

export default function FilterPage() {
  const [makes, setMakes] = useState<string[]>([]);
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [models, setModels] = useState<string[]>([]);
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [types, setTypes] = useState<string[]>(['Passenger Car']);
  const [selectedType, setSelectedType] = useState<string>('Passenger Car');
  const router = useRouter();

  useEffect(() => {
  
    async function fetchMakes() {
      const response = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');
      const data = await response.json();
      setMakes(data.Results.map((item: any) => item.MakeName));
    }

    fetchMakes();
  }, []);

  async function fetchModels(make: string) {
    try {
      const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${make}?format=json`);
      if (!response.ok) {
        throw new Error('Ağ yanıtı uygun değil');
      }
      const data = await response.json();
      setModels(data.Results.map((item: any) => item.Model_Name));
    } catch (error) {
      console.error('Modelleri getirirken hata:', error);
    }
  }
  
  useEffect(() => {
    if (selectedMake) {
      fetchModels(selectedMake);
    }
  }, [selectedMake]);
  

  const handleFilterChange = (type: string, value: string) => {
    switch (type) {
      case 'make':
        setSelectedMake(value);
        break;
      case 'model':
        setSelectedModel(value);
        break;
      case 'type':
        setSelectedType(value);
        break;
    }
  };

  const handleNextClick = () => {
    if (selectedMake && selectedModel && selectedType) {
      router.push(`/result/${selectedMake}/${selectedModel}`);
    } else {
     
      console.error("Make, Model veya Type seçilmemiş");
    }
  };

 
  const isButtonDisabled = !selectedMake || !selectedModel || !selectedType;

  return (
    <div className="filter-page">
      <h1>Filter Vehicles</h1>
      <Dropdown
        label="Make"
        options={makes}
        selected={selectedMake}
        onChange={(value) => handleFilterChange('make', value)}
      />
      <Dropdown
        label="Model"
        options={models}
        selected={selectedModel}
        onChange={(value) => handleFilterChange('model', value)}
      />
   <button
  onClick={handleNextClick}
  disabled={isButtonDisabled}
  className={`mt-4 px-6 py-2 rounded-lg text-white font-semibold transition duration-300 md:m-5
    ${isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 hover:shadow-lg'}`}
>
  Next
</button>

    </div>
  );
}
