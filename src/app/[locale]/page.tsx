import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import InfoSection from '@/components/InfoSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Countdown />
      <InfoSection />
      <Footer />
    </div>
  );
}
