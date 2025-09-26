'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import ContactModal from './ContactModal';

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('header');

  const languages = [
    { code: 'fr', label: 'FR', active: locale === 'fr' },
    { code: 'en', label: 'EN', active: locale === 'en' },
    { code: 'nl', label: 'NL', active: locale === 'nl' }
  ];

  const handleLanguageChange = (newLocale: string) => {
    // Remove the current locale from pathname and add the new one
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <>
      <div className={`w-full h-20 lg:h-40 px-4 sm:px-8 lg:px-[50px] py-4 lg:py-[50px] inline-flex justify-between items-center ${className}`}>
        {/* Befret Logo */}
        <div className="w-32 h-12 lg:w-44 lg:h-16 relative">
          <Image
            src="/assets/Logo 1.svg"
            alt="Befret Logo"
            width={179}
            height={70}
            className="object-contain w-full h-full"
          />
        </div>

        {/* Right side - Contact and Language Selector */}
        <div className="p-1 lg:p-2.5 flex justify-start items-center gap-1 lg:gap-1.5">
          {/* Contact Button */}
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="w-20 h-8 lg:w-28 lg:h-9 p-1 lg:p-2 flex justify-center items-center gap-1 lg:gap-1.5 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="w-4 h-4 lg:w-5 lg:h-5 relative">
              <Image
                src="/assets/ic_business_center_48px.svg"
                alt="Contact"
                width={23}
                height={22}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="text-befret-green text-sm lg:text-[17.30px] font-medium font-sans">
              {t('contact')}
            </div>
          </button>

          {/* Language Selector */}
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-8 h-7 lg:w-10 lg:h-9 p-1 lg:p-2 rounded-lg flex justify-center items-center gap-1 lg:gap-1.5 transition-all duration-200 ${
                lang.active
                  ? 'bg-befret-green text-white'
                  : 'outline outline-1 outline-offset-[-1.07px] outline-befret-green text-befret-green hover:bg-befret-green hover:text-white'
              }`}
            >
              <div className="text-sm lg:text-[17.30px] font-medium font-sans">
                {lang.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}