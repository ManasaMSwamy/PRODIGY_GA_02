
import React from 'react';

interface ImageDisplayProps {
  imageUrl: string | null;
  isLoading: boolean;
  error: string | null;
  prompt: string;
}

const LoadingSkeleton: React.FC = () => (
  <div className="w-full aspect-square bg-slate-800 rounded-lg animate-pulse"></div>
);

const Placeholder: React.FC = () => (
  <div className="w-full aspect-square bg-slate-800/50 border-2 border-dashed border-slate-600 rounded-lg flex items-center justify-center p-4">
    <div className="text-center text-slate-500">
      <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <p className="mt-2 font-semibold">Your generated image will appear here</p>
      <p className="text-sm">Let your creativity flow!</p>
    </div>
  </div>
);

const ErrorDisplay: React.FC<{ message: string }> = ({ message }) => (
    <div className="w-full aspect-square bg-red-900/20 border-2 border-dashed border-red-500/50 rounded-lg flex items-center justify-center p-4">
        <div className="text-center text-red-400">
             <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="mt-2 font-semibold">Oops! Something went wrong.</p>
            <p className="text-sm mt-1 max-w-sm">{message}</p>
        </div>
    </div>
);

export const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, isLoading, error, prompt }) => {
  const renderContent = () => {
    if (isLoading) {
      return <LoadingSkeleton />;
    }
    if (error) {
      return <ErrorDisplay message={error} />;
    }
    if (imageUrl) {
      return (
        <img
          src={imageUrl}
          alt={prompt}
          className="w-full aspect-square object-cover rounded-lg shadow-2xl shadow-violet-900/20 transition-opacity duration-500 opacity-0 animate-fade-in"
          onLoad={(e) => (e.currentTarget.style.opacity = '1')}
        />
      );
    }
    return <Placeholder />;
  };

  return (
     <div className="relative w-full">
      <style>{`.animate-fade-in { animation: fadeIn 0.5s ease-in-out forwards; } @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }`}</style>
      {renderContent()}
     </div>
  );
};
