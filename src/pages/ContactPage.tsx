import React, { useState } from 'react';
import { MapPin, Mail, MessageCircle, Instagram, Send, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ContactPage: React.FC = () => {
  const { lang, t } = useLanguage();
  const isFrench = lang === 'fr';

  const [formState, setFormState] = useState({
    name: '',
    emailOrPhone: '',
    subject: 'General Question',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = isFrench
      ? `Bonjour Proxima,\nMessage depuis le site internet :\n- Nom : ${formState.name}\n- Contact : ${formState.emailOrPhone}\n- Sujet : ${formState.subject}\n- Message : ${formState.message}`
      : `Hello Proxima,\nWebsite message:\n- Name: ${formState.name}\n- Contact: ${formState.emailOrPhone}\n- Subject: ${formState.subject}\n- Message: ${formState.message}`;

    window.open(`https://wa.me/2349044943580?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-proxima-brown text-proxima-brown-light border border-proxima-brown-light/30">
          <MessageCircle className="w-3.5 h-3.5" />
          {t.contact.badge}
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-proxima-brown-deep mt-2">
          {t.contact.title}
        </h1>
        <p className="text-xs sm:text-sm text-proxima-black/75 mt-3 leading-relaxed">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Direct Contact Details & Showroom */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-proxima-brown-light/30 shadow-sm space-y-6">
            
            {/* Showroom & Distribution Center */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-proxima-cream flex items-center justify-center text-proxima-brown flex-shrink-0 mt-1">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-proxima-brown-deep">
                  {t.contact.addressTitle}
                </h3>
                <p className="text-xs text-proxima-black/80 mt-1 leading-relaxed">
                  {t.contact.address}
                </p>
                <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-proxima-brown-light bg-proxima-brown-deep px-2.5 py-1 rounded-full">
                  <Clock className="w-3 h-3" />
                  <span>Mon – Sat: 8:00 AM – 6:00 PM (WAT)</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Concierge */}
            <div className="flex items-start gap-4 pt-4 border-t border-proxima-cream">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0 mt-1">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-proxima-brown-deep">
                  {t.contact.whatsappTitle}
                </h3>
                <p className="text-xs text-proxima-black/70 mt-0.5">
                  {t.contact.whatsappDesc}
                </p>
                <a
                  href="https://wa.me/2349044943580"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 px-3 py-1.5 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>+234 904 494 3580</span>
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 pt-4 border-t border-proxima-cream">
              <div className="w-12 h-12 rounded-2xl bg-proxima-cream flex items-center justify-center text-proxima-brown flex-shrink-0 mt-1">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-proxima-brown-deep">
                  {t.contact.emailTitle}
                </h3>
                <a
                  href="mailto:proximasarlltd@gmail.com"
                  className="text-xs text-proxima-brown hover:underline block mt-0.5"
                >
                  {t.contact.email}
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-start gap-4 pt-4 border-t border-proxima-cream">
              <div className="w-12 h-12 rounded-2xl bg-proxima-cream flex items-center justify-center text-proxima-brown flex-shrink-0 mt-1">
                <Instagram className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <div>
                  <h3 className="font-serif text-base font-bold text-proxima-brown-deep">
                    {t.contact.socialTitle}
                  </h3>
                  <p className="text-xs text-proxima-black/70 mt-0.5">
                    {t.contact.social}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  <a
                    href="https://instagram.com/proximasarl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFC8] text-xs font-semibold text-[#251409] hover:border-[#C9A87C] hover:bg-white transition-all shadow-2xs"
                  >
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://tiktok.com/@proximasarl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFC8] text-xs font-semibold text-[#251409] hover:border-[#C9A87C] hover:bg-white transition-all shadow-2xs"
                  >
                    <span>TikTok</span>
                  </a>
                  <a
                    href="https://facebook.com/proximasarl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFC8] text-xs font-semibold text-[#251409] hover:border-[#C9A87C] hover:bg-white transition-all shadow-2xs"
                  >
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://x.com/proximasarl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFC8] text-xs font-semibold text-[#251409] hover:border-[#C9A87C] hover:bg-white transition-all shadow-2xs"
                  >
                    <span>X (Twitter)</span>
                  </a>
                  <a
                    href="https://wa.me/2349044943580"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 hover:bg-emerald-100 transition-all shadow-2xs"
                  >
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Direct Contact Fallback Form */}
        <div className="lg:col-span-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-proxima-brown-light/30 shadow-sm space-y-4">
            <h3 className="font-serif text-xl font-bold text-proxima-brown-deep">
              {t.contact.formTitle}
            </h3>
            <p className="text-xs text-proxima-black/70">
              {isFrench
                ? 'Remplissez ce formulaire pour initier une discussion directe avec notre équipe.'
                : 'Complete this form to start a priority message with our Lagos team.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs pt-2">
              <div>
                <label className="font-semibold text-proxima-brown-deep block mb-1">
                  {t.contact.formName} *
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={e => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full p-3 rounded-xl border border-proxima-brown-light/30 bg-proxima-cream/20 focus:outline-none focus:border-proxima-brown"
                />
              </div>

              <div>
                <label className="font-semibold text-proxima-brown-deep block mb-1">
                  {t.contact.formEmail} *
                </label>
                <input
                  type="text"
                  required
                  value={formState.emailOrPhone}
                  onChange={e => setFormState({ ...formState, emailOrPhone: e.target.value })}
                  placeholder="+234... or email@domain.com"
                  className="w-full p-3 rounded-xl border border-proxima-brown-light/30 bg-proxima-cream/20 focus:outline-none focus:border-proxima-brown"
                />
              </div>

              <div>
                <label className="font-semibold text-proxima-brown-deep block mb-1">
                  {t.contact.formSubject}
                </label>
                <select
                  value={formState.subject}
                  onChange={e => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full p-3 rounded-xl border border-proxima-brown-light/30 bg-proxima-cream/20 focus:outline-none focus:border-proxima-brown"
                >
                  <option value="Skincare Consultation">{isFrench ? 'Conseil & Choix de Routine' : 'Skincare Consultation'}</option>
                  <option value="Wholesale Inquiry">{isFrench ? 'Commande Grossiste / Cartons' : 'Wholesale / Case Inquiries'}</option>
                  <option value="Order Tracking">{isFrench ? 'Suivi de commande' : 'Order Tracking'}</option>
                  <option value="Other">{isFrench ? 'Autre question' : 'Other'}</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-proxima-brown-deep block mb-1">
                  {t.contact.formMessage} *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={e => setFormState({ ...formState, message: e.target.value })}
                  placeholder={isFrench ? 'Décrivez votre demande...' : 'Tell us how we can help...'}
                  className="w-full p-3 rounded-xl border border-proxima-brown-light/30 bg-proxima-cream/20 focus:outline-none focus:border-proxima-brown"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-proxima-brown hover:bg-proxima-red text-white py-3.5 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>{t.contact.sendBtn}</span>
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};
