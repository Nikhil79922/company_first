// src/App.jsx
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardContent from './components/DashboardContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex h-screen bg-gray-100 overflow-auto ">
      {/* Sidebar */}
      <div className='w-[16vw]'>
      <Sidebar />
      </div>

      {/* Main Section: Header + DashboardContent */}
      <div className=" w-[84vw] flex flex-col overflow-hidden">
        <Header />
        <DashboardContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
