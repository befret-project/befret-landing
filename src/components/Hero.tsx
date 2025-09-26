'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative w-full min-h-screen lg:h-screen overflow-hidden bg-white">
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
      <div className="relative z-10 flex items-center min-h-screen lg:h-full py-12 lg:py-0 px-4 lg:px-[6%]">
        <div className="w-full flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center relative">

          {/* Mobile: Green background section - Order 1 */}
          <div className="order-1 lg:order-1 relative bg-befret-green lg:bg-transparent py-8 lg:py-0">
            {/* World map background - visible on both mobile and desktop */}
            <div
              className="absolute inset-0 opacity-30 lg:opacity-40"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2322A922' opacity='0.6'%3E%3C!-- Africa --%3E%3Ccircle cx='200' cy='180' r='1.5'/%3E%3Ccircle cx='205' cy='175' r='1.5'/%3E%3Ccircle cx='210' cy='185' r='1.5'/%3E%3Ccircle cx='195' cy='190' r='1.5'/%3E%3Ccircle cx='215' cy='195' r='1.5'/%3E%3Ccircle cx='190' cy='200' r='1.5'/%3E%3Ccircle cx='220' cy='205' r='1.5'/%3E%3C!-- Europe --%3E%3Ccircle cx='180' cy='120' r='1.5'/%3E%3Ccircle cx='185' cy='115' r='1.5'/%3E%3Ccircle cx='190' cy='125' r='1.5'/%3E%3Ccircle cx='175' cy='130' r='1.5'/%3E%3Ccircle cx='195' cy='135' r='1.5'/%3E%3C!-- Asia --%3E%3Ccircle cx='280' cy='140' r='1.5'/%3E%3Ccircle cx='290' cy='135' r='1.5'/%3E%3Ccircle cx='300' cy='145' r='1.5'/%3E%3Ccircle cx='310' cy='155' r='1.5'/%3E%3Ccircle cx='320' cy='165' r='1.5'/%3E%3C!-- Americas --%3E%3Ccircle cx='80' cy='150' r='1.5'/%3E%3Ccircle cx='85' cy='140' r='1.5'/%3E%3Ccircle cx='90' cy='160' r='1.5'/%3E%3Ccircle cx='75' cy='170' r='1.5'/%3E%3Ccircle cx='95' cy='180' r='1.5'/%3E%3Ccircle cx='70' cy='190' r='1.5'/%3E%3Ccircle cx='100' cy='200' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain'
              }}
            />

            {/* Mobile: Visual placeholder for green section */}
            <div className="relative z-10 h-32 lg:h-0 flex items-center justify-center text-white lg:text-transparent text-sm opacity-50">
              {/* Just visual spacing for mobile */}
            </div>
          </div>

          {/* Text content - Order 2 on mobile, maintains desktop position */}
          <div className="order-2 lg:order-2 flex flex-col justify-center
                          space-y-6 lg:space-y-[6vh]
                          px-6 lg:px-0 lg:pl-[8%]
                          py-8 lg:py-0">
            {/* Main title */}
            <h1 className="text-white lg:text-black font-sans font-medium leading-tight text-center lg:text-right max-w-2xl lg:max-w-xl xl:max-w-2xl lg:ml-auto"
                style={{
                  fontSize: 'clamp(2.5rem, 6vh + 1.5vw, 5.5rem)',
                  lineHeight: '0.95'
                }}
                dangerouslySetInnerHTML={{ __html: t('title') }}>
            </h1>

            {/* Subtitle */}
            <p className="text-white lg:text-black font-sans font-normal leading-relaxed text-center lg:text-right max-w-2xl lg:ml-auto"
               style={{
                 fontSize: 'clamp(1.125rem, 2vh + 0.5vw, 1.75rem)'
               }}>
              {t('subtitle')}
            </p>

            {/* Coming Soon badge */}
            <div className="flex justify-center lg:justify-end">
              <span className="text-white lg:text-befret-green font-sans font-semibold leading-tight"
                    style={{
                      fontSize: 'clamp(1.5rem, 3vh + 1vw, 3.5rem)'
                    }}>
                {t('comingSoon')}
              </span>
            </div>
          </div>

          {/* Woman image - Mobile: Order 3, clean presentation */}
          <div className="order-3 lg:hidden flex justify-center py-8">
            <div className="w-80 h-80 relative">
              <Image
                src="/assets/KOOBALT-09 1.png"
                alt="BeFret Service"
                width={788}
                height={876}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>

        </div>

        {/* Desktop version - superposed between columns */}
        <div className="hidden lg:block absolute bottom-0 left-0 w-[87.5%] h-full z-30">
          <Image
            src="/assets/KOOBALT-09 1.png"
            alt="BeFret Service"
            width={788}
            height={876}
            className="w-full h-full object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </section>
  );
}