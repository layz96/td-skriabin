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

  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const category = categories.find((c) => c.slug === product.categorySlug);
  const relatedProducts = products
    .filter(
      (p) => p.categorySlug === product.categorySlug && p.id !== product.id
    )
    .slice(0, 4);

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Image */}
        <div className="aspect-square bg-gray-warm relative">
          <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
            <svg
              className="w-24 h-24 opacity-20"
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
            <span className="absolute top-4 left-4 bg-green-600 text-white text-xs px-3 py-1 font-medium">
              В наличии
            </span>
          )}
        </div>

        {/* Info */}
        <div>
          <p className="text-sm text-accent font-medium mb-2">
            {product.brand}
          </p>
          <h1 className="text-2xl lg:text-3xl font-bold mb-6">
            {product.name}
          </h1>

          <div className="bg-light p-6 mb-6">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-3xl font-bold">
                от {product.pricePerUnit} ₽
              </span>
              <span className="text-neutral-500">/{product.unit}</span>
            </div>
            <p className="text-sm text-neutral-500">
              от {product.pricePerSqm.toLocaleString("ru-RU")} ₽ за м²
            </p>
          </div>

          <p className="text-sm text-neutral-600 leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Specs table */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-4">
              Характеристики
            </h3>
            <table className="w-full text-sm">
              <tbody>
                {Object.entries(product.specs).map(([key, value], i) => (
                  <tr
                    key={key}
                    className={i % 2 === 0 ? "bg-light" : "bg-white"}
                  >
                    <td className="px-4 py-2.5 text-neutral-500">{key}</td>
                    <td className="px-4 py-2.5 font-medium text-right">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => openModal("request")}
              className="btn-accent flex-1 py-4"
            >
              Оставить заявку
            </button>
            <button
              onClick={() => openModal("calculate")}
              className="btn-outline flex-1 py-4"
            >
              Получить расчёт
            </button>
          </div>

          {/* Quick contact */}
          <div className="mt-8 pt-6 border-t border-neutral-200">
            <p className="text-xs text-neutral-500 mb-2">Отдел продаж</p>
            <a
              href="tel:+79165440624"
              className="text-lg font-semibold hover:text-accent transition-colors"
            >
              8 (916) 544-06-24
            </a>
            <div className="flex gap-3 mt-3">
              <a
                href="https://t.me/"
                className="text-xs text-accent hover:underline"
              >
                Telegram
              </a>
              <a
                href="https://wa.me/"
                className="text-xs text-accent hover:underline"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 border-t border-neutral-200">
          <h2 className="text-2xl font-bold mb-6">Похожие товары</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
