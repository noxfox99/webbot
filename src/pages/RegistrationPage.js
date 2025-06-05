import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
    telegram: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.login.trim()) {
      newErrors.login = 'Введите логин';
    } else if (formData.login.length < 4) {
      newErrors.login = 'Логин должен быть не менее 4 символов';
    }

    if (!formData.password) {
      newErrors.password = 'Введите пароль';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Пароль должен быть не менее 6 символов';
    }

    if (!formData.telegram) {
      newErrors.telegram = 'Введите Telegram';
    } else if (!formData.telegram.startsWith('@')) {
      newErrors.telegram = 'Telegram должен начинаться с @';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Здесь должна быть ваша реальная логика регистрации
      // Например, запрос к API:
      // const response = await api.register(formData);
      
      // Имитация задержки запроса
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // После успешной регистрации перенаправляем в личный кабинет
      navigate('/personal-cabinet', {
        state: {
          login: formData.login,
          password: formData.password,
          telegram: formData.telegram
        }
      });
    } catch (error) {
      console.error('Ошибка регистрации:', error);
      setErrors({ submit: 'Ошибка регистрации. Попробуйте позже.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1a3a] to-[#1a3a6e] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-[#222] mb-6">Регистрация</h1>
        
        {errors.submit && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            {errors.submit}
          </div>
        )}

<form onSubmit={handleSubmit} noValidate>
  <div className="mb-4">
    <label className="block text-black text-sm font-medium mb-2">Логин*</label>
    <input
      type="text"
      name="login"
      value={formData.login}
      onChange={handleChange}
      className={`w-full px-3 py-2 border ${errors.login ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a762] text-black`}
      required
    />
    {errors.login && <p className="mt-1 text-red-500 text-sm">{errors.login}</p>}
  </div>

  <div className="mb-4">
    <label className="block text-black text-sm font-medium mb-2">Пароль*</label>
    <input
      type="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a762] text-black`}
      required
    />
    {errors.password && <p className="mt-1 text-red-500 text-sm">{errors.password}</p>}
  </div>

  <div className="mb-6">
    <label className="block text-black text-sm font-medium mb-2">Telegram*</label>
    <input
      type="text"
      name="telegram"
      value={formData.telegram}
      onChange={handleChange}
      className={`w-full px-3 py-2 border ${errors.telegram ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a762] text-black`}
      placeholder="@username"
      required
    />
    {errors.telegram && <p className="mt-1 text-red-500 text-sm">{errors.telegram}</p>}
  </div>

  <div className="mb-6">
    <label className="block text-black text-sm font-medium mb-2">Telegram*</label>
    <input
      type="text"
      name="telegram"
      value={formData.telegram}
      onChange={handleChange}
      className={`w-full px-3 py-2 border ${errors.telegram ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a762]`}
      placeholder="@username"
      required
    />
    {errors.telegram && <p className="mt-1 text-red-500 text-sm">{errors.telegram}</p>}
  </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[#d4a762] hover:bg-[#c29554] text-white py-2 px-4 rounded-lg shadow-md transition-colors font-medium ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Регистрация...' : 'Зарегистрироваться'}
          </button>
        </form>

        <div className="mt-4 text-center text-sm">
          <p className="text-gray-600 mb-2">
            Нажимая "Зарегистрироваться", вы соглашаетесь с нашими правилами
          </p>
          <button 
            onClick={() => navigate('/login')}
            className="text-[#d4a762] hover:underline font-medium"
          >
            Уже есть аккаунт? Войти
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
