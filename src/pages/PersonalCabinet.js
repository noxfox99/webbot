import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PersonalCabinet = () => {
  const { state } = useLocation();
  const { login, password } = state || {};
  const navigate = useNavigate();

  const menuItems = [
    { title: "Ваши покупки", icon: "🛍️" },
    { title: "Ваши заказы", icon: "📦" },
    { title: "Заявки на покупки и пополнения", icon: "📝" },
    { title: "Завис платёж?", icon: "⏳" },
    { title: "Пригласи друга и заработай", icon: "👥" },
    { title: "Подписки", icon: "🔔" },
    { title: "Привязать Telegram", icon: "✈️" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1a3a] to-[#1a3a6e] p-6">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center text-[#222] mb-6">Личный Кабинет</h1>
        
        <div className="mb-6 p-4 bg-green-100 rounded-lg border border-green-200">
          <h2 className="text-lg font-bold text-center text-green-800 mb-3">Вы успешно зарегистрированы</h2>
          <p className="text-[#222]"><span className="font-medium">Ваш логин:</span> {login}</p>
          <p className="text-[#222]"><span className="font-medium">Ваш пароль:</span> {password}</p>
          <p className="text-red-600 text-sm mt-3">
            Запомните свои данные, так как в случае утери - восстановить их будет невозможно.
          </p>
          <p className="text-[#222] mt-2">С уважением, Администрация.</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => alert(`Выбрано: ${item.title}`)}
              className="flex flex-col items-center justify-center p-3 bg-[#f8f5f2] hover:bg-[#d4a762] hover:text-white text-[#222] rounded-lg transition-colors"
            >
              <span className="text-2xl mb-1">{item.icon}</span>
              <span className="text-sm text-center">{item.title}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-[#3a5a99] hover:bg-[#2d4375] text-white rounded-lg shadow-md transition-colors font-medium"
          >
            На главную
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalCabinet;
