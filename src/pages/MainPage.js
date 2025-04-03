import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PaymentPage from "./pages/PaymentPage";

function App() {
return (
<Router>
<Routes>
<Route path="/" element={<MainPage />} />
<Route path="/payment" element={<PaymentPage />} />
</Routes>
</Router>
);
}

export default App;
Morty
Just now
import React from "react";
import { useNavigate } from "react-router-dom";

const cities = ["Москва", "Санкт-Петербург", "Казань"];
const goods = [
{ name: "Товар 1", price: "100₽" },
{ name: "Товар 2", price: "200₽" },
{ name: "Товар 3", price: "300₽" },
];

function MainPage() {
const navigate = useNavigate();

return (
<div className="min-h-screen flex flex-col items-center p-5">
<div className="w-full max-w-md mb-6 flex flex-col gap-2 sm:flex-row sm:justify-between">
<button className="bg-redButton text-white w-full sm:w-auto px-4 py-2 rounded shadow-lg">
Войти
</button>
<button className="bg-redButton text-white w-full sm:w-auto px-4 py-2 rounded shadow-lg">
Регистрация
</button>
<button className="bg-gray-700 text-white w-full sm:w-auto px-4 py-2 rounded shadow-lg">
Меню
</button>
</div>
  <div className="w-full max-w-md mb-6">
    <label className="block mb-2">Выберите город:</label>
    <select
      className="w-full p-2 rounded bg-gray-800 text-white shadow-lg"
      value={cities[0]}
    >
      {cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  </div>

  <div className="w-full max-w-md space-y-3 overflow-y-auto">
    {goods.map((item, index) => (
      <div
        key={index}
        className="flex justify-between items-center p-4 bg-gray-800 rounded shadow-lg"
      >
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
</div>

);
}

export default MainPage;
