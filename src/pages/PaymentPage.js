import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, city, district } = location.state || {};

  const paymentMethods = [
    { id: 1, name: 'Bitcoin', icon: '₿' },
    { id: 2, name: 'Litecoin', icon: 'Ł' },
    { id: 3, name: 'Банковская карта', icon: '💳' },
    { id: 4, name: 'СБП', icon: '🏦' },
    { id: 5, name: 'Оплата купоном', icon: '🎫' },
    { id: 6, name: 'Оплата с баланса', icon: '💰' }
  ];

  const handlePaymentSelect = (method) => {
    console.log(`Selected payment method: ${method.name}`);
    // Здесь можно добавить логику обработки выбранного метода оплаты
    // Например, перенаправление на соответствующий платежный шлюз
  };

  return (
    <div className="min-h-screen bg-[#f8f5f2] p-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-[#222]">ВЫБЕРИТЕ МЕТОД ОПЛАТЫ</h1>
        
        {product && (
          <div className="mb-6 p-4 bg-[#f0e6d6] rounded-lg">
            <h2 className="font-bold text-lg mb-2">Ваш заказ:</h2>
            <p><span className="font-semibold">Товар:</span> {product.name}</p>
            <p><span className="font-semibold">Цена:</span> {product.price}</p>
            {city && <p><span className="font-semibold">Город:</span> {city}</p>}
            {district && <p><span className="font-semibold">Район:</span> {district}</p>}
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => handlePaymentSelect(method)}
              className="flex flex-col items-center justify-center p-4 border border-[#ddd] rounded-lg hover:border-[#d4a762] hover:bg-[#f8f5f2] transition-colors"
            >
              <span className="text-3xl mb-2">{method.icon}</span>
              <span className="text-sm font-medium">{method.name}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 flex justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Назад
          </button>
          <button 
            className="px-4 py-2 bg-[#d4a762] text-white rounded-lg hover:bg-[#c29554] transition-colors"
            onClick={() => alert('Оплата принята в обработку!')}
          >
            Подтвердить
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
