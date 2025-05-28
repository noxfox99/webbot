import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const allCities = [
  "Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань",
  "Нижний Новгород", "Челябинск", "Самара", "Омск", "Ростов-на-Дону"
];

const products = [
  { 
    id: 1, 
    name: "Корица цейлонская", 
    price: "450₽", 
    available: true, 
    image: "https://example.com/cinnamon.jpg",
    description: "Настоящая цейлонская корица высшего качества"
  },
  { 
    id: 2, 
    name: "Куркума индийская", 
    price: "320₽", 
    available: true, 
    image: "https://example.com/turmeric.jpg",
    description: "Яркая ароматная куркума из Индии"
  },
  { 
    id: 3, 
    name: "Кардамон зеленый", 
    price: "680₽", 
    available: true, 
    image: "https://example.com/cardamom.jpg",
    description: "Свежий зеленый кардамон с насыщенным ароматом"
  },
  { 
    id: 4, 
    name: "Имбирь молотый", 
    price: "290₽", 
    available: true, 
    image: "https://example.com/ginger.jpg",
    description: "Острый ароматный молотый имбирь"
  },
  { 
    id: 5, 
    name: "Гвоздика целая", 
    price: "380₽", 
    available: true, 
    image: "https://example.com/cloves.jpg",
    description: "Ароматные цветочные бутоны гвоздики"
  }
];

const cityDistricts = {
  "Москва": ["Центральный", "Северный", "Северо-Восточный", "Восточный", "Юго-Восточный"],
  "Санкт-Петербург": ["Адмиралтейский", "Василеостровский", "Выборгский", "Калининский", "Петроградский"],
  "Казань": ["Вахитовский", "Кировский", "Московский", "Приволжский", "Советский"]
};

function MainPage() {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState(null);
  const [showProducts, setShowProducts] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDistricts, setShowDistricts] = useState(false);

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
    <div className="min-h-screen flex flex-col items-center p-5 bg-[#f8f5f2] font-sans">
      {/* Хедер */}
      <header className="w-full bg-[#222] p-4 mb-6 rounded-lg shadow-md border-b-2 border-[#d4a762]">
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
            <div className="w-16 h-16 bg-[#d4a762] rounded-full shadow-lg mb-2 flex items-center justify-center border-2 border-white">
              <span className="text-2xl font-bold text-white">S</span>
            </div>
            <h1 className="text-xl font-bold text-white font-serif">Spice Market</h1>
          </div>
        </div>
      </header>

      {/* Кнопки входа */}
      <div className="w-full max-w-md mb-6 flex flex-col gap-2 sm:flex-row sm:justify-between">
        <button className="bg-[#d4a762] hover:bg-[#c29554] text-white w-full sm:w-auto px-4 py-2 rounded-lg shadow-md transition-colors font-medium">
          Войти
        </button>
        <button className="bg-[#d4a762] hover:bg-[#c29554] text-white w-full sm:w-auto px-4 py-2 rounded-lg shadow-md transition-colors font-medium">
          Регистрация
        </button>
        <button className="bg-[#222] hover:bg-[#333] text-white w-full sm:w-auto px-4 py-2 rounded-lg shadow-md transition-colors font-medium">
          Меню
        </button>
      </div>

      {/* Блок выбора города */}
      <div className="w-full mb-4 p-4 bg-white rounded-lg shadow-md border border-[#ddd]">
        <h2 className="text-lg font-bold mb-3 text-center text-[#222] font-serif">Выбери город</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {allCities.map((city, index) => (
            <React.Fragment key={city}>
              <span 
                onClick={() => handleCityClick(city)}
                className={`cursor-pointer px-2 py-1 rounded transition-colors ${selectedCity === city ? 'text-[#d4a762] font-bold' : 'text-[#222] hover:text-[#d4a762]'}`}
              >
                {city}
              </span>
              {index < allCities.length - 1 && <span className="text-[#999]">•</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Блоки товаров (5 вертикальных карточек) */}
      {showProducts && selectedCity && (
        <div className="w-full max-w-2xl mb-4 grid gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md border border-[#ddd] overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Место для фото */}
                <div className="w-full md:w-1/3 h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Фото {product.name}</span>
                </div>
                
                {/* Информация о товаре */}
                <div className="w-full md:w-2/3 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#222] font-serif mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#d4a762]">{product.price}</span>
                    <button
                      onClick={() => handleBuyClick(product)}
                      className="bg-[#d4a762] hover:bg-[#c29554] text-white px-6 py-2 rounded-lg shadow-md transition-colors font-medium"
                    >
                      Купить
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Блок районов (появляется после нажатия "Купить") */}
      {showDistricts && selectedCity && selectedProduct && (
        <div className="w-full max-w-2xl mb-6 p-4 bg-white rounded-lg shadow-md border border-[#ddd]">
          <h3 className="font-bold text-[#222] mb-4 font-serif text-center">
            Выберите район в {selectedCity} для доставки "{selectedProduct.name}"
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {cityDistricts[selectedCity]?.map((district) => (
              <button
                key={district}
                onClick={() => navigate("/payment")}
                className="p-3 bg-[#f8f5f2] hover:bg-[#d4a762] hover:text-white text-[#222] rounded-lg text-sm transition-colors font-medium text-center"
              >
                {district}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Футер */}
      <footer className="w-full bg-[#222] p-4 mt-8 text-center text-white rounded-lg shadow-md border-t-2 border-[#d4a762] font-serif">
        © 2025 Spice Market - Все права защищены
      </footer>
    </div>
  );
}

function NavButton({ icon, text }) {
  return (
    <button className="flex items-center space-x-1 text-white hover:text-[#d4a762] transition-colors font-medium">
      <span>{icon}</span>
      <span className="text-sm">{text}</span>
    </button>
  );
}

export default MainPage;
