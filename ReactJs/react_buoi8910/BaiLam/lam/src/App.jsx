import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ChefifyApp from './apps/chefify/ChefifyApp';
import EflightApp from './apps/eflight/EflightApp';
import DashboardApp from './apps/dashboard/DashboardApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chefify/*" element={<ChefifyApp />} />
        <Route path="/eflight/*" element={<EflightApp />} />
        <Route path="/dashboard/*" element={<DashboardApp />} />
      </Routes>
    </Router>
  );
}

export default App;
