import Link from "next/link";
import { categories, products } from "@/data/products";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
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
            className="group bg-light border border-neutral-200 hover:border-accent transition-all duration-200 p-6"
          >
            <h2 className="font-semibold text-primary group-hover:text-accent transition-colors mb-1">
              {cat.name}
            </h2>
            <p className="text-xs text-neutral-400 mb-3">
              {cat.productCount} товаров
            </p>
            <p className="text-sm text-neutral-500 line-clamp-2">
              {cat.description}
            </p>
            <span className="inline-block mt-4 text-sm text-accent font-medium">
              Перейти &rarr;
            </span>
          </Link>
        ))}
      </div>

      {/* All products */}
      <h2 className="text-2xl font-bold mb-6">Все товары</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
