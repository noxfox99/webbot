import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const allCities = [
  "Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань",
  "Нижний Новгород", "Челябинск", "Самара", "Омск", "Ростов-на-Дону",
  "Уфа", "Красноярск", "Пермь", "Воронеж", "Волгоград",
  "Краснодар", "Саратов", "Тюмень", "Тольятти", "Ижевск",
  "Барнаул", "Ульяновск", "Иркутск", "Хабаровск", "Ярославль",
  "Владивосток", "Махачкала", "Томск", "Оренбург", "Кемерово"
];

const products = [
  { id: 1, name: "Корица", price: "200₽", available: true, logo: "🟫" },
  { id: 2, name: "Куркума", price: "150₽", available: true, logo: "🟨" },
  { id: 3, name: "Кардамон", price: "300₽", available: false, logo: "🟩" },
  { id: 4, name: "Имбирь", price: "180₽", available: true, logo: "🟧" },
  { id: 5, name: "Гвоздика", price: "220₽", available: true, logo: "🟥" }
];

const cityDistricts = {
  "Москва": ["Центральный", "Северный", "Северо-Восточный", "Восточный", "Юго-Восточный"],
  "Санкт-Петербург": ["Адмиралтейский", "Василеостровский", "Выборгский", "Калининский", "Петроградский"],
  "Казань": ["Вахитовский", "Кировский", "Московский", "Приволжский", "Советский"]
};

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
  const [selectedCity, setSelectedCity] = useState(null);
  const [showProducts, setShowProducts] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDistricts, setShowDistricts] = useState(false);

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

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setShowProducts(true);
    setSelectedProduct(null);
    setShowDistricts(false);
  };

  const handleBuyClick = (product) => {
    setSelectedProduct(product);
    setShowDistricts(true);
  };

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

      {/* Анимированный текстовый блок с волной */}
      <div className="w-full mb-6 p-4 bg-gradient-to-r from-orange-100 to-orange-50 rounded-xl shadow-lg">
        <div className="flex justify-center">
          <div className="w-[300px] h-[200px] flex items-center justify-center">
            <p className={`text-center text-gray-800 text-lg font-medium transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {phrases[currentPhrase]}
            </p>
          </div>
        </div>
      </div>

      {/* Блок выбора города на всю ширину */}
      <div className="w-full mb-4 p-4 bg-orange-500 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-3 text-center text-white">Выбери город</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2">
          {allCities.map((city) => (
            <button
              key={city}
              onClick={() => handleCityClick(city)}
              className={`p-2 rounded-md text-sm transition-colors ${selectedCity === city ? 
                'bg-black text-white shadow-inner' : 
                'bg-orange-100 text-orange-800 hover:bg-orange-200 shadow'}`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Блок товаров */}
      {showProducts && selectedCity && (
        <div className="w-full max-w-md mb-4">
          {products.map((product) => (
            <div key={product.id} className="flex items-center justify-between p-3 mb-2 bg-white rounded-lg shadow-md border border-orange-100">
              <div className="text-2xl mr-3">{product.logo}</div>
              <div className="flex-grow">
                <h3 className="font-bold text-gray-800">{product.name}</h3>
                <div className="flex justify-between">
                  <span className="text-orange-600 font-bold">{product.price}</span>
                  <span className={`text-sm ${product.available ? 'text-green-600' : 'text-red-600'}`}>
                    {product.available ? 'Есть' : 'Нет'}
                  </span>
                </div>
              </div>
              <button
                onClick={() => handleBuyClick(product)}
                disabled={!product.available}
                className={`ml-3 px-4 py-2 rounded-lg shadow-md transition-colors ${product.available ? 
                  'bg-orange-600 hover:bg-orange-700 text-white' : 
                  'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
              >
                Купить
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Блок районов */}
      {showDistricts && selectedCity && selectedProduct && (
        <div className="w-full max-w-md mb-6 p-4 bg-orange-50 rounded-lg shadow-md border border-orange-200">
          <h3 className="font-bold text-gray-800 mb-2">Выберите район в {selectedCity}:</h3>
          <div className="grid grid-cols-2 gap-2">
            {cityDistricts[selectedCity]?.map((district) => (
              <button
                key={district}
                onClick={() => navigate("/payment")}
                className="p-2 bg-orange-100 hover:bg-orange-200 text-orange-800 rounded-md text-sm transition-colors"
              >
                {district}
              </button>
            ))}
          </div>
        </div>
      )}

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
