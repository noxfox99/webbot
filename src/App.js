import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';  // Add 'pages/' to the path
import PaymentPage from './pages/PaymentPage';  // Add 'pages/' to the path
import DistrictSelection from './pages/DistrictSelection';  // Add 'pages/' to the path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/district-selection" element={<DistrictSelection />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}
