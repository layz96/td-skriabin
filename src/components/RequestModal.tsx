"use client";

import { useState } from "react";

interface RequestModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  productName?: string;
}

export default function RequestModal({
  open,
  onClose,
  title,
  subtitle,
  productName,
}: RequestModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setPhone("");
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center modal-overlay" onClick={onClose}>
      <div
        className="bg-white w-full max-w-md mx-4 p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-primary transition-colors"
          aria-label="Закрыть"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Заявка отправлена!</h3>
            <p className="text-sm text-neutral-500">Мы свяжемся с вами в течение 15 минут</p>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            {subtitle && (
              <p className="text-sm text-neutral-500 mb-6">{subtitle}</p>
            )}
            {productName && (
              <div className="bg-light px-4 py-3 mb-6">
                <p className="text-xs text-neutral-500">Товар</p>
                <p className="text-sm font-medium">{productName}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-1.5">
                  Ваше имя
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Иван Иванов"
                  className="w-full px-4 py-3 border border-neutral-300 text-sm
                           focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-1.5">
                  Телефон
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="+7 (999) 999-99-99"
                  className="w-full px-4 py-3 border border-neutral-300 text-sm
                           focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <button type="submit" className="btn-accent w-full py-3.5">
                Отправить заявку
              </button>
              <p className="text-[11px] text-neutral-400 text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
