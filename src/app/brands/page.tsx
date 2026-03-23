import { brands } from "@/data/products";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бренды — ТД Скрябин | Производители фасадных материалов",
  description:
    "Работаем с ведущими производителями: Nelissen, Sultan Ceramic, Real Brick, Terramatic, Богандинский кирпичный завод, Скрябин Керамикс.",
};

export default function BrandsPage() {
  return (
    <div className="section-padding">
      <Breadcrumbs items={[{ label: "Бренды" }]} />

      <h1 className="text-3xl font-bold mb-2">Наши бренды</h1>
      <p className="text-neutral-500 mb-10 max-w-2xl">
        Мы работаем только с проверенными производителями, чья продукция
        соответствует высоким стандартам качества и прошла сертификацию.
      </p>

      <div className="space-y-8 mb-16">
        {brands.map((brand) => (
          <div
            key={brand.slug}
            id={brand.slug}
            className="bg-light border border-neutral-200 p-8 lg:p-10"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="w-20 h-20 bg-white border border-neutral-200 flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-neutral-400">
                  {brand.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <div>
                <div className="flex items-baseline gap-3 mb-2">
                  <h2 className="text-xl font-bold">{brand.name}</h2>
                  <span className="text-sm text-neutral-400">
                    {brand.country}
                  </span>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl">
                  {brand.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
