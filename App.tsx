
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { PromptInput } from './components/PromptInput';
import { ImageDisplay } from './components/ImageDisplay';
import { Footer } from './components/Footer';
import { generateImageFromPrompt } from './services/geminiService';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateImage = useCallback(async () => {
    if (!prompt || isLoading) return;

    setIsLoading(true);
    setError(null);
    setImageUrl(null);

    try {
      const url = await generateImageFromPrompt(prompt);
      setImageUrl(url);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 flex flex-col font-sans">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4 w-full">
        <div className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-center lg:text-left text-slate-100">Describe Your Vision</h2>
            <PromptInput
              prompt={prompt}
              setPrompt={setPrompt}
              onGenerate={handleGenerateImage}
              isLoading={isLoading}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <ImageDisplay
              imageUrl={imageUrl}
              isLoading={isLoading}
              error={error}
              prompt={prompt}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
