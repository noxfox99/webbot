import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PaymentPage from './pages/PaymentPage';
import DistrictSelection from './pages/DistrictSelection';
import LoginPage from './pages/LoginPage';          // Add this
import RegistrationPage from './pages/RegistrationPage'; // Add this

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/district-selection" element={<DistrictSelection />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/login" element={<LoginPage />} />          // Add this
        <Route path="/register" element={<RegistrationPage />} /> // Add this
      </Routes>
    </Router>
  );
}

export default App;
