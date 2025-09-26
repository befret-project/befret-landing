'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { sendContactEmail } from '@/lib/emailjs';
import { phonePrefixes } from '@/lib/phonePrefixes';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const t = useTranslations('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    phonePrefix: '+32',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      phonePrefix: '+32',
      company: '',
      subject: '',
      message: ''
    });
    setSubmitStatus('idle');
    setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const success = await sendContactEmail(formData);

      if (success) {
        setSubmitStatus('success');
        setTimeout(() => {
          resetForm();
          onClose();
        }, 2000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(t('errorSending'));
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setErrorMessage(t('errorSending'));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="relative bg-befret-green p-6 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
          >
            <span className="text-white text-xl font-bold">×</span>
          </button>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 relative">
              <Image
                src="/assets/Monologo 1.svg"
                alt="BeFret Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain filter brightness-0 invert"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white font-sans">
                {t('title')}
              </h2>
              <p className="text-white text-opacity-90 font-sans">
                {t('subtitle')}
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">

          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                {t('firstName')} *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-befret-green focus:border-transparent transition-colors font-sans"
                placeholder={t('firstNamePlaceholder')}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                {t('lastName')} *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-befret-green focus:border-transparent transition-colors font-sans"
                placeholder={t('lastNamePlaceholder')}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
              {t('email')} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-befret-green focus:border-transparent transition-colors font-sans"
              placeholder={t('emailPlaceholder')}
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
              {t('phone')} *
            </label>
            <div className="flex gap-2">
              <select
                name="phonePrefix"
                value={formData.phonePrefix}
                onChange={handleInputChange}
                className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-befret-green focus:border-transparent transition-colors font-sans bg-white min-w-[140px]"
              >
                {phonePrefixes.map((prefix) => (
                  <option key={prefix.value} value={prefix.value}>
                    {prefix.short}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-befret-green focus:border-transparent transition-colors font-sans"
                placeholder="123456789"
              />
            </div>
          </div>

          {/* Company and Subject */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                {t('company')}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-befret-green focus:border-transparent transition-colors font-sans"
                placeholder={t('companyPlaceholder')}
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                {t('subject')} *
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-befret-green focus:border-transparent transition-colors font-sans bg-white"
              >
                <option value="">{t('selectSubject')}</option>
                <option value="shipping">{t('subjectShipping')}</option>
                <option value="pricing">{t('subjectPricing')}</option>
                <option value="partnership">{t('subjectPartnership')}</option>
                <option value="support">{t('subjectSupport')}</option>
                <option value="other">{t('subjectOther')}</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
              {t('message')} *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-befret-green focus:border-transparent transition-colors font-sans resize-none"
              placeholder={t('messagePlaceholder')}
            />
          </div>

          {/* Error/Success Messages */}
          {submitStatus === 'error' && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 font-sans text-sm">{errorMessage}</p>
            </div>
          )}

          {submitStatus === 'success' && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-600 font-sans text-sm">{t('successMessage')}</p>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-sans font-medium disabled:opacity-50"
            >
              {t('cancel')}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-befret-green text-white rounded-lg hover:bg-green-700 transition-colors font-sans font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  {t('sending')}
                </>
              ) : (
                <>
                  <Image
                    src="/assets/ic_business_center_48px.svg"
                    alt="Send"
                    width={20}
                    height={20}
                    className="filter brightness-0 invert"
                  />
                  {t('send')}
                </>
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}