export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  brand: string;
  pricePerUnit: number;
  pricePerSqm: number;
  unit: string;
  image: string;
  images: string[];
  specs: Record<string, string>;
  description: string;
  inStock: boolean;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export interface Brand {
  slug: string;
  name: string;
  country: string;
  description: string;
  logo: string;
}

export const categories: Category[] = [
  {
    slug: "oblicovochnyj-kirpich",
    name: "Облицовочный кирпич",
    description:
      "Клинкерный, ригельный кирпич и кирпич ручной формовки для фасадов зданий. Широкий выбор цветов и фактур от ведущих производителей.",
    image: "/td-skriabin/images/cat-brick.jpg",
    productCount: 186,
  },
  {
    slug: "klinkernaya-bruschatka",
    name: "Клинкерная брусчатка",
    description:
      "Тротуарная клинкерная брусчатка для мощения дорожек, площадок и парковок. Высокая прочность и долговечность.",
    image: "/td-skriabin/images/cat-paving.jpg",
    productCount: 54,
  },
  {
    slug: "fasadnaya-plitka",
    name: "Фасадная плитка",
    description:
      "Клинкерная фасадная плитка и плитка ручной формовки для облицовки фасадов, цоколей и интерьеров.",
    image: "/td-skriabin/images/cat-tile.jpg",
    productCount: 48,
  },
  {
    slug: "klinkernaya-cherepica",
    name: "Клинкерная черепица",
    description:
      "Керамическая и клинкерная черепица для кровли. Натуральный материал с гарантией более 50 лет.",
    image: "/td-skriabin/images/cat-roof.jpg",
    productCount: 31,
  },
];

