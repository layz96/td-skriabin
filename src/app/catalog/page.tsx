import Link from "next/link";
import Image from "next/image";
import { categories, products } from "@/data/products";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedProductCard from "@/components/AnimatedProductCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Каталог — ТД Скрябин | Кирпич, брусчатка, плитка, черепица",
  description:
    "Полный каталог фасадных материалов: облицовочный кирпич, клинкерная брусчатка, фасадная плитка, черепица. Цены от производителя.",
};

export default function CatalogPage() {
  return (
    <div className="section-padding">
      <Breadcrumbs items={[{ label: "Каталог" }]} />

      <h1 className="text-3xl font-bold mb-2">Каталог продукции</h1>
      <p className="text-neutral-500 mb-10">
        Более 300 наименований фасадных материалов от ведущих производителей
      </p>

      {/* Categories grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/catalog/${cat.slug}`}
            className="group block bg-white border border-neutral-200 overflow-hidden hover:border-[#c8956c]/40 transition-all duration-300"
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-4 text-white/70 text-xs font-medium">
                {cat.productCount} товаров
              </p>
            </div>
            <div className="p-5">
              <h2 className="font-semibold text-primary group-hover:text-[#c8956c] transition-colors mb-1">
                {cat.name}
              </h2>
              <p className="text-sm text-neutral-500 line-clamp-2">
                {cat.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* All products */}
      <h2 className="text-2xl font-bold mb-6">Все товары</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {products.map((product, index) => (
          <AnimatedProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
}
