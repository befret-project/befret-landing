'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const t = useTranslations('countdown');

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-10-10T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <section className="w-full py-24 lg:py-36 px-6 flex flex-col justify-center items-center gap-16 lg:gap-21 bg-white">
      {/* Description text */}
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className="text-center text-black font-sans font-normal leading-tight"
          style={{
            fontSize: 'clamp(24px, 4vw, 48px)',
            lineHeight: 'clamp(30px, 5vw, 61px)',
            maxWidth: '105rem'
          }}
          dangerouslySetInnerHTML={{ __html: t('description') }}
        >
        </h2>
      </div>

      {/* Countdown Timer */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 justify-items-center">
        {/* Days */}
        <div className="flex flex-col items-center">
          <div
            className="text-center text-befret-green font-bold"
            style={{
              fontFamily: 'var(--font-bebas-neue)',
              fontSize: 'clamp(80px, 12vw, 238.74px)',
              lineHeight: 'clamp(100px, 15vw, 303.39px)'
            }}
          >
            {formatNumber(timeLeft.days)}:
          </div>
          <div
            className="text-center text-black font-normal mt-2"
            style={{
              fontFamily: 'var(--font-bebas-neue)',
              fontSize: 'clamp(24px, 3vw, 42.02px)',
              lineHeight: 'clamp(30px, 4vw, 53.41px)'
            }}
          >
            {t('days')}
          </div>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center">
          <div
            className="text-center text-befret-green font-bold"
            style={{
              fontFamily: 'var(--font-bebas-neue)',
              fontSize: 'clamp(80px, 12vw, 238.74px)',
              lineHeight: 'clamp(100px, 15vw, 303.39px)'
            }}
          >
            {formatNumber(timeLeft.hours)}:
          </div>
          <div
            className="text-center text-black font-normal mt-2"
            style={{
              fontFamily: 'var(--font-bebas-neue)',
              fontSize: 'clamp(24px, 3vw, 42.02px)',
              lineHeight: 'clamp(30px, 4vw, 53.41px)'
            }}
          >
            {t('hours')}
          </div>
        </div>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div
            className="text-center text-befret-green font-bold"
            style={{
              fontFamily: 'var(--font-bebas-neue)',
              fontSize: 'clamp(80px, 12vw, 238.74px)',
              lineHeight: 'clamp(100px, 15vw, 303.39px)'
            }}
          >
            {formatNumber(timeLeft.minutes)}:
          </div>
          <div
            className="text-center text-black font-normal mt-2"
            style={{
              fontFamily: 'var(--font-bebas-neue)',
              fontSize: 'clamp(24px, 3vw, 42.02px)',
              lineHeight: 'clamp(30px, 4vw, 53.41px)'
            }}
          >
            {t('minutes')}
          </div>
        </div>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div
            className="text-center text-befret-green font-bold"
            style={{
              fontFamily: 'var(--font-bebas-neue)',
              fontSize: 'clamp(80px, 12vw, 238.74px)',
              lineHeight: 'clamp(100px, 15vw, 303.39px)'
            }}
          >
            {formatNumber(timeLeft.seconds)}
          </div>
          <div
            className="text-center text-black font-normal mt-2"
            style={{
              fontFamily: 'var(--font-bebas-neue)',
              fontSize: 'clamp(24px, 3vw, 42.02px)',
              lineHeight: 'clamp(30px, 4vw, 53.41px)'
            }}
          >
            {t('seconds')}
          </div>
        </div>
      </div>
    </section>
  );
}