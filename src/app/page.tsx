"use client";

import Link from "next/link";
import { categories, products, brands } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";
import RequestModal from "@/components/RequestModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const featuredProducts = products.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        <div className="relative section-padding py-24 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-accent font-medium text-sm tracking-wider uppercase mb-4">
              Торговый дом Скрябин
            </p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Премиальные фасадные материалы
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed mb-8 max-w-lg">
              Облицовочный кирпич, клинкерная брусчатка, фасадная плитка и
              черепица от проверенных производителей. Доставка по всей России.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/catalog" className="btn-accent px-10 py-4">
                Смотреть каталог
              </Link>
              <button
                onClick={() => setModalOpen(true)}
                className="btn-outline border-white text-white hover:bg-white hover:text-primary px-10 py-4"
              >
                Получить консультацию
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-neutral-700">
            {[
              { value: "5+", label: "Лет на рынке" },
              { value: "6", label: "Производителей" },
              { value: "300+", label: "Товаров в каталоге" },
              { value: "1000+", label: "Выполненных заказов" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-accent">{stat.value}</p>
                <p className="text-sm text-neutral-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-light">
        <div className="section-padding">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold">Каталог продукции</h2>
              <p className="text-neutral-500 mt-2">
                Выберите категорию материалов
              </p>
            </div>
            <Link
              href="/catalog"
              className="hidden sm:inline-flex text-sm font-medium text-accent hover:text-accent-dark transition-colors"
            >
              Все категории &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/catalog/${cat.slug}`}
                className="group bg-white border border-neutral-200 hover:border-accent transition-all duration-200"
              >
                <div className="aspect-[4/3] bg-gray-warm relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                    <svg
                      className="w-12 h-12 opacity-20"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-primary group-hover:text-accent transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    {cat.productCount} товаров
                  </p>
                  <p className="text-sm text-neutral-500 mt-3 line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular products */}
      <section className="py-20">
        <div className="section-padding">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold">Популярные товары</h2>
              <p className="text-neutral-500 mt-2">
                Лучшие предложения от наших поставщиков
              </p>
            </div>
            <Link
              href="/catalog"
              className="hidden sm:inline-flex text-sm font-medium text-accent hover:text-accent-dark transition-colors"
            >
              Весь каталог &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-primary text-white">
        <div className="section-padding">
          <h2 className="text-3xl font-bold text-center mb-12">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Гарантия качества",
                desc: "Только сертифицированная продукция от проверенных производителей",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Доставка по России",
                desc: "Собственная логистика, доставка до объекта в любой регион",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Честные цены",
                desc: "Прямые поставки от заводов без посредников и наценок",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: "Консультация эксперта",
                desc: "Поможем подобрать материалы под ваш проект и бюджет",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 border border-accent/30 flex items-center justify-center mx-auto mb-4 text-accent">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 bg-light">
        <div className="section-padding">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold">Наши бренды</h2>
              <p className="text-neutral-500 mt-2">
                Работаем только с проверенными производителями
              </p>
            </div>
            <Link
              href="/brands"
              className="hidden sm:inline-flex text-sm font-medium text-accent hover:text-accent-dark transition-colors"
            >
              Все бренды &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/brands#${brand.slug}`}
                className="bg-white border border-neutral-200 p-6 flex flex-col items-center justify-center text-center
                         hover:border-accent transition-all duration-200 group"
              >
                <span className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                  {brand.name}
                </span>
                <span className="text-[11px] text-neutral-400 mt-1">
                  {brand.country}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="section-padding">
          <div className="bg-primary text-white p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-lg">
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                Нужна помощь с выбором материалов?
              </h2>
              <p className="text-neutral-300">
                Оставьте заявку — наш эксперт свяжется с вами в течение 15
                минут и поможет подобрать оптимальное решение для вашего проекта.
              </p>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-accent px-10 py-4 whitespace-nowrap"
            >
              Получить консультацию
            </button>
          </div>
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
