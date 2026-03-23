import { products } from "@/data/products";
import ProductPageClient from "./ProductPageClient";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — Купить | ТД Скрябин`,
    description: product.description,
  };
}

export default function ProductPage({ params }: Props) {
  return <ProductPageClient slug={params.slug} />;
}
