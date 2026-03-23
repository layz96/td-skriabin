"use client";

import { products, categories } from "@/data/products";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import RequestModal from "@/components/RequestModal";
import { notFound } from "next/navigation";
import { useState } from "react";

export default function ProductPageClient({ slug }: { slug: string }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"request" | "calculate">(
    "request"
  );
  const [activeTab, setActiveTab] = useState<"specs" | "description">("specs");

  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const category = categories.find((c) => c.slug === product.categorySlug);
  const relatedProducts = products
    .filter(
      (p) => p.categorySlug === product.categorySlug && p.id !== product.id
    )
    .slice(0, 3);

  const openModal = (type: "request" | "calculate") => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div className="section-padding">
      <Breadcrumbs
        items={[
          { label: "Каталог", href: "/catalog" },
          {
            label: category?.name || product.category,
            href: `/catalog/${product.categorySlug}`,
          },
          { label: product.name },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 mb-16">
        {/* Left: Image + tabs */}
        <div>
          {/* Main image */}
          <div className="aspect-[4/3] bg-gray-warm relative mb-4">
            <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
              <svg
                className="w-32 h-32 opacity-15"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            {product.inStock && (
              <span className="absolute top-4 left-4 bg-green-600 text-white text-sm px-4 py-1.5 font-medium">
                В наличии
              </span>
            )}
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-20 h-20 bg-gray-warm border-2 cursor-pointer ${
                  i === 1 ? "border-accent" : "border-transparent"
                }`}
              >
                <div className="w-full h-full flex items-center justify-center text-neutral-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Tabs: Specs / Description */}
          <div className="mt-10">
            <div className="flex border-b border-neutral-200">
              <button
                onClick={() => setActiveTab("specs")}
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === "specs"
                    ? "border-accent text-accent"
                    : "border-transparent text-neutral-500 hover:text-primary"
                }`}
              >
                Характеристики
              </button>
              <button
                onClick={() => setActiveTab("description")}
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === "description"
                    ? "border-accent text-accent"
                    : "border-transparent text-neutral-500 hover:text-primary"
                }`}
              >
                Описание
              </button>
            </div>

            <div className="py-6">
              {activeTab === "specs" ? (
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(product.specs).map(([key, value], i) => (
                      <tr
                        key={key}
                        className={i % 2 === 0 ? "bg-light" : "bg-white"}
                      >
                        <td className="px-4 py-3 text-neutral-500 w-1/2">
                          {key}
                        </td>
                        <td className="px-4 py-3 font-medium text-right">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="text-sm text-neutral-600 leading-relaxed space-y-4">
                  <p>{product.description}</p>
                  <p>
                    Материал доступен к заказу со склада в Москве или напрямую
                    от производителя. Для крупных объёмов действуют специальные
                    условия — свяжитесь с менеджером для расчёта.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Sticky sidebar */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="border border-neutral-200 p-6">
            <p className="text-sm text-accent font-medium mb-1">
              {product.brand}
            </p>
            <h1 className="text-2xl font-bold mb-6">{product.name}</h1>

            <div className="bg-primary text-white p-5 mb-6">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-bold">
                  от {product.pricePerUnit} ₽
                </span>
                <span className="text-neutral-400">/{product.unit}</span>
              </div>
              <p className="text-sm text-neutral-400">
                от {product.pricePerSqm.toLocaleString("ru-RU")} ₽ за м²
              </p>
            </div>

            {/* Quick specs */}
            <div className="space-y-2 mb-6 text-sm">
              {product.specs["Формат"] && (
                <div className="flex justify-between">
                  <span className="text-neutral-500">Формат</span>
                  <span className="font-medium">{product.specs["Формат"]}</span>
                </div>
              )}
              {product.specs["Морозостойкость"] && (
                <div className="flex justify-between">
                  <span className="text-neutral-500">Морозостойкость</span>
                  <span className="font-medium">
                    {product.specs["Морозостойкость"]}
                  </span>
                </div>
              )}
              {product.specs["Водопоглощение"] && (
                <div className="flex justify-between">
                  <span className="text-neutral-500">Водопоглощение</span>
                  <span className="font-medium">
                    {product.specs["Водопоглощение"]}
                  </span>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <button
                onClick={() => openModal("request")}
                className="btn-accent w-full py-4 text-sm"
              >
                Оставить заявку
              </button>
              <button
                onClick={() => openModal("calculate")}
                className="btn-outline w-full py-4 text-sm"
              >
                Получить расчёт
              </button>
            </div>

            {/* Contact */}
            <div className="mt-6 pt-6 border-t border-neutral-200">
              <p className="text-xs text-neutral-400 mb-2">
                Персональный менеджер
              </p>
              <a
                href="tel:+79165440624"
                className="text-lg font-bold hover:text-accent transition-colors block mb-3"
              >
                8 (916) 544-06-24
              </a>
              <div className="flex gap-2">
                <a
                  href="https://t.me/"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-light text-sm font-medium hover:bg-gray-warm transition-colors"
                >
                  Telegram
                </a>
                <a
                  href="https://wa.me/"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-light text-sm font-medium hover:bg-gray-warm transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 border-t border-neutral-200">
          <h2 className="text-2xl font-bold mb-8">Похожие товары</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      <RequestModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={
          modalType === "request" ? "Оставить заявку" : "Получить расчёт"
        }
        subtitle={
          modalType === "request"
            ? "Менеджер свяжется с вами, подготовит предложение и ответит на вопросы"
            : "Укажите контакты — мы рассчитаем стоимость материалов для вашего объекта"
        }
        productName={product.name}
      />
    </div>
  );
}
