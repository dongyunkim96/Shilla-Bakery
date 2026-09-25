import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import IntroVideo from '../components/IntroVideo';
import Navbar from '../components/Navbar';

function MainLayout() {
  return (
    <div className="min-h-screen bg-amber-50 text-stone-800">
      <IntroVideo />

      <Navbar />

      <main className="w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;