export const brands: Brand[] = [
  {
    slug: "nelissen",
    name: "Nelissen",
    country: "Нидерланды",
    description:
      "Голландский производитель клинкерного кирпича премиум-класса. Более 100 лет традиций качества.",
    logo: "/td-skriabin/images/brand-nelissen.png",
  },
  {
    slug: "sultan-ceramic",
    name: "Sultan Ceramic",
    country: "Россия",
    description:
      "Производитель клинкера методом жёсткой экструзии. Современное производство и контроль качества.",
    logo: "/td-skriabin/images/brand-sultan.png",
  },
  {
    slug: "real-brick",
    name: "Real Brick",
    country: "Россия",
    description:
      "Многокомпонентные минеральные продукты — плитка, кирпич, черепица. Инновационные технологии.",
    logo: "/td-skriabin/images/brand-realbrick.png",
  },
  {
    slug: "terramatic",
    name: "Terramatic",
    country: "Россия",
    description:
      "Завод клинкера в Кургане. Российское производство европейского качества.",
    logo: "/td-skriabin/images/brand-terramatic.png",
  },
  {
    slug: "bogandinskij",
    name: "Богандинский кирпичный завод",
    country: "Россия",
    description:
      "Кирпич ручной формовки в разных цветах и форматах. Традиционные технологии производства.",
    logo: "/td-skriabin/images/brand-bogandinskij.png",
  },
  {
    slug: "skriabin-ceramics",
    name: "Скрябин Керамикс",
    country: "Россия",
    description:
      "Собственное производство клинкерного кирпича. Уникальность каждого изделия.",
    logo: "/td-skriabin/images/brand-skriabin.png",
  },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "kirpich-nelissen-caso",
    name: "Кирпич Nelissen Caso",
    category: "Облицовочный кирпич",
    categorySlug: "oblicovochnyj-kirpich",
    brand: "Nelissen",
    pricePerUnit: 98,
    pricePerSqm: 5488,
    unit: "шт",
    image: "/td-skriabin/images/prod-1.jpg",
    images: ["/td-skriabin/images/prod-1.jpg", "/td-skriabin/images/prod-1-2.jpg"],
    specs: {
      Формат: "210×100×50 мм",
      Пустотность: "Полнотелый",
      Вес: "2.1 кг",
      "Кол-во в поддоне": "660 шт",
      "Расход на м²": "56 шт",
      Водопоглощение: "≤6%",
      Морозостойкость: "F100",
    },
    description:
      "Клинкерный кирпич Nelissen Caso — элегантный тёмно-серый оттенок с благородной текстурой. Идеален для современных фасадов в стиле минимализм и лофт.",
    inStock: true,
  },
  {
    id: "2",
    slug: "kirpich-sultan-ceramic-klassik",
    name: "Кирпич Sultan Ceramic Классик",
    category: "Облицовочный кирпич",
    categorySlug: "oblicovochnyj-kirpich",
    brand: "Sultan Ceramic",
    pricePerUnit: 42,
    pricePerSqm: 2352,
    unit: "шт",
    image: "/td-skriabin/images/prod-2.jpg",
    images: ["/td-skriabin/images/prod-2.jpg"],
    specs: {
      Формат: "250×120×65 мм",
      Пустотность: "Пустотелый",
      Вес: "2.4 кг",
      "Кол-во в поддоне": "480 шт",
      "Расход на м²": "52 шт",
      Водопоглощение: "≤8%",
      Морозостойкость: "F75",
    },
    description:
      "Классический клинкерный кирпич тёплого красно-коричневого оттенка. Универсальное решение для фасадов жилых и коммерческих зданий.",
    inStock: true,
  },
  {
    id: "3",
    slug: "kirpich-real-brick-antik",
    name: "Кирпич Real Brick Антик",
    category: "Облицовочный кирпич",
    categorySlug: "oblicovochnyj-kirpich",
    brand: "Real Brick",
    pricePerUnit: 36,
    pricePerSqm: 2016,
    unit: "шт",
    image: "/td-skriabin/images/prod-3.jpg",
    images: ["/td-skriabin/images/prod-3.jpg"],
    specs: {
      Формат: "250×120×65 мм",
      Пустотность: "Пустотелый",
      Вес: "2.3 кг",
      "Кол-во в поддоне": "512 шт",
      "Расход на м²": "52 шт",
      Водопоглощение: "≤10%",
      Морозостойкость: "F50",
    },
    description:
      "Кирпич ручной формовки с эффектом состаренной поверхности. Создаёт атмосферу старинной кладки на современном фасаде.",
    inStock: true,
  },
  {
    id: "4",
    slug: "kirpich-terramatic-graffit",
    name: "Кирпич Terramatic Графит",
    category: "Облицовочный кирпич",
    categorySlug: "oblicovochnyj-kirpich",
    brand: "Terramatic",
    pricePerUnit: 38,
    pricePerSqm: 2128,
    unit: "шт",
    image: "/td-skriabin/images/prod-4.jpg",
    images: ["/td-skriabin/images/prod-4.jpg"],
    specs: {
      Формат: "250×120×65 мм",
      Пустотность: "Полнотелый",
      Вес: "3.6 кг",
      "Кол-во в поддоне": "400 шт",
      "Расход на м²": "52 шт",
      Водопоглощение: "≤5%",
      Морозостойкость: "F100",
    },
    description:
      "Тёмный клинкерный кирпич цвета графита. Премиальный выбор для архитектурных проектов с выразительным характером.",
    inStock: true,
  },
  {
    id: "5",
    slug: "kirpich-bogandinskij-pesochnyj",
    name: "Кирпич Богандинский Песочный",
    category: "Облицовочный кирпич",
    categorySlug: "oblicovochnyj-kirpich",
    brand: "Богандинский кирпичный завод",
    pricePerUnit: 28,
    pricePerSqm: 1568,
    unit: "шт",
    image: "/td-skriabin/images/prod-5.jpg",
    images: ["/td-skriabin/images/prod-5.jpg"],
    specs: {
      Формат: "250×120×65 мм",
      Пустотность: "Пустотелый",
      Вес: "2.1 кг",
      "Кол-во в поддоне": "480 шт",
      "Расход на м²": "52 шт",
      Водопоглощение: "≤12%",
      Морозостойкость: "F50",
    },
    description:
      "Кирпич ручной формовки тёплого песочного оттенка. Экологичный материал для создания уютных фасадов в классическом стиле.",
    inStock: true,
  },
  {
    id: "6",
    slug: "kirpich-skriabin-ceramics-premium",
    name: "Кирпич Скрябин Керамикс Премиум",
    category: "Облицовочный кирпич",
    categorySlug: "oblicovochnyj-kirpich",
    brand: "Скрябин Керамикс",
    pricePerUnit: 45,
    pricePerSqm: 2520,
    unit: "шт",
    image: "/td-skriabin/images/prod-6.jpg",
    images: ["/td-skriabin/images/prod-6.jpg"],
    specs: {
      Формат: "250×120×65 мм",
      Пустотность: "Полнотелый",
      Вес: "3.8 кг",
      "Кол-во в поддоне": "420 шт",
      "Расход на м²": "52 шт",
      Водопоглощение: "≤4%",
      Морозостойкость: "F150",
    },
    description:
      "Флагманский клинкерный кирпич собственного производства. Каждое изделие уникально благодаря ручной обработке поверхности.",
    inStock: true,
  },
  {
    id: "7",
    slug: "bruschatka-skriabin-sortirovka-30",
    name: "Брусчатка Скрябин Керамикс Сортировка 30",
    category: "Клинкерная брусчатка",
    categorySlug: "klinkernaya-bruschatka",
    brand: "Скрябин Керамикс",
    pricePerUnit: 62,
    pricePerSqm: 3472,
    unit: "шт",
    image: "/td-skriabin/images/prod-7.jpg",
    images: ["/td-skriabin/images/prod-7.jpg"],
    specs: {
      Формат: "200×100×52 мм",
      Вес: "2.0 кг",
      "Кол-во в поддоне": "720 шт",
      "Расход на м²": "48 шт",
      Водопоглощение: "≤3%",
      Морозостойкость: "F200",
    },
    description:
      "Клинкерная брусчатка с уникальной сортировкой цветов. Идеальна для мощения дорожек, террас и парковочных зон.",
    inStock: true,
  },
  {
    id: "8",
    slug: "bruschatka-sultan-classic",
    name: "Брусчатка Sultan Ceramic Classic",
    category: "Клинкерная брусчатка",
    categorySlug: "klinkernaya-bruschatka",
    brand: "Sultan Ceramic",
    pricePerUnit: 55,
    pricePerSqm: 3080,
    unit: "шт",
    image: "/td-skriabin/images/prod-8.jpg",
    images: ["/td-skriabin/images/prod-8.jpg"],
    specs: {
      Формат: "200×100×45 мм",
      Вес: "1.8 кг",
      "Кол-во в поддоне": "800 шт",
      "Расход на м²": "48 шт",
      Водопоглощение: "≤4%",
      Морозостойкость: "F150",
    },
    description:
      "Классическая клинкерная брусчатка натурального терракотового оттенка. Традиционный выбор для благоустройства территорий.",
    inStock: true,
  },
  {
    id: "9",
    slug: "plitka-nelissen-fasad-grey",
    name: "Плитка Nelissen Фасад Grey",
    category: "Фасадная плитка",
    categorySlug: "fasadnaya-plitka",
    brand: "Nelissen",
    pricePerUnit: 78,
    pricePerSqm: 4368,
    unit: "шт",
    image: "/td-skriabin/images/prod-9.jpg",
    images: ["/td-skriabin/images/prod-9.jpg"],
    specs: {
      Формат: "240×71×14 мм",
      Вес: "0.4 кг",
      "Кол-во в упаковке": "48 шт",
      "Расход на м²": "48 шт",
      Водопоглощение: "≤3%",
      Морозостойкость: "F100",
    },
    description:
      "Клинкерная фасадная плитка элегантного серого оттенка. Лёгкая альтернатива кирпичу для вентилируемых фасадов и реновации.",
    inStock: true,
  },
  {
    id: "10",
    slug: "plitka-real-brick-fasad-antik",
    name: "Плитка Real Brick Фасад Антик",
    category: "Фасадная плитка",
    categorySlug: "fasadnaya-plitka",
    brand: "Real Brick",
    pricePerUnit: 32,
    pricePerSqm: 1792,
    unit: "шт",
    image: "/td-skriabin/images/prod-10.jpg",
    images: ["/td-skriabin/images/prod-10.jpg"],
    specs: {
      Формат: "240×71×10 мм",
      Вес: "0.3 кг",
      "Кол-во в упаковке": "60 шт",
      "Расход на м²": "48 шт",
      Водопоглощение: "≤8%",
      Морозостойкость: "F75",
    },
    description:
      "Фасадная плитка с эффектом состаренного кирпича. Придаёт зданию характер и индивидуальность при минимальной нагрузке на стены.",
    inStock: true,
  },
  {
    id: "11",
    slug: "cherepica-nelissen-classic-red",
    name: "Черепица Nelissen Classic Red",
    category: "Клинкерная черепица",
    categorySlug: "klinkernaya-cherepica",
    brand: "Nelissen",
    pricePerUnit: 145,
    pricePerSqm: 2175,
    unit: "шт",
    image: "/td-skriabin/images/prod-11.jpg",
    images: ["/td-skriabin/images/prod-11.jpg"],
    specs: {
      Формат: "420×330 мм",
      Вес: "3.5 кг",
      "Кол-во на поддоне": "240 шт",
      "Расход на м²": "15 шт",
      Водопоглощение: "≤3%",
      Морозостойкость: "F150",
    },
    description:
      "Классическая керамическая черепица насыщенного красного цвета. Гарантия от производителя — 50 лет. Идеальный выбор для долговечной кровли.",
    inStock: true,
  },
  {
    id: "12",
    slug: "cherepica-terramatic-dark-brown",
    name: "Черепица Terramatic Тёмно-коричневая",
    category: "Клинкерная черепица",
    categorySlug: "klinkernaya-cherepica",
    brand: "Terramatic",
    pricePerUnit: 95,
    pricePerSqm: 1425,
    unit: "шт",
    image: "/td-skriabin/images/prod-12.jpg",
    images: ["/td-skriabin/images/prod-12.jpg"],
    specs: {
      Формат: "420×330 мм",
      Вес: "3.2 кг",
      "Кол-во на поддоне": "260 шт",
      "Расход на м²": "15 шт",
      Водопоглощение: "≤5%",
      Морозостойкость: "F100",
    },
    description:
      "Керамическая черепица глубокого тёмно-коричневого оттенка. Отлично сочетается с фасадами из натурального камня и кирпича.",
    inStock: true,
  },
];
