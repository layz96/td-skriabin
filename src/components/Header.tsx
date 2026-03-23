"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/data/products";
import RequestModal from "./RequestModal";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-white text-xs">
        <div className="section-padding flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-accent transition-colors">
              О компании
            </Link>
            <Link
              href="/delivery"
              className="hover:text-accent transition-colors"
            >
              Оплата и доставка
            </Link>
            <Link
              href="/contacts"
              className="hover:text-accent transition-colors"
            >
              Контакты
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>Пн-Пт: 9:00–20:00</span>
            <span className="text-neutral-500">|</span>
            <span>Сб-Вс: 10:00–19:00</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="section-padding flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight text-primary">
              ТД СКРЯБИН
            </span>
            <span className="text-[10px] tracking-[0.3em] text-neutral-500 uppercase">
              Премиальные фасадные материалы
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setCatalogOpen(true)}
              onMouseLeave={() => setCatalogOpen(false)}
            >
              <Link
                href="/catalog"
                className="flex items-center gap-1 text-sm font-medium text-primary hover:text-accent transition-colors py-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                Каталог
              </Link>
              {catalogOpen && (
                <div className="absolute top-full left-0 bg-white shadow-xl border border-neutral-100 py-2 min-w-[280px] z-50">
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/catalog/${cat.slug}`}
                      className="flex items-center justify-between px-4 py-3 hover:bg-light transition-colors"
                    >
                      <span className="text-sm">{cat.name}</span>
                      <span className="text-xs text-neutral-400">
                        {cat.productCount}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/brands"
              className="text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              Бренды
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              О компании
            </Link>
            <Link
              href="/contacts"
              className="text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              Контакты
            </Link>
          </nav>

          {/* Phone + CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+79165440624"
              className="text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              8 (916) 544-06-24
            </a>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-accent text-xs px-6 py-2.5"
            >
              Получить консультацию
            </button>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-neutral-200 bg-white">
            <nav className="section-padding py-4 flex flex-col gap-1">
              <Link
                href="/catalog"
                className="py-3 px-2 text-sm font-medium hover:bg-light transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Каталог
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/catalog/${cat.slug}`}
                  className="py-2 px-6 text-sm text-neutral-600 hover:bg-light transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
              <Link
                href="/brands"
                className="py-3 px-2 text-sm font-medium hover:bg-light transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Бренды
              </Link>
              <Link
                href="/about"
                className="py-3 px-2 text-sm font-medium hover:bg-light transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                О компании
              </Link>
              <Link
                href="/delivery"
                className="py-3 px-2 text-sm font-medium hover:bg-light transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Оплата и доставка
              </Link>
              <Link
                href="/contacts"
                className="py-3 px-2 text-sm font-medium hover:bg-light transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Контакты
              </Link>
              <div className="pt-4 border-t border-neutral-200 mt-2">
                <a
                  href="tel:+79165440624"
                  className="block py-2 px-2 text-sm font-semibold"
                >
                  8 (916) 544-06-24
                </a>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setModalOpen(true);
                  }}
                  className="btn-accent w-full mt-2 text-xs"
                >
                  Получить консультацию
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <RequestModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Получить консультацию"
        subtitle="Оставьте заявку и наш менеджер свяжется с вами в течение 15 минут"
      />
    </>
  );
}
