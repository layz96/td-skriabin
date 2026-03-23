"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import RequestModal from "@/components/RequestModal";
import { useState } from "react";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="section-padding">
      <Breadcrumbs items={[{ label: "О компании" }]} />

      <div className="max-w-3xl mb-16">
        <h1 className="text-3xl font-bold mb-6">О компании</h1>

        <div className="space-y-6 text-sm text-neutral-600 leading-relaxed">
          <p className="text-base text-primary font-medium">
            Торговый дом Скрябин — поставщик премиальных фасадных материалов с
            2019 года. Мы специализируемся на клинкерном кирпиче, брусчатке,
            фасадной плитке и черепице.
          </p>

          <p>
            За более чем 5 лет работы мы выстроили прямые отношения с ведущими
            российскими и европейскими производителями. Это позволяет нам
            предлагать клиентам продукцию высочайшего качества по честным ценам
            — без посредников и наценок.
          </p>

          <p>
            Наша команда — это эксперты с глубоким пониманием строительных
            материалов. Мы не просто продаём кирпич — мы помогаем клиентам
            подобрать оптимальное решение для каждого проекта, рассчитать
            необходимое количество и организовать доставку до объекта.
          </p>
        </div>

        {/* Key facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
          {[
            { value: "5+", label: "Лет на рынке" },
            { value: "6", label: "Партнёров-производителей" },
            { value: "300+", label: "Наименований продукции" },
            { value: "3", label: "Офиса и шоурума" },
          ].map((item) => (
            <div key={item.label} className="bg-light p-6 text-center">
              <p className="text-2xl font-bold text-accent">{item.value}</p>
              <p className="text-xs text-neutral-500 mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="space-y-6 text-sm text-neutral-600 leading-relaxed">
          <h2 className="text-xl font-bold text-primary">Наши шоурумы</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-light p-6">
              <h3 className="font-semibold text-primary mb-2">
                Москва
              </h3>
              <p>ул. Большая Черемушкинская, д. 34, офис 216</p>
              <p className="mt-1 text-xs text-neutral-400">
                Пн-Пт: 9:00–20:00, Сб-Вс: 10:00–19:00
              </p>
            </div>
            <div className="bg-light p-6">
              <h3 className="font-semibold text-primary mb-2">
                Тюмень
              </h3>
              <p>ул. Московский тракт 132, офис 203</p>
              <p className="mt-1 text-xs text-neutral-400">
                Пн-Пт: 9:00–18:00
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-primary pt-4">
            Собственное производство
          </h2>
          <p>
            Помимо дистрибуции, у нас есть собственный завод в Челябинской
            области (с. Кундравы), где производится клинкерная продукция под
            брендом &laquo;Скрябин Керамикс&raquo;. Это позволяет нам
            контролировать качество на каждом этапе — от сырья до готового
            изделия.
          </p>
        </div>

        <div className="mt-12">
          <button
            onClick={() => setModalOpen(true)}
            className="btn-accent px-10 py-4"
          >
            Связаться с нами
          </button>
        </div>
      </div>

      <RequestModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Связаться с нами"
        subtitle="Оставьте заявку — мы ответим в течение 15 минут"
      />
    </div>
  );
}
