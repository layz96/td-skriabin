"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import { useState } from "react";

type CalcMode = "area" | "volume";

interface WallResult {
  bricks: number;
  sqm: number;
  pallets: number;
}

const BRICK_SIZES: Record<string, { label: string; perSqm: Record<string, number> }> = {
  single: {
    label: "Одинарный (250×120×65)",
    perSqm: { "0.5": 52, "1": 102, "1.5": 153, "2": 204 },
  },
  oneAndHalf: {
    label: "Полуторный (250×120×88)",
    perSqm: { "0.5": 39, "1": 78, "1.5": 117, "2": 156 },
  },
  double: {
    label: "Двойной (250×120×138)",
    perSqm: { "0.5": 26, "1": 52, "1.5": 78, "2": 104 },
  },
  euro: {
    label: "Евро (250×85×65)",
    perSqm: { "0.5": 52, "1": 102, "1.5": 153, "2": 204 },
  },
};

const WALL_THICKNESSES = [
  { value: "0.5", label: "0.5 кирпича (120 мм)" },
  { value: "1", label: "1 кирпич (250 мм)" },
  { value: "1.5", label: "1.5 кирпича (380 мм)" },
  { value: "2", label: "2 кирпича (510 мм)" },
];

export default function CalculatorPage() {
  const [mode, setMode] = useState<CalcMode>("area");
  const [brickSize, setBrickSize] = useState("single");
  const [thickness, setThickness] = useState("1");
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [openings, setOpenings] = useState("");
  const [volume, setVolume] = useState("");
  const [result, setResult] = useState<WallResult | null>(null);

  const calculate = () => {
    if (mode === "area") {
      const l = parseFloat(length) || 0;
      const h = parseFloat(height) || 0;
      const o = parseFloat(openings) || 0;
      const sqm = l * h - o;
      if (sqm <= 0) return;

      const perSqm = BRICK_SIZES[brickSize].perSqm[thickness];
      const bricks = Math.ceil(sqm * perSqm * 1.05); // +5% запас
      setResult({
        bricks,
        sqm: Math.round(sqm * 100) / 100,
        pallets: Math.ceil(bricks / 480),
      });
    } else {
      const v = parseFloat(volume) || 0;
      if (v <= 0) return;
      const sqm = v / (thickness === "0.5" ? 0.12 : thickness === "1" ? 0.25 : thickness === "1.5" ? 0.38 : 0.51);
      const perSqm = BRICK_SIZES[brickSize].perSqm[thickness];
      const bricks = Math.ceil(sqm * perSqm * 1.05);
      setResult({
        bricks,
        sqm: Math.round(sqm * 100) / 100,
        pallets: Math.ceil(bricks / 480),
      });
    }
  };

  const reset = () => {
    setLength("");
    setHeight("");
    setOpenings("");
    setVolume("");
    setResult(null);
  };

  return (
    <div className="section-padding">
      <Breadcrumbs items={[{ label: "Калькулятор кирпича" }]} />

      <h1 className="text-3xl font-bold mb-2">Калькулятор расхода кирпича</h1>
      <p className="text-neutral-500 mb-10 max-w-2xl">
        Рассчитайте необходимое количество кирпича для вашего объекта.
        Результат включает запас 5% на подрезку и бой.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 mb-16">
        {/* Calculator form */}
        <div>
          {/* Mode tabs */}
          <div className="flex border-b border-neutral-200 mb-8">
            <button
              onClick={() => { setMode("area"); reset(); }}
              className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                mode === "area"
                  ? "border-accent text-accent"
                  : "border-transparent text-neutral-500 hover:text-primary"
              }`}
            >
              По площади стен
            </button>
            <button
              onClick={() => { setMode("volume"); reset(); }}
              className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                mode === "volume"
                  ? "border-accent text-accent"
                  : "border-transparent text-neutral-500 hover:text-primary"
              }`}
            >
              По объёму кладки
            </button>
          </div>

          {/* Brick size */}
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-3">
              Размер кирпича
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.entries(BRICK_SIZES).map(([key, { label }]) => (
                <button
                  key={key}
                  onClick={() => setBrickSize(key)}
                  className={`p-4 border text-left text-sm transition-all ${
                    brickSize === key
                      ? "border-accent bg-accent/5 text-primary"
                      : "border-neutral-200 text-neutral-600 hover:border-neutral-400"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Wall thickness */}
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-3">
              Толщина кладки
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {WALL_THICKNESSES.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setThickness(t.value)}
                  className={`p-3 border text-center text-sm transition-all ${
                    thickness === t.value
                      ? "border-accent bg-accent/5 text-primary font-medium"
                      : "border-neutral-200 text-neutral-600 hover:border-neutral-400"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input fields */}
          {mode === "area" ? (
            <div className="space-y-4 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-500 mb-1.5">
                    Длина стен (периметр), м
                  </label>
                  <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    placeholder="40"
                    className="w-full px-4 py-3 border border-neutral-300 text-sm focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-500 mb-1.5">
                    Высота стен, м
                  </label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="3"
                    className="w-full px-4 py-3 border border-neutral-300 text-sm focus:border-accent focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-1.5">
                  Площадь оконных и дверных проёмов, м²
                </label>
                <input
                  type="number"
                  value={openings}
                  onChange={(e) => setOpenings(e.target.value)}
                  placeholder="12"
                  className="w-full px-4 py-3 border border-neutral-300 text-sm focus:border-accent focus:outline-none"
                />
              </div>
            </div>
          ) : (
            <div className="mb-8">
              <label className="block text-xs font-medium text-neutral-500 mb-1.5">
                Объём кладки, м³
              </label>
              <input
                type="number"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                placeholder="15"
                className="w-full px-4 py-3 border border-neutral-300 text-sm focus:border-accent focus:outline-none"
              />
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3">
            <button onClick={calculate} className="btn-accent px-10 py-3.5">
              Рассчитать
            </button>
            <button onClick={reset} className="btn-outline px-8 py-3.5">
              Сбросить
            </button>
          </div>
        </div>

        {/* Result sidebar */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className={`border p-6 transition-all ${result ? "border-accent bg-accent/5" : "border-neutral-200 bg-light"}`}>
            <h3 className="text-lg font-bold mb-4">Результат расчёта</h3>

            {result ? (
              <div className="space-y-4">
                <div className="bg-white p-4">
                  <p className="text-xs text-neutral-500">Площадь кладки</p>
                  <p className="text-2xl font-bold">{result.sqm} м²</p>
                </div>
                <div className="bg-white p-4">
                  <p className="text-xs text-neutral-500">
                    Количество кирпича (с запасом 5%)
                  </p>
                  <p className="text-2xl font-bold text-accent">
                    {result.bricks.toLocaleString("ru-RU")} шт
                  </p>
                </div>
                <div className="bg-white p-4">
                  <p className="text-xs text-neutral-500">
                    Количество поддонов
                  </p>
                  <p className="text-2xl font-bold">{result.pallets} шт</p>
                </div>
                <p className="text-[11px] text-neutral-400 mt-4">
                  * Расчёт является приблизительным. Для точного расчёта
                  свяжитесь с менеджером.
                </p>
              </div>
            ) : (
              <div className="text-sm text-neutral-400 py-8 text-center">
                <svg
                  className="w-12 h-12 mx-auto mb-3 opacity-30"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                Заполните параметры и нажмите «Рассчитать»
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="mt-4 border border-neutral-200 p-6">
            <h4 className="font-semibold mb-2">Нужна помощь с расчётом?</h4>
            <p className="text-sm text-neutral-500 mb-4">
              Наш эксперт подготовит точный расчёт с учётом особенностей
              вашего проекта
            </p>
            <a href="tel:+79165440624" className="btn-primary w-full py-3 text-xs">
              Позвонить: 8 (916) 544-06-24
            </a>
          </div>
        </div>
      </div>

      {/* SEO content */}
      <div className="max-w-3xl py-12 border-t border-neutral-200">
        <h2 className="text-xl font-semibold mb-4">
          Как рассчитать количество кирпича
        </h2>
        <div className="text-sm text-neutral-600 leading-relaxed space-y-3">
          <p>
            Правильный расчёт количества кирпича — важный этап планирования
            строительства. Недостаток материала приведёт к задержке работ, а
            излишки — к дополнительным затратам.
          </p>
          <p>
            <strong>Расчёт по площади</strong> — самый распространённый метод.
            Вам нужно знать периметр здания, высоту стен и площадь проёмов
            (окон и дверей). Калькулятор автоматически учтёт толщину кладки и
            размер выбранного кирпича.
          </p>
          <p>
            <strong>Расчёт по объёму</strong> удобен, когда вы уже знаете
            необходимый объём кладки в кубометрах. Этот метод часто
            используется при проектировании.
          </p>
          <p>
            Мы рекомендуем закладывать запас 5–10% на подрезку, бой при
            транспортировке и возможный брак. Наш калькулятор уже включает
            запас 5%.
          </p>
        </div>
      </div>
    </div>
  );
}
