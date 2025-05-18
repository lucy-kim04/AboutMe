'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroTerminal() {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const sequence = async () => {
      setLines(['> ssh heeju.dev']);
      await wait(1000);

      setLines((prev) => [...prev, 'Connecting...']);
      await wait(1200);

      setLines((prev) => [...prev.slice(0, -1), 'Connected ✅']);
      await wait(800);

      setLines((prev) => [...prev, 'Welcome to 김희주의 포트폴리오입니다.']);
      await wait(1000);

      setLines((prev) => [...prev, '사용자의 니즈를 고민하고,']);
      await wait(1000);

      setLines((prev) => [
        ...prev,
        '더 좋은 방향을 함께 모색할 줄 아는 개발자입니다.',
      ]);
      await wait(1000);

      setLines((prev) => [
        ...prev,
        '현재는 Next.js와 Supabase 기반의 콘텐츠 플랫폼을 만들고 있어요.',
      ]);
    };

    sequence();
  }, []);

  return (
    <section className="flex flex-col justify-center items-center h-screen px-4">
      <div className="bg-black/80 border border-zinc-700 rounded-xl p-6 w-full max-w-2xl shadow-xl font-mono text-green-400">
        {lines.map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-2 whitespace-pre-wrap"
          >
            {line}
          </motion.p>
        ))}

        {lines.length === 7 && (
          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/lucy-kim04"
              target="_blank"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition"
            >
              GitHub
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="border border-green-600 text-green-400 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition"
            >
              이력서 보기
            </a>
            <a
              href="#contact"
              className="text-green-400 underline hover:text-white transition"
            >
              Contact →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));
