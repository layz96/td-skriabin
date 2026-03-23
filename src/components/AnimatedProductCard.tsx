"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import { useState } from "react";
import { motion } from "framer-motion";
import RequestModal from "./RequestModal";

export default function AnimatedProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="group bg-white border border-neutral-200 overflow-hidden premium-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <Link href={`/product/${product.slug}`}>
          <div className="aspect-[4/3] relative overflow-hidden bg-neutral-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            {product.inStock && (
              <span className="absolute top-3 left-3 bg-green-600/90 backdrop-blur-sm text-white text-[11px] px-2.5 py-1 font-medium">
                В наличии
              </span>
            )}
          </div>
        </Link>

        <div className="p-5">
          <p className="text-xs text-[#c8956c] font-medium mb-1.5 tracking-wider uppercase">
            {product.brand}
          </p>
          <Link href={`/product/${product.slug}`}>
            <h3 className="text-base font-semibold text-primary mb-3 leading-snug group-hover:text-[#c8956c] transition-colors duration-300 line-clamp-2 min-h-[2.75rem]">
              {product.name}
            </h3>
          </Link>

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
            className="btn-glow w-full text-xs py-3 bg-[#c8956c] text-white font-medium tracking-wide uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(200,149,108,0.4)]"
          >
            Оставить заявку
          </button>
        </div>
      </motion.div>

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
