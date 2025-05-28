import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const cities = ["Москва", "Санкт-Петербург", "Казань"];
const regions = ["Центральный", "Южный", "Северо-Западный", "Дальневосточный"];
const goods = [
  { name: "Товар 1", price: "100₽" },
  { name: "Товар 2", price: "200₽" },
  { name: "Товар 3", price: "300₽" },
];

const phrases = [
  "Купи специи в своем городе",
  "Готовь на максималках",
  "Развивай кухонные способности",
  "Наши специи лучшие на рынке",
  "Удиви родных, приготовь изысканное"
];

function MainPage() {
  const navigate = useNavigate();
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        setAnimate(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center p-5 bg-gradient-to-b from-orange-50 to-white">
      <header className="w-full bg-gradient-to-r from-black to-orange-600 p-4 mb-6 rounded-lg shadow-xl">
        <div className="flex flex-col items-center">
          <div className="w-full flex justify-between items-center mb-3">
            <div className="flex space-x-4">
              <NavButton icon="🛒" text="Товары" />
              <NavButton icon="✔️" text="Проверка заказа" />
              <NavButton icon="💬" text="Отзывы" />
            </div>
            
            <div className="flex space-x-4">
              <NavButton icon="💰" text="Работа" />
              <NavButton icon="📜" text="Правила" />
              <NavButton icon="⌄" text="Ещё" />
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-lg mb-2 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">S</span>
            </div>
            <h1 className="text-xl font-bold text-white">Spice Market</h1>
          </div>
        </div>
      </header>

      <div className="w-full max-w-md mb-6 flex flex-col gap-2 sm:flex-row sm:justify-between">
        <button className="bg-orange-600 hover:bg-orange-700 text-white w-full sm:w-auto px-4 py-2 rounded-lg shadow-md transition-colors">Войти</button>
        <button className="bg-orange-600 hover:bg-orange-700 text-white w-full sm:w-auto px-4 py-2 rounded-lg shadow-md transition-colors">Регистрация</button>
        <button className="bg-gray-800 hover:bg-gray-700 text-white w-full sm:w-auto px-4 py-2 rounded-lg shadow-md transition-colors">Меню</button>
      </div>

      {/* Новый анимированный текстовый блок */}
      <div className="w-[300px] h-[200px] p-[10px] bg-gradient-to-br from-orange-100 to-white border-2 border-orange-300 rounded-xl shadow-lg mb-6 flex items-center justify-center text-center">
        <p className={`text-gray-800 text-[14px] font-medium transition-opacity duration-500 ${animate ? 'opacity-100' : 'opacity-0'}`}>
          {phrases[currentPhrase]}
        </p>
      </div>

      <div className="w-full max-w-md mb-6">
        <label className="block mb-2 text-gray-800 font-medium">Выберите город:</label>
        <select className="w-full p-2 rounded-lg bg-gray-800 text-white shadow-md focus:ring-2 focus:ring-orange-500">
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full max-w-md mb-6">
        <label className="block mb-2 text-gray-800 font-medium">Выберите регион:</label>
        <select className="w-full p-2 rounded-lg bg-gray-800 text-white shadow-md focus:ring-2 focus:ring-orange-500">
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full max-w-md space-y-3 overflow-y-auto">
        {goods.map((item, index) => (
          <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md border border-orange-100 hover:shadow-lg transition-shadow">
            <span className="text-gray-800 font-medium">{item.name}</span>
            <span className="text-orange-600 font-bold">{item.price}</span>
            <button
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg shadow-md transition-colors"
              onClick={() => navigate("/payment")}
            >
              Купить
            </button>
          </div>
        ))}
      </div>

      <footer className="w-full bg-gradient-to-r from-gray-800 to-orange-600 p-4 mt-8 text-center text-white rounded-lg shadow-xl">
        © 2025 Spice Market - Все права защищены
      </footer>
    </div>
  );
}

function NavButton({ icon, text }) {
  return (
    <button className="flex items-center space-x-1 text-white hover:text-orange-200 transition-colors">
      <span>{icon}</span>
      <span className="text-sm font-medium">{text}</span>
    </button>
  );
}

export default MainPage;
