"use client";

import Link from "next/link";
import Image from "next/image";
import { categories, products, brands } from "@/data/products";
import AnimatedProductCard from "@/components/AnimatedProductCard";
import HeroSection from "@/components/HeroSection";
import RevealSection from "@/components/RevealSection";
import { useState } from "react";
import RequestModal from "@/components/RequestModal";
import { motion } from "framer-motion";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const featuredProducts = products.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <HeroSection onRequestClick={() => setModalOpen(true)} />

      {/* Categories */}
      <section className="py-20 lg:py-28 bg-light">
        <div className="section-padding">
          <RevealSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="inline-flex items-center gap-2 text-[#c8956c] font-medium text-xs tracking-[0.2em] uppercase mb-3">
                  <span className="w-6 h-px bg-[#c8956c]" />
                  Каталог
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                  Каталог продукции
                </h2>
                <p className="text-neutral-500 mt-2">
                  Выберите категорию материалов
                </p>
              </div>
              <Link
                href="/catalog"
                className="hidden sm:inline-flex text-sm font-medium text-[#c8956c] hover:text-[#a67850] transition-colors group"
              >
                Все категории{" "}
                <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <RevealSection key={cat.slug} delay={index * 0.1}>
                <Link
                  href={`/catalog/${cat.slug}`}
                  className="group block category-card bg-white border border-neutral-200 overflow-hidden"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover category-image transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="category-overlay absolute inset-0 bg-black/20 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <p className="text-white/70 text-xs font-medium">
                        {cat.productCount} товаров
                      </p>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-primary group-hover:text-[#c8956c] transition-colors duration-300">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-neutral-500 mt-2 line-clamp-2">
                      {cat.description}
                    </p>
                  </div>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gold separator */}
      <div className="gold-line" />

      {/* Popular products */}
      <section className="py-20 lg:py-28">
        <div className="section-padding">
          <RevealSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="inline-flex items-center gap-2 text-[#c8956c] font-medium text-xs tracking-[0.2em] uppercase mb-3">
                  <span className="w-6 h-px bg-[#c8956c]" />
                  Бестселлеры
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Популярные товары
                </h2>
                <p className="text-neutral-500 mt-2">
                  Лучшие предложения от наших поставщиков
                </p>
              </div>
              <Link
                href="/catalog"
                className="hidden sm:inline-flex text-sm font-medium text-[#c8956c] hover:text-[#a67850] transition-colors group"
              >
                Весь каталог{" "}
                <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <AnimatedProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a] text-white relative overflow-hidden texture-bg">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#c8956c]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#c8956c]/5 rounded-full blur-[120px]" />

        <div className="section-padding relative z-10">
          <RevealSection>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 text-[#c8956c] font-medium text-xs tracking-[0.2em] uppercase mb-3">
                <span className="w-6 h-px bg-[#c8956c]" />
                Преимущества
                <span className="w-6 h-px bg-[#c8956c]" />
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Почему выбирают нас
              </h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
                title: "Гарантия качества",
                desc: "Только сертифицированная продукция от проверенных производителей",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
                title: "Доставка по России",
                desc: "Собственная логистика, доставка до объекта в любой регион",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Честные цены",
                desc: "Прямые поставки от заводов без посредников и наценок",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ),
                title: "Консультация эксперта",
                desc: "Поможем подобрать материалы под ваш проект и бюджет",
              },
            ].map((item, index) => (
              <RevealSection key={item.title} delay={index * 0.15}>
                <div className="text-center group">
                  <div className="w-16 h-16 border border-[#c8956c]/30 flex items-center justify-center mx-auto mb-5 text-[#c8956c] transition-all duration-300 group-hover:border-[#c8956c] group-hover:bg-[#c8956c]/10 group-hover:shadow-[0_0_30px_rgba(200,149,108,0.15)]">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 lg:py-28 bg-light">
        <div className="section-padding">
          <RevealSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="inline-flex items-center gap-2 text-[#c8956c] font-medium text-xs tracking-[0.2em] uppercase mb-3">
                  <span className="w-6 h-px bg-[#c8956c]" />
                  Партнёры
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold">Наши бренды</h2>
                <p className="text-neutral-500 mt-2">
                  Работаем только с проверенными производителями
                </p>
              </div>
              <Link
                href="/brands"
                className="hidden sm:inline-flex text-sm font-medium text-[#c8956c] hover:text-[#a67850] transition-colors group"
              >
                Все бренды{" "}
                <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </RevealSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brands.map((brand, index) => (
              <RevealSection key={brand.slug} delay={index * 0.05}>
                <Link
                  href={`/brands#${brand.slug}`}
                  className="bg-white border border-neutral-200 p-6 flex flex-col items-center justify-center text-center
                           hover:border-[#c8956c]/40 hover:shadow-[0_8px_30px_rgba(200,149,108,0.1)] transition-all duration-300 group"
                >
                  <span className="text-sm font-semibold text-primary group-hover:text-[#c8956c] transition-colors duration-300">
                    {brand.name}
                  </span>
                  <span className="text-[11px] text-neutral-400 mt-1">
                    {brand.country}
                  </span>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="section-padding">
          <RevealSection>
            <div className="relative bg-[#0a0a0a] text-white p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c8956c] via-[#e0b08a] to-[#c8956c]" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#c8956c]/10 rounded-full blur-[80px]" />

              <div className="max-w-lg relative z-10">
                <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                  Нужна помощь с выбором материалов?
                </h2>
                <p className="text-neutral-400 leading-relaxed">
                  Оставьте заявку — наш эксперт свяжется с вами в течение 15
                  минут и поможет подобрать оптимальное решение для вашего
                  проекта.
                </p>
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="relative z-10 btn-glow bg-[#c8956c] text-white px-10 py-4 whitespace-nowrap font-medium text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,149,108,0.4)]"
              >
                Получить консультацию
              </button>
            </div>
          </RevealSection>
        </div>
      </section>

      <RequestModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Получить консультацию"
        subtitle="Оставьте заявку и наш менеджер свяжется с вами в течение 15 минут"
      />
    </>
  );
}
