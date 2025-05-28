import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaCheckCircle, FaComments, FaSignInAlt, FaUserPlus } from "react-icons/fa";

const cities = [
  "Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань",
  "Нижний Новгород", "Челябинск", "Самара", "Омск", "Ростов-на-Дону",
  "Уфа", "Красноярск", "Пермь", "Воронеж", "Волгоград",
  "Краснодар", "Саратов", "Тюмень", "Тольятти", "Ижевск",
  "Барнаул", "Ульяновск", "Иркутск", "Хабаровск", "Ярославль",
  "Владивосток", "Махачкала", "Томск", "Оренбург", "Кемерово"
];

const spices = [
  { id: 1, name: "Корица", price: "200₽", available: true, image: "cinnamon.jpg" },
  { id: 2, name: "Куркума", price: "150₽", available: true, image: "turmeric.jpg" },
  { id: 3, name: "Кардамон", price: "300₽", available: false, image: "cardamom.jpg" },
  { id: 4, name: "Имбирь", price: "180₽", available: true, image: "ginger.jpg" },
  { id: 5, name: "Гвоздика", price: "220₽", available: true, image: "cloves.jpg" }
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
  const [selectedCity, setSelectedCity] = useState(null);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [showRegions, setShowRegions] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleBuyClick = () => {
    setShowRegions(!showRegions);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-black to-orange-600 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-1">
                {/* Логотип */}
                <span className="text-2xl font-bold text-orange-600">S</span>
              </div>
              <span className="text-white font-semibold">SpiceMarket</span>
            </div>
            
            <nav className="flex space-x-6">
              <button className="text-white flex items-center space-x-1 hover:text-orange-200 transition">
                <FaShoppingCart />
                <span>Товары</span>
              </button>
              <button className="text-white flex items-center space-x-1 hover:text-orange-200 transition">
                <FaCheckCircle />
                <span>Проверка заказа</span>
              </button>
              <button className="text-white flex items-center space-x-1 hover:text-orange-200 transition">
                <FaComments />
                <span>Отзывы</span>
              </button>
            </nav>
          </div>
          
          <div className="flex space-x-4">
            <button className="text-white flex items-center space-x-1 hover:text-orange-200 transition">
              <FaSignInAlt />
              <span>Войти</span>
            </button>
            <button className="text-white flex items-center space-x-1 hover:text-orange-200 transition">
              <FaUserPlus />
              <span>Регистрация</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with rotating phrases */}
      <section className="w-full bg-gradient-to-r from-orange-500 to-orange-300 py-12 flex justify-center items-center shadow-inner">
        <div 
          className="text-center text-white font-bold text-3xl animate-fade"
          style={{
            width: "300px",
            height: "200px",
            fontSize: "14px",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {phrases[currentPhrase]}
        </div>
      </section>

      {/* City Selection */}
      <section className="container mx-auto my-8 text-center">
        <h2 className="text-xl font-semibold mb-4">Выбери город</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-4">
          {cities.slice(0, 30).map((city) => (
            <button
              key={city}
              className={`p-3 rounded-lg shadow-md transition-all ${selectedCity === city ? 
                'bg-orange-500 text-white transform scale-105' : 
                'bg-white hover:bg-orange-100'}`}
              onClick={() => setSelectedCity(city)}
            >
              {city}
            </button>
          ))}
        </div>
      </section>

      {/* Products Section */}
      {selectedCity && (
        <section className="container mx-auto my-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {spices.map((spice) => (
              <div key={spice.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-32 bg-orange-100 flex items-center justify-center">
                  <span className="text-4xl text-orange-500">{spice.name.charAt(0)}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{spice.name}</h3>
                  <p className="text-gray-700 mb-2">Цена: {spice.price}</p>
                  <p className={`mb-3 ${spice.available ? 'text-green-600' : 'text-red-600'}`}>
                    {spice.available ? 'Есть в наличии' : 'Нет в наличии'}
                  </p>
                  <button
                    className={`w-full py-2 rounded-lg ${spice.available ? 
                      'bg-orange-500 hover:bg-orange-600 text-white' : 
                      'bg-gray-300 cursor-not-allowed'}`}
                    disabled={!spice.available}
                    onClick={handleBuyClick}
                  >
                    Купить
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Regions Section */}
      {showRegions && selectedCity && (
        <section className="container mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Выберите район в {selectedCity}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {Array.from({ length: 4 }, (_, i) => (
              <button 
                key={i} 
                className="p-3 bg-orange-100 hover:bg-orange-200 rounded-lg transition"
              >
                Район {i+1}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-black to-gray-800 p-6 mt-8 text-center text-white">
        <p>© 2025 SpiceMarket - Все права защищены</p>
      </footer>
    </div>
  );
}

export default MainPage;
