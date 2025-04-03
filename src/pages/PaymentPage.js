import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PaymentPage() {
const [selectedMethod, setSelectedMethod] = useState("card");
const navigate = useNavigate();

return (
<div className="min-h-screen flex flex-col items-center p-5">
<h2 className="text-2xl font-bold mb-5">Выберите способ оплаты</h2>
  <div className="w-full max-w-md space-y-4">
    <label
      className={`flex items-center p-4 rounded-lg cursor-pointer shadow-lg ${
        selectedMethod === "card" ? "bg-redButton text-white" : "bg-gray-800 text-gray-300"
      }`}
    >
      <input
        type="radio"
        name="payment"
        value="card"
        className="hidden"
        checked={selectedMethod === "card"}
        onChange={() => setSelectedMethod("card")}
      />
      💳 Оплата картой
    </label>

    <label
      className={`flex items-center p-4 rounded-lg cursor-pointer shadow-lg ${
        selectedMethod === "crypto" ? "bg-redButton text-white" : "bg-gray-800 text-gray-300"
      }`}
    >
      <input
        type="radio"
        name="payment"
        value="crypto"
        className="hidden"
        checked={selectedMethod === "crypto"}
        onChange={() => setSelectedMethod("crypto")}
      />
      ₿ Оплата криптовалютой
    </label>
  </div>

  <button
    className="bg-redButton text-white px-5 py-2 rounded-lg mt-6 shadow-lg"
    onClick={() => navigate("/")}
  >
    Подтвердить
  </button>
</div>

);
}

export default PaymentPage;