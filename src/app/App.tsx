import { Navbar } from './components/Navbar';
// import { HeroSection } from './components/HeroSection';
// import { PersonalizedSection } from './components/PersonalizedSection';
import { MapSection } from './components/MapSection';
// import { TrendingSection } from './components/TrendingSection';
import { Footer } from './components/Footer';
import KakaoMapSearch from './components/KakaoMapSearch';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        {/* <HeroSection />
        <PersonalizedSection /> */}
        {/* <MapSection /> */}
        <KakaoMapSearch />
        {/* <TrendingSection /> */}
      </main>
      <Footer />
    </div>
  );
}