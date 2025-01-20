import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardContent from './components/DashboardContent';
import Footer from './components/Footer';











function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-200 overflow-auto">
        {/* Sidebar */}
        <div className="w-[15.5vw]">
          <Sidebar />
        </div>

        {/* Main Section: Header + Content */}
        <div className="w-[84.5vw] flex flex-col overflow-hidden">
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route
                path="/"
                element={<div className="flex justify-center items-center h-full">Welcome to the Home Page!</div>}
              />
              <Route path="/dashboard" element={<DashboardContent />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
