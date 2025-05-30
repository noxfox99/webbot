import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PaymentPage from './pages/PaymentPage';
import DistrictSelection from './pages/DistrictSelection';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import OrderConfirmation from './pages/OrderConfirmation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/district-selection" element={<DistrictSelection />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
