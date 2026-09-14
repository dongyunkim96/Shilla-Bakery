import HeroSection from '../components/Home/HeroSection';
import SignatureSection from '../components/Home/SignatureSection';
import StorySection from '../components/Home/StorySection';
import VisitSection from '../components/Home/VisitSection';

function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <SignatureSection />
      <StorySection />
      <VisitSection />
    </div>
  );
}

export default HomePage;