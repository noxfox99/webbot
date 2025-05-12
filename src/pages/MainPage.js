import React from "react";
import { useNavigate } from "react-router-dom";

const cities = ["Москва", "Санкт-Петербург", "Казань"];
const regions = ["Центральный", "Южный", "Северо-Западный", "Дальневосточный"];
const goods = [
  { name: "Товар 1", price: "100₽" },
  { name: "Товар 2", price: "200₽" },
  { name: "Товар 3", price: "300₽" },
];

function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center p-5">
      <header className="w-full bg-gradient-to-r from-gray-700 to-gray-900 p-4 mb-4">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center space-x-2 text-white">
            <span className="text-2xl font-semibold">X</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 20" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v6.586l3.707-3.707a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 10.586V4a1 1 0 011-1z" clipRule="evenodd" />
              <path d="M10 13a7 7 0 100-14 7 7 0 000 14z" />
            </svg>
          </a>
          <a href="https://t.me/t" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Telegram" viewBox="0 0 512 512" className="w-8 h-8 text-white">
              <rect width="512" height="512" fill="#37aee2" rx="15%"></rect>
              <path fill="#c8daea" d="M199 404c-11 0-10-4-13-14l-32-105 245-144"></path>
              <path fill="#a9c9dd" d="M199 404c7 0 11-4 16-8l45-43-56-34"></path>
              <path fill="#f6fbfe" d="M204 319l135 99c14 9 26 4 30-14l55-258c5-22-9-32-24-25L79 245c-21 8-21 21-4 26l83 26 190-121c9-5 17-3 11 4"></path>
            </svg>
          </a>
        </div>
      </header>

      <div className="w-full max-w-md mb-6 flex flex-col gap-2 sm:flex-row sm:justify-between">
        <button className="bg-redButton text-white w-full sm:w-auto px-4 py-2 rounded shadow-lg">Войти</button>
        <button className="bg-redButton text-white w-full sm:w-auto px-4 py-2 rounded shadow-lg">Регистрация</button>
        <button className="bg-gray-700 text-white w-full sm:w-auto px-4 py-2 rounded shadow-lg">Меню</button>
      </div>

      <div className="w-full max-w-md mb-6">
        <label className="block mb-2">Выберите город:</label>
        <select className="w-full p-2 rounded bg-gray-800 text-white shadow-lg" defaultValue={cities[0]}>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full max-w-md mb-6">
        <label className="block mb-2">Выберите регион:</label>
        <select className="w-full p-2 rounded bg-gray-800 text-white shadow-lg" defaultValue={regions[0]}>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full max-w-md space-y-3 overflow-y-auto">
        {goods.map((item, index) => (
          <div key={index} className="flex justify-between items-center p-4 bg-gray-800 rounded shadow-lg">
            <span className="text-sm sm:text-base">{item.name}</span>
            <span className="text-sm sm:text-base">{item.price}</span>
            <button
              className="bg-redButton text-white px-3 py-1 rounded shadow-lg"
              onClick={() => navigate("/payment")}
            >
              Купить
            </button>
          </div>
        ))}
      </div>

      <footer className="w-full bg-gradient-to-r from-gray-700 to-gray-900 p-4 mt-4 text-center text-white">
        © 2025 Магазин - Все права защищены
      </footer>
    </div>
  );
}

export default MainPage;
