"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

const floatingBricks = [
  { size: 60, x: "10%", y: "20%", delay: 0, duration: 20 },
  { size: 40, x: "80%", y: "15%", delay: 2, duration: 25 },
  { size: 50, x: "70%", y: "60%", delay: 4, duration: 22 },
  { size: 30, x: "20%", y: "70%", delay: 1, duration: 18 },
  { size: 45, x: "90%", y: "40%", delay: 3, duration: 24 },
  { size: 35, x: "50%", y: "80%", delay: 5, duration: 20 },
];

export default function HeroSection({
  onRequestClick,
}: {
  onRequestClick: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Parallax Background Image */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <Image
          src="/images/hero-bg.jpg"
          alt="Premium brick facade"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </motion.div>

      {/* Floating decorative bricks */}
      {floatingBricks.map((brick, i) => (
        <div
          key={i}
          className="floating-brick absolute pointer-events-none"
          style={{
            width: brick.size,
            height: brick.size * 0.6,
            left: brick.x,
            top: brick.y,
            animationDelay: `${brick.delay}s`,
            animationDuration: `${brick.duration}s`,
          }}
        >
          <div
            className="w-full h-full border border-[#c8956c]/20 bg-[#c8956c]/5 backdrop-blur-sm"
            style={{ transform: "rotate(45deg)" }}
          />
        </div>
      ))}

      {/* Content */}
      <motion.div className="relative z-10 section-padding w-full py-32 lg:py-40" style={{ opacity }}>
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 text-[#c8956c] font-medium text-sm tracking-[0.2em] uppercase mb-6">
              <span className="w-8 h-px bg-[#c8956c]" />
              Торговый дом Скрябин
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Премиальные
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c8956c] to-[#e0b08a]">
              фасадные материалы
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg lg:text-xl text-neutral-300 leading-relaxed mb-10 max-w-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Облицовочный кирпич, клинкерная брусчатка, фасадная плитка и
            черепица от проверенных производителей. Доставка по всей России.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href="/catalog"
              className="group relative inline-flex items-center justify-center px-10 py-4 bg-[#c8956c] text-white font-medium text-sm tracking-wide uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,149,108,0.4)]"
            >
              <span className="relative z-10">Смотреть каталог</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#a67850] to-[#c8956c] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <button
              onClick={onRequestClick}
              className="group relative inline-flex items-center justify-center px-10 py-4 border-2 border-white/30 text-white font-medium text-sm tracking-wide uppercase overflow-hidden transition-all duration-300 hover:border-[#c8956c]/60 hover:shadow-[0_0_30px_rgba(200,149,108,0.15)]"
            >
              <span className="relative z-10">Получить консультацию</span>
              <div className="absolute inset-0 bg-[#c8956c]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>
        </div>

        {/* Animated Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {[
            { value: 5, suffix: "+", label: "Лет на рынке" },
            { value: 6, suffix: "", label: "Производителей" },
            { value: 300, suffix: "+", label: "Товаров в каталоге" },
            { value: 1000, suffix: "+", label: "Выполненных заказов" },
          ].map((stat) => (
            <div key={stat.label} className="group">
              <p className="text-3xl lg:text-4xl font-bold text-[#c8956c] mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5">
          <motion.div
            className="w-1.5 h-1.5 bg-[#c8956c] rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
