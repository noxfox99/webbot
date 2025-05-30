import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
  const { state } = useLocation();
  const { product, city, district, paymentMethod } = state || {};
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1a3a] to-[#1a3a6e] p-6 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-6 text-center">
        <h1 className="text-2xl font-bold text-[#222] mb-6">Спасибо за покупку!</h1>
        
        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
          <h2 className="font-bold text-[#222] mb-2">Детали заказа:</h2>
          <p className="text-[#222]"><span className="font-medium">Товар:</span> {product?.name}</p>
          <p className="text-[#222]"><span className="font-medium">Цена:</span> {product?.price}</p>
          <p className="text-[#222]"><span className="font-medium">Способ оплаты:</span> {paymentMethod?.name}</p>
        </div>

        <div className="mb-6 p-4 bg-[#f8f5f2] rounded-lg border border-[#d4a762]">
          <h2 className="font-bold text-[#222] mb-2">Адрес получения:</h2>
          <p className="text-[#222]">проспект Комсомольский, 23</p>
          <p className="text-[#222]">Город: {city}</p>
          {district && <p className="text-[#222]">Район: {district}</p>}
        </div>

        <button 
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-[#d4a762] hover:bg-[#c29554] text-white rounded-lg shadow-md transition-colors font-medium"
        >
          Вернуться на главную
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
