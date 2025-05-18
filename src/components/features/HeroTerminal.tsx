'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LINES = [
  '> ssh heejudev.dev',
  'Connecting...',
  'Connected ✅',
  'Welcome to 김희주의 포트폴리오',
  'Skills: Next.js · TypeScript · Tailwind · Supabase',
  'Featured: ArtistCompany 클론 프로젝트',
];

export default function HeroTerminal() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedLines((prev) => [...prev, LINES[i]]);
      i++;
      if (i >= LINES.length) clearInterval(interval);
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col justify-center items-center h-screen px-4">
      <div className="bg-black/80 border border-zinc-700 rounded-xl p-6 w-full max-w-2xl shadow-xl">
        {displayedLines.map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.3 }}
            className="mb-2 whitespace-pre-wrap"
          >
            {line}
          </motion.p>
        ))}

        {displayedLines.length === LINES.length && (
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
