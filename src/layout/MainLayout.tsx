import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import IntroVideo from '../components/IntroVideo';
import Navbar from '../components/Navbar';

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 text-stone-800">
      <IntroVideo />

      <Navbar />

      <main className="w-full flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;