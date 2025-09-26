'use client';

import { useTranslations } from 'next-intl';

export default function InfoSection() {
  const t = useTranslations('infoSection');

  return (
    <div className="w-full min-h-[400px] lg:h-[856px] relative bg-[#22A922] overflow-hidden px-4 lg:px-0">

      {/* Text content - responsive */}
      <div className="w-full max-w-4xl mx-auto pt-8 lg:pt-20 pb-4 lg:pb-0 lg:absolute lg:left-[136px] lg:top-[76px] lg:w-[850px] text-white font-medium font-sans text-center lg:text-left"
           style={{
             fontSize: 'clamp(2rem, 8vw, 80.11px)',
             lineHeight: 'clamp(2.2rem, 8.5vw, 83.65px)'
           }}>
        {t('line1')}<br />{t('line2')}<br />{t('line3')}<br />{t('line4')}
      </div>

      {/* Decorative geometric forms using provided SVG - responsive */}
      <div className="absolute right-[20px] bottom-[-50px] opacity-70 hidden lg:block">
        <svg width="1300" height="650" viewBox="0 0 1345 611" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_2_36)">
            <path d="M616.982 216.149H696.98L508.995 94.6465L326.284 216.149H404.04L508.995 146.363L616.982 216.149Z" stroke="white" strokeWidth="1.67584" strokeMiterlimit="10"/>
            <path d="M202.996 516.457L68.0185 306.455C66.8765 304.69 68.143 302.343 70.2608 304.378H202.996V516.457ZM1090.6 168.317H788.73C782.501 168.317 776.397 166.531 771.165 163.145L527.516 6.43849C516.325 -0.768559 501.936 -0.768559 490.745 6.43849L218.319 181.651C208.768 187.799 202.996 198.37 202.996 209.731V257.668H22.154C5.48158 257.668 -4.58837 276.111 4.42261 290.151L203.017 599.12C207.356 605.87 214.831 609.961 222.866 609.961H233.933C241.511 609.961 247.657 603.814 247.657 596.233V223.024C247.657 218.6 249.899 214.467 253.636 212.057L497.867 54.9563C504.718 50.5531 513.501 50.5531 520.353 54.9563L758.624 208.215C763.462 211.331 769.089 212.971 774.84 212.971H1148.15L1090.56 168.296L1090.6 168.317Z" stroke="white" strokeWidth="1.67584" strokeMiterlimit="10"/>
            <path d="M1531.78 168.753C1531.6 168.753 1531.41 168.753 1531.22 168.753L1394.73 168.774L1283.77 75.3313H1255.08L1300.22 167.901L1230.48 167.756L1147.43 130.225L1101.15 130.08L1150.52 168.441L1208.16 213.221L1208.57 213.532L1530.33 213.387C1530.81 213.387 1531.26 213.387 1531.74 213.387C1556.7 213.387 1576.92 203.376 1576.92 191.059C1576.92 178.722 1556.7 168.711 1531.74 168.711" stroke="white" strokeWidth="1.67584" strokeMiterlimit="10"/>
          </g>
          <defs>
            <clipPath id="clip0_2_36">
              <rect width="1578" height="611" fill="white" transform="matrix(-1 0 0 1 1578 0)"/>
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Mobile decorative element - simplified and more visible */}
      <div className="lg:hidden absolute right-2 bottom-2 opacity-90">
        <svg width="300" height="150" viewBox="0 0 1345 611" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_2_36_mobile)">
            <path d="M616.982 216.149H696.98L508.995 94.6465L326.284 216.149H404.04L508.995 146.363L616.982 216.149Z" stroke="white" strokeWidth="3" strokeMiterlimit="10"/>
            <path d="M202.996 516.457L68.0185 306.455C66.8765 304.69 68.143 302.343 70.2608 304.378H202.996V516.457ZM1090.6 168.317H788.73C782.501 168.317 776.397 166.531 771.165 163.145L527.516 6.43849C516.325 -0.768559 501.936 -0.768559 490.745 6.43849L218.319 181.651C208.768 187.799 202.996 198.37 202.996 209.731V257.668H22.154C5.48158 257.668 -4.58837 276.111 4.42261 290.151L203.017 599.12C207.356 605.87 214.831 609.961 222.866 609.961H233.933C241.511 609.961 247.657 603.814 247.657 596.233V223.024C247.657 218.6 249.899 214.467 253.636 212.057L497.867 54.9563C504.718 50.5531 513.501 50.5531 520.353 54.9563L758.624 208.215C763.462 211.331 769.089 212.971 774.84 212.971H1148.15L1090.56 168.296L1090.6 168.317Z" stroke="white" strokeWidth="3" strokeMiterlimit="10"/>
            <path d="M1531.78 168.753C1531.6 168.753 1531.41 168.753 1531.22 168.753L1394.73 168.774L1283.77 75.3313H1255.08L1300.22 167.901L1230.48 167.756L1147.43 130.225L1101.15 130.08L1150.52 168.441L1208.16 213.221L1208.57 213.532L1530.33 213.387C1530.81 213.387 1531.26 213.387 1531.74 213.387C1556.7 213.387 1576.92 203.376 1576.92 191.059C1576.92 178.722 1556.7 168.711 1531.74 168.711" stroke="white" strokeWidth="3" strokeMiterlimit="10"/>
          </g>
          <defs>
            <clipPath id="clip0_2_36_mobile">
              <rect width="1578" height="611" fill="white" transform="matrix(-1 0 0 1 1578 0)"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}