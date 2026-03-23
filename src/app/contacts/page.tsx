"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import RequestModal from "@/components/RequestModal";
import { useState } from "react";

export default function ContactsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="section-padding">
      <Breadcrumbs items={[{ label: "Контакты" }]} />

      <h1 className="text-3xl font-bold mb-10">Контакты</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Contact info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-4">
              Телефон
            </h2>
            <a
              href="tel:+79165440624"
              className="text-2xl font-bold hover:text-accent transition-colors"
            >
              8 (916) 544-06-24
            </a>
            <p className="text-sm text-neutral-500 mt-1">
              Пн-Пт: 9:00–20:00, Сб-Вс: 10:00–19:00
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-4">
              Email
            </h2>
            <a
              href="mailto:kirill@skriabinceramics.ru"
              className="text-lg font-medium hover:text-accent transition-colors"
            >
              kirill@skriabinceramics.ru
            </a>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-4">
              Мессенджеры
            </h2>
            <div className="flex gap-4">
              <a
                href="https://t.me/"
                className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
              >
                <span className="w-10 h-10 bg-light flex items-center justify-center">
                  TG
                </span>
                Telegram
              </a>
              <a
                href="https://wa.me/"
                className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
              >
                <span className="w-10 h-10 bg-light flex items-center justify-center">
                  WA
                </span>
                WhatsApp
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-200">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-4">
              Шоурум в Москве
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              ул. Большая Черемушкинская, д. 34, офис 216
            </p>
            <p className="text-xs text-neutral-400 mt-1">
              Пн-Пт: 9:00–20:00, Сб-Вс: 10:00–19:00
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-200">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-4">
              Шоурум в Тюмени
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              ул. Московский тракт 132, офис 203
            </p>
            <p className="text-xs text-neutral-400 mt-1">Пн-Пт: 9:00–18:00</p>
          </div>

          <div className="pt-4 border-t border-neutral-200">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-4">
              Реквизиты
            </h2>
            <div className="text-sm text-neutral-600 space-y-1">
              <p>ООО &laquo;Премиальные фасадные материалы&raquo;</p>
              <p>ИНН: 9727077771</p>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="bg-light p-8 lg:p-10 h-fit">
          <h2 className="text-xl font-bold mb-2">Написать нам</h2>
          <p className="text-sm text-neutral-500 mb-6">
            Заполните форму — мы свяжемся с вами в течение 15 минут в рабочее
            время
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setModalOpen(true);
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-xs font-medium text-neutral-500 mb-1.5">
                Ваше имя *
              </label>
              <input
                type="text"
                required
                placeholder="Иван Иванов"
                className="w-full px-4 py-3 border border-neutral-300 bg-white text-sm
                         focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-500 mb-1.5">
                Телефон *
              </label>
              <input
                type="tel"
                required
                placeholder="+7 (999) 999-99-99"
                className="w-full px-4 py-3 border border-neutral-300 bg-white text-sm
                         focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-500 mb-1.5">
                Email
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full px-4 py-3 border border-neutral-300 bg-white text-sm
                         focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-500 mb-1.5">
                Сообщение
              </label>
              <textarea
                rows={4}
                placeholder="Опишите ваш вопрос или проект"
                className="w-full px-4 py-3 border border-neutral-300 bg-white text-sm
                         focus:border-primary focus:outline-none transition-colors resize-none"
              />
            </div>
            <button type="submit" className="btn-accent w-full py-3.5">
              Отправить
            </button>
            <p className="text-[11px] text-neutral-400 text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        </div>
      </div>

      <RequestModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Заявка отправлена"
        subtitle="Мы свяжемся с вами в ближайшее время"
      />
    </div>
  );
}
