'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <div className="w-full pt-8 pb-8 px-4 lg:pt-[50px] lg:pb-[50px] lg:pl-32 lg:pr-[89px]">
      {/* Top section: Logo left, Social Icons right */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mb-6 lg:mb-8">
        {/* Logo */}
        <div className="w-[67.81px] h-[54.58px] relative overflow-hidden">
          <Image
            src="/assets/Monologo 1.svg"
            alt="BeFret Logo"
            width={68}
            height={55}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 sm:gap-6 items-center">
          <div className="w-8 h-8 sm:w-[42px] sm:h-[42px] relative">
            <Image
              src="/assets/facebook.svg"
              alt="Facebook"
              width={43}
              height={42}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-8 h-8 sm:w-[42px] sm:h-[42px] relative">
            <Image
              src="/assets/instagram.svg"
              alt="Instagram"
              width={43}
              height={42}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-8 h-8 sm:w-[42px] sm:h-[42px] relative">
            <Image
              src="/assets/tiktok.svg"
              alt="TikTok"
              width={43}
              height={42}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-8 h-8 sm:w-[42px] sm:h-[42px] relative">
            <Image
              src="/assets/whatsapp.svg"
              alt="WhatsApp"
              width={43}
              height={42}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Separator line */}
      <div className="w-full h-px bg-black mb-8"></div>

      {/* Footer Links */}
      <div className="flex flex-wrap gap-4 lg:gap-8 justify-center text-black text-sm lg:text-[20px] font-medium font-sans leading-[21.50px]">
        <span>{t('copyright')}</span>
        <span>{t('privacy')}</span>
        <span>{t('terms')}</span>
        <span>{t('cookies')}</span>
      </div>
    </div>
  );
}