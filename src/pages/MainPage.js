import React, { useState } from "react";
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
    image: "https://via.placeholder.com/300x200?text=Корица",
    description: "Настоящая цейлонская корица высшего качества" 
  },
  { 
    id: 2, 
    name: "Куркума индийская", 
    price: "320₽", 
    available: true, 
    image: "https://via.placeholder.com/300x200?text=Куркума",
    description: "Яркая ароматная куркума из Индии" 
  },
  { 
    id: 3, 
    name: "Кардамон зеленый", 
    price: "680₽", 
    available: true, 
    image: "https://via.placeholder.com/300x200?text=Кардамон",
    description: "Свежий зеленый кардамон с насыщенным ароматом" 
  },
  { 
    id: 4, 
    name: "Имбирь молотый", 
    price: "290₽", 
    available: true, 
    image: "https://via.placeholder.com/300x200?text=Имбирь",
    description: "Острый ароматный молотый имбирь" 
  },
  { 
    id: 5, 
    name: "Гвоздика целая", 
    price: "380₽", 
    available: true, 
    image: "https://via.placeholder.com/300x200?text=Гвоздика",
    description: "Ароматные цветочные бутоны гвоздики" 
  }
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
    <div className="min-h-screen flex flex-col items-center p-4 bg-[#f8f5f2] font-sans">
      {/* Хедер */}
      <header className="w-full bg-[#222] p-4 mb-4 rounded-lg shadow border-b-2 border-[#d4a762]">
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
            <div className="w-16 h-16 bg-[#d4a762] rounded-full shadow mb-2 flex items-center justify-center border-2 border-white">
              <span className="text-2xl font-bold text-white">S</span>
            </div>
            <h1 className="text-xl font-bold text-white font-serif">Spice Market</h1>
          </div>
        </div>
      </header>

      {/* Кнопки входа */}
      <div className="w-full max-w-md mb-4 flex flex-col gap-2 sm:flex-row sm:justify-between">
        <button className="bg-[#d4a762] hover:bg-[#c29554] text-white px-4 py-2 rounded shadow transition-colors">
          Войти
        </button>
        <button className="bg-[#d4a762] hover:bg-[#c29554] text-white px-4 py-2 rounded shadow transition-colors">
          Регистрация
        </button>
        <button className="bg-[#222] hover:bg-[#333] text-white px-4 py-2 rounded shadow transition-colors">
          Меню
        </button>
      </div>
  
{/* Анимированный текстовый блок */}
      <div 
        ref={containerRef}
        className="mb-6 flex items-center justify-center bg-white rounded-lg shadow-md transition-all duration-500 ease-in-out overflow-hidden border border-[#ddd]"
        style={{ padding: '20px', minWidth: '100px' }}
      >
        <p 
          ref={textRef}
          className={`text-center text-[#222] transition-all duration-500 ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} font-serif`}
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
      <div className="w-full mb-4 p-4 bg-white rounded shadow border border-[#ddd]">
        <h2 className="text-lg font-bold mb-2 text-center text-[#222] font-serif">Выбери город</h2>
        <div className="flex flex-wrap justify-center gap-1">
          {allCities.map((city, index) => (
            <React.Fragment key={city}>
              <span 
                onClick={() => handleCityClick(city)}
                className={`cursor-pointer px-2 py-1 ${selectedCity === city ? 'text-[#d4a762] font-bold' : 'text-[#222] hover:text-[#d4a762]'}`}
              >
                {city}
              </span>
              {index < allCities.length - 1 && <span className="text-[#999]">•</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Блоки товаров (5 вертикальных карточек) */}
      {selectedCity && (
        <div className="w-full max-w-md space-y-4 mb-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded shadow border border-[#ddd] overflow-hidden">
              {/* Фото товара */}
              <div className="h-40 bg-gray-100 flex items-center justify-center">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover"/>
              </div>
              
              {/* Информация о товаре */}
              <div className="p-4">
                <h3 className="text-xl font-bold text-[#222] mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-[#d4a762]">{product.price}</span>
                  <button
                    onClick={() => handleBuyClick(product)}
                    className="bg-[#d4a762] hover:bg-[#c29554] text-white px-4 py-2 rounded shadow transition-colors"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Блок районов */}
      {selectedProduct && (
        <div className="w-full max-w-md p-4 bg-white rounded shadow border border-[#ddd]">
          <h3 className="font-bold text-[#222] mb-3">Доставка в {selectedCity}</h3>
          <div className="grid grid-cols-2 gap-2">
            {cityDistricts[selectedCity]?.map((district) => (
              <button
                key={district}
                onClick={() => navigate("/payment")}
                className="bg-[#f8f5f2] hover:bg-[#d4a762] hover:text-white text-[#222] p-2 rounded shadow transition-colors text-sm"
              >
                {district}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Футер */}
      <footer className="w-full bg-[#222] p-4 mt-4 text-center text-white rounded shadow border-t-2 border-[#d4a762]">
        © 2025 Spice Market
      </footer>
    </div>
  );
}

function NavButton({ icon, text }) {
  return (
    <button className="flex items-center space-x-1 text-white hover:text-[#d4a762] transition-colors">
      <span>{icon}</span>
      <span className="text-sm">{text}</span>
    </button>
  );
}

export default MainPage;
