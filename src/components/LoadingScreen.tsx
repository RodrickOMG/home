import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        const increment = Math.random() * 12 + 3;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden" style={{backgroundColor: '#111'}}>
      {/* 主要内容 */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center items-center">
            <div className="relative p-4 rounded-full backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500" style={{background: 'rgba(255, 255, 255, 0.1)'}}>
              <img
                src="/images/logo.png"
                alt="Daiverse Logo"
                className="w-20 h-20 object-contain transition-all duration-500 hover:scale-110 drop-shadow-lg"
                draggable={false}
              />
              {/* 发光效果 */}
              <div className="absolute inset-0 rounded-full animate-pulse" style={{
                background: 'linear-gradient(45deg, rgba(255, 123, 84, 0.3), rgba(74, 144, 226, 0.3))',
                filter: 'blur(8px)',
                zIndex: -1
              }}></div>
            </div>
        </div>

        {/* 标题 */}
        <h1 className="text-5xl font-bold mb-3 text-white transition-all duration-300 hover:text-white/90" style={{fontFamily: '"HarmonyOS Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'}}>
          Daiverse
        </h1>
        <p className="mb-8 text-xl text-white/80 transition-all duration-300 hover:text-white/90">
          常保飢渴求知，常存虛懷若愚
        </p>

        {/* 进度条容器 */}
        <div className="w-64 mx-auto">
          <div className="backdrop-blur-sm rounded-2xl p-6 border" style={{background: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'}}>
            {/* 进度条 */}
            <div className="w-full rounded-full h-2 mb-4" style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
              <div 
                className="h-2 rounded-full transition-all duration-300 ease-out"
                style={{ 
                  width: `${Math.min(progress, 100)}%`, 
                  background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
                }}
              />
            </div>
            <p className="text-white/80 text-lg font-medium">
              {Math.round(progress)}%
            </p>
          </div>
        </div>

        {/* 加载文字 */}
        <div className="mt-6">
          <p className="text-white/60 text-sm animate-pulse">
            正在加载...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;