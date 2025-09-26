'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-screen overflow-hidden bg-white">
      {/* Green background with decorative dots effect */}
      <div className="absolute inset-0 lg:w-1/2 w-full h-full bg-befret-green">
        {/* World map with dots */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url("/assets/White_on_black_dotted_world_map_vector.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            filter: 'brightness(3) contrast(2)',
            mixBlendMode: 'screen'
          }}
        />
        {/* Card depth effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/10" />
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex items-center min-h-[600px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-screen px-6 sm:px-8 lg:px-16">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center">

          {/* World Map Outline and Woman Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start relative">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">

              {/* World map outline with dots */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2322A922' opacity='0.6'%3E%3C!-- Africa --%3E%3Ccircle cx='200' cy='180' r='1.5'/%3E%3Ccircle cx='205' cy='175' r='1.5'/%3E%3Ccircle cx='210' cy='185' r='1.5'/%3E%3Ccircle cx='195' cy='190' r='1.5'/%3E%3Ccircle cx='215' cy='195' r='1.5'/%3E%3Ccircle cx='190' cy='200' r='1.5'/%3E%3Ccircle cx='220' cy='205' r='1.5'/%3E%3C!-- Europe --%3E%3Ccircle cx='180' cy='120' r='1.5'/%3E%3Ccircle cx='185' cy='115' r='1.5'/%3E%3Ccircle cx='190' cy='125' r='1.5'/%3E%3Ccircle cx='175' cy='130' r='1.5'/%3E%3Ccircle cx='195' cy='135' r='1.5'/%3E%3C!-- Asia --%3E%3Ccircle cx='280' cy='140' r='1.5'/%3E%3Ccircle cx='290' cy='135' r='1.5'/%3E%3Ccircle cx='300' cy='145' r='1.5'/%3E%3Ccircle cx='310' cy='155' r='1.5'/%3E%3Ccircle cx='320' cy='165' r='1.5'/%3E%3C!-- Americas --%3E%3Ccircle cx='80' cy='150' r='1.5'/%3E%3Ccircle cx='85' cy='140' r='1.5'/%3E%3Ccircle cx='90' cy='160' r='1.5'/%3E%3Ccircle cx='75' cy='170' r='1.5'/%3E%3Ccircle cx='95' cy='180' r='1.5'/%3E%3Ccircle cx='70' cy='190' r='1.5'/%3E%3Ccircle cx='100' cy='200' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'contain'
                }}
              />

              {/* Woman image - responsive positioning with multiple breakpoints */}

              {/* Large desktop (1280px+) - Original complex positioning */}
              <div
                className="absolute rounded-3xl hidden xl:block"
                style={{
                  top: '-510px',
                  left: '45%',
                  width: '165%',
                  height: '990px'
                }}
              >
                <Image
                  src="/assets/KOOBALT-09 1.png"
                  alt="BeFret Service"
                  width={788}
                  height={876}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              {/* Medium screens (1024-1279px) - Reduced positioning */}
              <div
                className="absolute rounded-3xl hidden lg:block xl:hidden"
                style={{
                  top: '-300px',
                  left: '35%',
                  width: '130%',
                  height: '700px'
                }}
              >
                <Image
                  src="/assets/KOOBALT-09 1.png"
                  alt="BeFret Service"
                  width={788}
                  height={876}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              {/* Small/Medium screens (768-1023px) - Further reduced */}
              <div
                className="absolute rounded-3xl hidden md:block lg:hidden"
                style={{
                  top: '-200px',
                  left: '25%',
                  width: '110%',
                  height: '500px'
                }}
              >
                <Image
                  src="/assets/KOOBALT-09 1.png"
                  alt="BeFret Service"
                  width={788}
                  height={876}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              {/* Mobile (below 768px) - Simple positioning */}
              <div className="md:hidden relative w-full max-w-sm mx-auto mt-2">
                <Image
                  src="/assets/KOOBALT-09 1.png"
                  alt="BeFret Service"
                  width={788}
                  height={876}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Text content - Right on desktop, top on mobile */}
          <div className="order-1 lg:order-2 flex flex-col justify-center space-y-4 lg:space-y-8 lg:pl-16 lg:pr-4 pt-8 lg:pt-0">
            {/* Main title */}
            <h1 className="text-white lg:text-black font-sans font-medium leading-tight text-center lg:text-right max-w-2xl lg:max-w-xl xl:max-w-2xl lg:ml-auto"
                style={{
                  fontSize: 'clamp(1.8rem, 4vw, 5rem)',
                  lineHeight: '0.99'
                }}
                dangerouslySetInnerHTML={{ __html: t('title') }}>
            </h1>

            {/* Subtitle */}
            <p className="text-white lg:text-black font-sans font-normal text-lg sm:text-xl lg:text-2xl leading-relaxed text-center lg:text-right max-w-2xl lg:ml-auto">
              {t('subtitle')}
            </p>

            {/* Coming Soon badge */}
            <div className="flex justify-center lg:justify-end">
              <span className="text-white lg:text-befret-green font-sans font-semibold text-2xl sm:text-3xl lg:text-5xl leading-tight">
                {t('comingSoon')}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}