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
          <div className="aspect-square bg-gray-warm relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
              <svg
                className="w-16 h-16 opacity-30"
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
              <span className="absolute top-3 left-3 bg-green-600 text-white text-[10px] px-2 py-0.5 font-medium">
                В наличии
              </span>
            )}
          </div>
        </Link>

        <div className="p-4">
          <p className="text-[11px] text-neutral-400 mb-1">{product.brand}</p>
          <Link href={`/product/${product.slug}`}>
            <h3 className="text-sm font-medium text-primary mb-3 leading-snug group-hover:text-accent transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>

          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-lg font-bold">
              от {product.pricePerUnit} ₽
            </span>
            <span className="text-xs text-neutral-400">/{product.unit}</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-500 mb-4">
            <span>
              от {product.pricePerSqm.toLocaleString("ru-RU")} ₽/м²
            </span>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="btn-primary w-full text-xs py-2.5"
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
