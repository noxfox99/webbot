import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const DistrictSelection = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { product, city } = state || {};

  // Получаем районы для выбранного города
  const cityDistricts = {
    "Москва": ["Центральный", "Северный", "Северо-Восточный", "Восточный", "Юго-Восточный", "Южный", "Юго-Западный", "Западный", "Северо-Западный", "Зеленоградский"],
    // ... остальные города как в основном файле
  };

  const districts = cityDistricts[city] || [];

  const handleDistrictSelect = (district) => {
    navigate("/payment", {
      state: {
        product,
        city,
        district
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1a3a] to-[#1a3a6e] p-6">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center text-[#222] mb-6">
          Выберите район в {city} для доставки
        </h1>

        {product && (
          <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
            <h2 className="font-bold text-[#222] mb-2">Ваш заказ:</h2>
            <p className="text-[#222]"><span className="font-medium">Товар:</span> {product.name}</p>
            <p className="text-[#222]"><span className="font-medium">Цена:</span> {product.price}</p>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {districts.map((district) => (
            <button
              key={district}
              onClick={() => handleDistrictSelect(district)}
              className="p-3 bg-[#f8f5f2] hover:bg-[#d4a762] hover:text-white text-[#222] rounded-lg text-sm transition-colors font-medium text-center"
            >
              {district}
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button 
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-[#3a5a99] hover:bg-[#2d4375] text-white rounded-lg shadow-md transition-colors font-medium"
          >
            Назад
          </button>
        </div>
      </div>
    </div>
  );
};

export default DistrictSelection;
