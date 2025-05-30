import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [telegram, setTelegram] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Login:', login, 'Password:', password, 'Telegram:', telegram);
    // Redirect after registration (e.g., to home page)
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1a3a] to-[#1a3a6e] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-[#222] mb-6">Регистрация</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-[#222] text-sm font-medium mb-2">Логин</label>
            <input
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a762]"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#222] text-sm font-medium mb-2">Пароль</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a762]"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-[#222] text-sm font-medium mb-2">Telegram</label>
            <input
              type="text"
              value={telegram}
              onChange={(e) => setTelegram(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a762]"
              placeholder="@username"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#d4a762] hover:bg-[#c29554] text-white py-2 px-4 rounded-lg shadow-md transition-colors font-medium"
          >
            Зарегистрироваться
          </button>
        </form>

        <div className="mt-4 text-center">
          <button 
            onClick={() => navigate('/login')}
            className="text-[#d4a762] hover:underline"
          >
            Уже есть аккаунт? Войти
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
