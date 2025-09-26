import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import InfoSection from '@/components/InfoSection';
import Footer from '@/components/Footer';
import { routing } from '../../i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

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
