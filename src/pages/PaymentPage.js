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

  const products = [
    { 
      id: 1, 
      name: "Корица цейлонская", 
      price: "450₽", 
      available: true, 
      image: "https://via.placeholder.com/300x200?text=Корица+цейлонская",
      description: "Настоящая цейлонская корица высшего качества" 
    },
    { 
      id: 2, 
      name: "Куркума индийская", 
      price: "320₽", 
      available: true, 
      image: "https://via.placeholder.com/300x200?text=Куркума+индийская",
      description: "Яркая ароматная куркума из Индии" 
    },
    { 
      id: 3, 
      name: "Кардамон зеленый", 
      price: "680₽", 
      available: true, 
      image: "https://via.placeholder.com/300x200?text=Кардамон+зеленый",
      description: "Свежий зеленый кардамон с насыщенным ароматом" 
    },
    { 
      id: 4, 
      name: "Имбирь молотый", 
      price: "290₽", 
      available: true, 
      image: "https://via.placeholder.com/300x200?text=Имбирь+молотый",
      description: "Острый ароматный молотый имбирь" 
    },
    { 
      id: 5, 
      name: "Гвоздика целая", 
      price: "380₽", 
      available: true, 
      image: "https://via.placeholder.com/300x200?text=Гвоздика+целая",
      description: "Ароматные цветочные бутоны гвоздики" 
    }
  ];

  const handlePaymentMethodSelect = (method) => {
    console.log('Selected payment method:', method);
    alert(`Выбран способ оплаты: ${method.name}\nТовар: ${product?.name}\nГород: ${city}\nРайон: ${district || 'Не указан'}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1a3a] to-[#1a3a6e] p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-[#222] p-4 mb-6 rounded-lg shadow-md border-b-2 border-[#d4a762]">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#d4a762] rounded-full shadow-lg mb-2 flex items-center justify-center border-2 border-white">
              <span className="text-2xl font-bold text-white">S</span>
            </div>
            <h1 className="text-xl font-bold text-white font-serif">Spice Market</h1>
          </div>
        </div>

        {/* Product Card */}
        {product && (
          <div className="mb-6 bg-white rounded-lg shadow-md border border-[#ddd] overflow-hidden">
            <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-[#222] mb-2 font-serif">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-[#d4a762]">{product.price}</span>
              </div>
            </div>
          </div>
        )}

        {/* Payment Methods */}
        <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
          <h1 className="text-2xl font-bold text-center text-[#222] mb-8">ВЫБЕРИТЕ МЕТОД ОПЛАТЫ</h1>
          
          <div className="flex overflow-x-auto pb-2 space-x-4">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => handlePaymentMethodSelect(method)}
                className="flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all hover:shadow-md min-w-[120px] flex-shrink-0"
              >
                <span className="text-3xl mb-2 text-[#222]">{method.icon}</span>
                <span className="text-[#222] font-medium text-sm text-center">{method.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-center">
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
