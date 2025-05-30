import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const paymentMethods = [
  { id: 1, name: 'Bitcoin', icon: '₿' },
  { id: 2, name: 'Litecoin', icon: 'Ł' },
  { id: 3, name: 'Банковская карта', icon: '💳' },
  { id: 4, name: 'СБП', icon: '🏦' },
  { id: 5, name: 'Оплата купоном', icon: '🎫' },
  { id: 6, name: 'Оплата с баланса', icon: '💰' }
];

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, city, district } = location.state || {};

  const handlePaymentMethodSelect = (method) => {
    alert(`Выбран способ оплаты: ${method.name}\nТовар: ${product?.name}\nГород: ${city}\nРайон: ${district}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1a3a] to-[#1a3a6e] p-6">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center text-[#222] mb-8">ВЫБЕРИТЕ МЕТОД ОПЛАТЫ</h1>
        
        {product && (
          <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
            <h2 className="font-bold text-[#222] mb-2">Ваш заказ:</h2>
            <p className="text-[#222]"><span className="font-medium">Товар:</span> {product.name}</p>
            <p className="text-[#222]"><span className="font-medium">Цена:</span> {product.price}</p>
            <p className="text-[#222]"><span className="font-medium">Город:</span> {city}</p>
            {district && <p className="text-[#222]"><span className="font-medium">Район:</span> {district}</p>}
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => handlePaymentMethodSelect(method)}
              className="flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all hover:shadow-md"
            >
              <span className="text-3xl mb-2 text-[#222]">{method.icon}</span>
              <span className="text-[#222] font-medium">{method.name}</span>
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

export default PaymentPage;
