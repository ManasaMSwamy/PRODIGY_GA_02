
import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

export const Header: React.FC = () => {
  return (
    <header className="w-full p-4 border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        <SparklesIcon className="w-8 h-8 text-violet-400" />
        <h1 className="text-3xl font-bold ml-3 bg-gradient-to-r from-violet-400 to-sky-400 text-transparent bg-clip-text">
          AI Image Generator
        </h1>
      </div>
    </header>
  );
};
