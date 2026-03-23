import { categories, products } from "@/data/products";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: { category: string };
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = categories.find((c) => c.slug === params.category);
  if (!category) return {};
  return {
    title: `${category.name} — Купить в Москве | ТД Скрябин`,
    description: category.description,
  };
}

export default function CategoryPage({ params }: Props) {
  const category = categories.find((c) => c.slug === params.category);
  if (!category) notFound();

  const categoryProducts = products.filter(
    (p) => p.categorySlug === params.category
  );

  return (
    <div className="section-padding">
      <Breadcrumbs
        items={[
          { label: "Каталог", href: "/catalog" },
          { label: category.name },
        ]}
      />

      <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
      <p className="text-neutral-500 mb-10 max-w-2xl">
        {category.description}
      </p>

      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-neutral-500">
          <p className="text-lg mb-4">
            Товары в данной категории скоро появятся
          </p>
          <p className="text-sm">
            Оставьте заявку — мы подберём подходящий вариант
          </p>
        </div>
      )}

      {/* SEO text */}
      <div className="max-w-3xl py-12 border-t border-neutral-200">
        <h2 className="text-xl font-semibold mb-4">
          {category.name} — купить в Москве
        </h2>
        <div className="text-sm text-neutral-600 leading-relaxed space-y-3">
          <p>
            {category.description} В Торговом доме Скрябин представлена
            продукция от ведущих производителей: Nelissen, Sultan Ceramic, Real
            Brick, Terramatic, Богандинский кирпичный завод и Скрябин Керамикс.
          </p>
          <p>
            Мы предлагаем полный спектр услуг — от консультации по выбору
            материалов до расчёта необходимого количества и доставки до объекта.
            Наши эксперты помогут подобрать оптимальное решение с учётом
            архитектурного проекта и бюджета.
          </p>
          <p>
            Для получения точного расчёта и персонального предложения оставьте
            заявку на сайте или позвоните по телефону{" "}
            <a
              href="tel:+79165440624"
              className="text-accent hover:underline"
            >
              8 (916) 544-06-24
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
