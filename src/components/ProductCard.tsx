"use client";

import Link from "next/link";
import { Product } from "@/data/products";
import { useState } from "react";
import RequestModal from "./RequestModal";

export default function ProductCard({ product }: { product: Product }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="product-card bg-white border border-neutral-200 group">
        <Link href={`/product/${product.slug}`}>
          <div className="aspect-[4/3] bg-gray-warm relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
              <svg
                className="w-20 h-20 opacity-20"
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
              <span className="absolute top-3 left-3 bg-green-600 text-white text-[11px] px-2.5 py-1 font-medium">
                В наличии
              </span>
            )}
          </div>
        </Link>

        <div className="p-5">
          <p className="text-xs text-accent font-medium mb-1.5">
            {product.brand}
          </p>
          <Link href={`/product/${product.slug}`}>
            <h3 className="text-base font-semibold text-primary mb-3 leading-snug group-hover:text-accent transition-colors line-clamp-2 min-h-[2.75rem]">
              {product.name}
            </h3>
          </Link>

          {/* Key specs inline */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-500 mb-4">
            {product.specs["Формат"] && (
              <span>{product.specs["Формат"]}</span>
            )}
            {product.specs["Морозостойкость"] && (
              <span>{product.specs["Морозостойкость"]}</span>
            )}
          </div>

          <div className="flex items-baseline justify-between mb-4 pt-3 border-t border-neutral-100">
            <div>
              <span className="text-xl font-bold">
                от {product.pricePerUnit} ₽
              </span>
              <span className="text-xs text-neutral-400 ml-1">
                /{product.unit}
              </span>
            </div>
            <span className="text-xs text-neutral-400">
              {product.pricePerSqm.toLocaleString("ru-RU")} ₽/м²
            </span>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="btn-accent w-full text-xs py-3"
          >
            Оставить заявку
          </button>
        </div>
      </div>

      <RequestModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Оставить заявку"
        subtitle="Менеджер свяжется с вами, подготовит расчёт и ответит на вопросы"
        productName={product.name}
      />
    </>
  );
}
