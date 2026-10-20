import HeroSection from '../components/home/HeroSection';
import SignatureSection from '../components/home/SignatureSection';
import StorySection from '../components/home/StorySection';
import VisitSection from '../components/home/VisitSection';
import InstagramSection from '../components/home/InstagramSection';

function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />

      <SignatureSection />

      <StorySection />

      <VisitSection />

      <InstagramSection />
    </div>
  );
}

export default HomePage;