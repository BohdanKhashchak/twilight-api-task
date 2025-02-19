'use client';
import { useState } from 'react';
import Input from './components/Input';

export default function Home() {
  const [searchInput, setSearchInput] = useState<string>('');

  return (
    <div className="grid sm:grid-cols-[1fr] lg:grid-cols-[390px_1fr] items-start justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="w-[100%]">
        <Input searchInput={searchInput} setSearchInput={setSearchInput} />
        <button className="px-4 w-full py-2 mt-[10px] font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none transition duration-300">
          Search
        </button>
      </div>
    </div>
  );
}
