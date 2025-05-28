import React, { useState, useEffect, useRef } from "react";
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
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [showProducts, setShowProducts] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDistricts, setShowDistricts] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      if (textRef.current && containerRef.current) {
        const textWidth = textRef.current.offsetWidth;
        const textHeight = textRef.current.offsetHeight;
        containerRef.current.style.width = `${textWidth + 40}px`;
        containerRef.current.style.height = `${textHeight + 40}px`;
      }
    };

    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        setTimeout(updateSize, 10);
        setAnimate(true);
      }, 500);
    }, 3000);

    updateSize();
    window.addEventListener('resize', updateSize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updateSize);
    };
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
    <div className="min-h-screen flex flex-col items-center p-5 bg-[#f8f5f2] font-sans">
      {/* Хедер в стиле photobunker.pro */}
      <header className="w-full bg-[#2a2a2a] p-4 mb-6 rounded-lg shadow-md border-b-4 border-[#d4a762]">
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
        <button className="bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white w-full sm:w-auto px-4 py-2 rounded-lg shadow-md transition-colors font-medium">
          Меню
        </button>
      </div>

      {/* Анимированный текстовый блок */}
      <div 
        ref={containerRef}
        className="mb-6 flex items-center justify-center bg-white rounded-lg shadow-md transition-all duration-500 ease-in-out overflow-hidden border-2 border-[#d4a762]"
        style={{ padding: '20px', minWidth: '100px' }}
      >
        <p 
          ref={textRef}
          className={`text-center text-[#2a2a2a] transition-all duration-500 ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} font-serif`}
          style={{ 
            fontSize: '1.5rem', 
            fontWeight: 600,
            whiteSpace: 'nowrap'
          }}
        >
          {phrases[currentPhrase]}
        </p>
      </div>

      {/* Блок выбора города */}
      <div className="w-full mb-4 p-4 bg-white rounded-lg shadow-md border-2 border-[#d4a762]">
        <h2 className="text-lg font-bold mb-3 text-center text-[#2a2a2a] font-serif">Выбери город</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2">
          {allCities.map((city) => (
            <button
              key={city}
              onClick={() => handleCityClick(city)}
              className={`p-2 rounded-md text-sm transition-colors font-medium ${selectedCity === city ? 
                'bg-[#d4a762] text-white shadow-inner' : 
                'bg-[#f0e6d6] text-[#2a2a2a] hover:bg-[#e0d6c6] shadow'}`}
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
            <div key={product.id} className="flex items-center justify-between p-3 mb-2 bg-white rounded-lg shadow-md border-2 border-[#f0e6d6] hover:border-[#d4a762] transition-colors">
              <div className="text-2xl mr-3">{product.logo}</div>
              <div className="flex-grow">
                <h3 className="font-bold text-[#2a2a2a] font-serif">{product.name}</h3>
                <div className="flex justify-between">
                  <span className="text-[#d4a762] font-bold">{product.price}</span>
                  <span className={`text-sm ${product.available ? 'text-green-600' : 'text-red-600'}`}>
                    {product.available ? 'Есть' : 'Нет'}
                  </span>
                </div>
              </div>
              <button
                onClick={() => handleBuyClick(product)}
                disabled={!product.available}
                className={`ml-3 px-4 py-2 rounded-lg shadow-md transition-colors font-medium ${product.available ? 
                  'bg-[#d4a762] hover:bg-[#c29554] text-white' : 
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
        <div className="w-full max-w-md mb-6 p-4 bg-white rounded-lg shadow-md border-2 border-[#f0e6d6]">
          <h3 className="font-bold text-[#2a2a2a] mb-2 font-serif">Выберите район в {selectedCity}:</h3>
          <div className="grid grid-cols-2 gap-2">
            {cityDistricts[selectedCity]?.map((district) => (
              <button
                key={district}
                onClick={() => navigate("/payment")}
                className="p-2 bg-[#f0e6d6] hover:bg-[#d4a762] hover:text-white text-[#2a2a2a] rounded-md text-sm transition-colors font-medium"
              >
                {district}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Футер */}
      <footer className="w-full bg-[#2a2a2a] p-4 mt-8 text-center text-white rounded-lg shadow-md border-t-4 border-[#d4a762] font-serif">
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
