import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Оплата и доставка — ТД Скрябин",
  description:
    "Условия оплаты и доставки фасадных материалов. Доставка по Москве и всей России.",
};

export default function DeliveryPage() {
  return (
    <div className="section-padding">
      <Breadcrumbs items={[{ label: "Оплата и доставка" }]} />

      <div className="max-w-3xl mb-16">
        <h1 className="text-3xl font-bold mb-10">Оплата и доставка</h1>

        {/* Delivery */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6">Доставка</h2>
          <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
            <div className="bg-light p-6 flex gap-4">
              <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">
                  Доставка по Москве и МО
                </h3>
                <p>
                  Доставляем манипулятором или длинномером до объекта. Стоимость
                  рассчитывается индивидуально в зависимости от объёма заказа и
                  удалённости.
                </p>
              </div>
            </div>

            <div className="bg-light p-6 flex gap-4">
              <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">
                  Доставка по России
                </h3>
                <p>
                  Организуем доставку в любой регион России транспортными
                  компаниями. Помогаем с оформлением и отслеживанием груза.
                </p>
              </div>
            </div>

            <div className="bg-light p-6 flex gap-4">
              <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">
                  Самовывоз
                </h3>
                <p>
                  Возможен самовывоз со склада. Адрес и время согласовываются
                  с менеджером при оформлении заказа.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Payment */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6">Оплата</h2>
          <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
            <div className="bg-light p-6">
              <h3 className="font-semibold text-primary mb-2">
                Для физических лиц
              </h3>
              <ul className="space-y-1">
                <li>&bull; Наличный расчёт</li>
                <li>&bull; Банковская карта</li>
                <li>&bull; Перевод на счёт</li>
              </ul>
            </div>

            <div className="bg-light p-6">
              <h3 className="font-semibold text-primary mb-2">
                Для юридических лиц
              </h3>
              <ul className="space-y-1">
                <li>&bull; Безналичная оплата по счёту</li>
                <li>&bull; Работаем с НДС и без НДС</li>
                <li>&bull; Полный пакет закрывающих документов</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process */}
        <section>
          <h2 className="text-xl font-bold mb-6">Как заказать</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Заявка",
                desc: "Оставьте заявку на сайте или позвоните нам. Менеджер свяжется в течение 15 минут.",
              },
              {
                step: "02",
                title: "Расчёт",
                desc: "Подберём материалы, рассчитаем объём и стоимость с учётом вашего проекта.",
              },
              {
                step: "03",
                title: "Доставка",
                desc: "Организуем доставку до объекта в удобное время. Контроль на каждом этапе.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="text-4xl font-bold text-accent/20">
                  {item.step}
                </span>
                <h3 className="font-semibold text-primary mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
