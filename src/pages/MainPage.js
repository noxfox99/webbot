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

const cityDistricts = {
"Москва": ["Центральный", "Северный", "Северо-Восточный", "Восточный", "Юго-Восточный", "Южный", "Юго-Западный", "Западный", "Северо-Западный", "Зеленоградский"],
  "Санкт-Петербург": ["Адмиралтейский", "Василеостровский", "Выборгский", "Калининский", "Кировский", "Колпинский", "Красногвардейский", "Красносельский", "Кронштадтский", "Московский", "Невский", "Петроградский", "Петродворцовый", "Приморский", "Пушкинский", "Фрунзенский"],
  "Новосибирск": ["Дзержинский", "Железнодорожный", "Заельцовский", "Калининский", "Кировский", "Ленинский", "Октябрьский", "Первомайский", "Советский"],
  "Екатеринбург": ["Верх-Исетский", "Железнодорожный", "Кировский", "Ленинский", "Октябрьский", "Орджоникидзевский", "Чкаловский"],
  "Казань": ["Вахитовский", "Кировский", "Московский", "Ново-Савиновский", "Приволжский", "Советский"],
  "Нижний Новгород": ["Автозаводский", "Канавинский", "Ленинский", "Московский", "Нижегородский", "Приокский", "Советский", "Сормовский"],
  "Челябинск": ["Калининский", "Курчатовский", "Ленинский", "Металлургический", "Советский", "Тракторозаводский"],
  "Самара": ["Железнодорожный", "Кировский", "Красноглинский", "Куйбышевский", "Ленинский", "Октябрьский", "Промышленный", "Самарский"],
  "Омск": ["Центральный", "Советский", "Кировский", "Ленинский", "Октябрьский"],
  "Ростов-на-Дону": ["Ворошиловский", "Железнодорожный", "Кировский", "Ленинский", "Октябрьский", "Первомайский", "Пролетарский"],
  "Уфа": ["Демский", "Калининский", "Кировский", "Ленинский", "Октябрьский", "Орджоникидзевский"],
  "Красноярск": ["Железнодорожный", "Кировский", "Ленинский", "Октябрьский", "Свердловский", "Советский"],
  "Пермь": ["Дзержинский", "Индустриальный", "Кировский", "Ленинский", "Мотовилихинский", "Орджоникидзевский"],
  "Воронеж": ["Железнодорожный", "Коминтерновский", "Левобережный", "Ленинский", "Советский"],
  "Волгоград": ["Ворошиловский", "Дзержинский", "Кировский", "Красноармейский", "Краснооктябрьский", "Советский"],
  "Краснодар": ["Западный", "Карасунский", "Прикубанский", "Центральный"],
  "Саратов": ["Волжский", "Заводской", "Кировский", "Ленинский", "Октябрьский"],
  "Тюмень": ["Восточный", "Калининский", "Ленинский", "Центральный"],
  "Тольятти": ["Автозаводский", "Комсомольский", "Центральный"],
  "Ижевск": ["Индустриальный", "Ленинский", "Октябрьский", "Первоуральский"],
  "Барнаул": ["Железнодорожный", "Индустриальный", "Ленинский", "Октябрьский"],
  "Ульяновск": ["Заволжский", "Ленинский", "Засвияжский", "Железнодорожный"],
  "Иркутск": ["Кировский", "Куйбышевский", "Ленинский", "Октябрьский"],
  "Хабаровск": ["Индустриальный", "Кировский", "Краснофлотский"],
  "Ярославль": ["Дзержинский", "Заволжский", "Кировский", "Красноперекопский"],
  "Владивосток": ["Ленинский", "Первореченский", "Фрунзенский", "Советский"],
  "Махачкала": ["Кировский", "Ленинский", "Советский"],
  "Томск": ["Кировский", "Ленинский", "Октябрьский"],
  "Оренбург": ["Дзержинский", "Ленинский", "Промышленный"],
  "Кемерово": ["Заводский", "Кировский", "Ленинский", "Рудничный"]
};

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
  const [selectedQuantity, setSelectedQuantity] = useState("1");


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

const handleBuyClick = (product, quantity) => {
  navigate("/district-selection", {
    state: {
      product: product,
      city: selectedCity
    }
  });
};

  return (
    <div className="min-h-screen flex flex-col items-center p-5 bg-gradient-to-b from-[#0a1a3a] to-[#1a3a6e] font-sans">
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
  <button 
  onClick={() => navigate('/login')}
  className="bg-[#d4a762] hover:bg-[#c29554] text-white w-full sm:w-auto px-4 py-2 rounded-lg shadow-md transition-colors font-medium"
>
  Войти
</button>
<button 
  onClick={() => navigate('/register')}
  className="bg-[#d4a762] hover:bg-[#c29554] text-white w-full sm:w-auto px-4 py-2 rounded-lg shadow-md transition-colors font-medium"
>
  Регистрация
</button>

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

      {/* Блок районов */}
{showDistricts && selectedCity && selectedProduct && (
  <div id="districts-section" className="w-full max-w-md mb-6 p-4 bg-white rounded-lg shadow-md border border-[#ddd]">
    <h3 className="font-bold text-[#222] mb-4 font-serif text-center">
      Выберите район в {selectedCity} для доставки "{selectedProduct.name}"
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
      {cityDistricts[selectedCity]?.map((district) => (
        <button
          key={district}
          onClick={() => navigate("/payment", { 
            state: { 
              product: selectedProduct,
              city: selectedCity,
              district: district
            } 
          })}
          className="p-3 bg-[#f8f5f2] hover:bg-[#d4a762] hover:text-white text-[#222] rounded-lg text-sm transition-colors font-medium text-center"
        >
          {district}
        </button>
      ))}
    </div>
  </div>
)}



      {/* Блоки товаров (5 вертикальных карточек) */}
      {showProducts && selectedCity && (
        <div className="w-full max-w-md space-y-4 mb-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md border border-[#ddd] overflow-hidden">
              {/* Фото товара */}
              <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="h-full w-full object-cover"
                />
              </div>
              
              {/* Информация о товаре */}
              <div className="p-4">
                <h3 className="text-xl font-bold text-[#222] mb-2 font-serif">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                 <select
      id="quantity"
      value={selectedQuantity}
      onChange={(e) => setSelectedQuantity(e.target.value)}
      className={`border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#d4a762] text-black transition-all duration-300 ${
            selectedQuantity === "1"
              ? "text-base"
              : "text-lg font-semibold"
          }`}
    >
      <option value="0.5">0.5г</option>
      <option value="1">1г</option>
      <option value="2">2г</option>
    </select>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-[#d4a762]">{product.price}</span>
                  <button
                    onClick={() => handleBuyClick(product)}
                    className="bg-[#d4a762] hover:bg-[#c29554] text-white px-6 py-2 rounded-lg shadow-md transition-colors font-medium"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>
          ))}
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
