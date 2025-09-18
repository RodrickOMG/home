import React, { useState, useEffect } from 'react';
import { Github, Youtube, Mail, BookOpen, Layers, Globe, Music } from 'lucide-react';

// 添加动画样式
const animationStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.8) translateY(20px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @keyframes pageEnter {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(20px);
      filter: blur(2px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
      filter: blur(0px);
    }
  }


  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    opacity: 0;
  }

  .animate-slide-in-left {
    animation: slideInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    opacity: 0;
  }

  .animate-scale-in {
    animation: scaleIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    opacity: 0;
  }

  .animate-page-enter {
    animation: pageEnter 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    opacity: 0;
  }

  .animate-float {
    animation: float 4s ease-in-out infinite;
  }
`;

interface HomeProps {
  hitokoto: {
    text: string;
    author: string;
    from: string;
  };
}

const Home: React.FC<HomeProps> = ({ hitokoto }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [weather, setWeather] = useState<any>(null);

  // 获取天气
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch('https://wttr.in/Chongqing?format=j1&lang=zh');
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Could not fetch weather", error);
      }
    };
    fetchWeather();
  }, []);
  
  // 检查背景图片是否存在
  useEffect(() => {
    const checkBackgroundImage = async () => {
      try {
        const response = await fetch('/images/background.jpg');
        if (response.ok) {
          setBackgroundImage('/images/background.jpg');
        }
      } catch (error) {
        console.log('背景图片未找到，使用默认渐变背景');
      }
    };
    checkBackgroundImage();
  }, []);

  // 更新时间
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);


  // 页面加载动画
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      document.documentElement.style.overflow = 'auto';
      // 启动进入动画序列
      setTimeout(() => {
        setIsAnimating(false);
      }, 100);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const backgroundStyle = {
    ...(backgroundImage ? {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    } : {
      background: 'linear-gradient(135deg, #ff7b54 0%, #ff9a76 15%, #ffad7a 30%, #4a90e2 60%, #357abd 80%, #2c5aa0 100%)',
    })
  };

  return (
    <>
      <style>{animationStyles}</style>
      <div
        className={`min-h-screen relative overflow-hidden transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${isAnimating ? '' : 'animate-page-enter'}`}
        style={backgroundStyle}>
        {/* 背景遮罩层 - 当使用背景图片时提供半透明遮罩 */}
        {backgroundImage && (
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        )}
        

        {/* 主容器 */}
        {isLoaded && (
          <div className="relative z-10 min-h-screen flex items-center justify-center p-12 pb-28 sm:pb-24">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 左侧区域 - Logo和标题 */}
            <div className="space-y-8">
              {/* Logo 和标题 */}
              <div className={`${!isAnimating ? 'animate-scale-in' : ''}`} style={{animationDelay: '0.3s'}}>
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 flex items-center justify-center mr-4 transition-all duration-500 hover:scale-105 hover:rotate-3 animate-float cursor-pointer group overflow-hidden">
                    <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h1 className="text-5xl font-bold text-white mb-2 transition-all duration-300 hover:text-white/90 hover:scale-[1.02] cursor-default" style={{fontFamily: '"HarmonyOS Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'}}>Daiverse</h1>
                    <p className="text-xl text-white/80 transition-all duration-300 hover:text-white/90">常保飢渴求知，常存虛懷若愚</p>
                  </div>
                </div>
              </div>

              {/* 一言卡片 */}
              <div className={`${!isAnimating ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.5s'}}>
                <div className="backdrop-blur-sm rounded-2xl p-6 border transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group overflow-hidden" style={{background: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.15)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'}}>
                  <div className="text-white">
                    <div className="text-3xl mb-3 text-white/60 quote-font transition-all duration-300 group-hover:text-white/80">"</div>
                    <p className="text-xl leading-relaxed mb-4 text-white/90 quote-font transition-all duration-300 group-hover:text-white" style={{lineHeight: '1.8', letterSpacing: '0.5px'}}>
                      {hitokoto.text}
                    </p>
                    <div className="text-right">
                      <span className="text-sm text-white/70 quote-font transition-all duration-300 group-hover:text-white/90">「{hitokoto.author}」</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 社交链接 */}
              <div className={`flex space-x-4 ${!isAnimating ? 'animate-scale-in' : ''}`} style={{animationDelay: '0.7s'}}>
                <a href="https://github.com/RodrickOMG" target="_blank" rel="noopener noreferrer" className="w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border hover:scale-105 hover:rotate-6 hover:shadow-xl group overflow-hidden" style={{background: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.15)', color: 'white', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'}}>
                  <Github className="w-5 h-5 transition-all duration-300 group-hover:scale-105" />
                </a>
                <a href="mailto:rodrickomg999@gmail.com" className="w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border hover:scale-105 hover:rotate-6 hover:shadow-xl group overflow-hidden" style={{background: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.15)', color: 'white', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'}}>
                  <Mail className="w-5 h-5 transition-all duration-300 group-hover:scale-105" />
                </a>
                <a href="https://space.bilibili.com/6487450" target="_blank" rel="noopener noreferrer" className="w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border hover:scale-105 hover:rotate-6 hover:shadow-xl group overflow-hidden" style={{background: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.15)', color: 'white', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'}}>
                  <img src="/images/icon/bilibili.png" alt="Bilibili" className="w-5 h-5 transition-all duration-300 group-hover:scale-105" />
                </a>
              </div>
            </div>

            {/* 右侧区域 */}
            <div className="space-y-8">
              {/* 时间区域 */}
              <div className={`text-center ${!isAnimating ? 'animate-slide-in-left' : ''}`} style={{animationDelay: '0.4s'}}>
                <div className="backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group overflow-hidden" style={{background: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.15)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'}}>
                  {/* 日期显示 */}
                  <div className="text-white text-xl mb-4 font-medium transition-all duration-300 group-hover:text-white/90">
                    {currentTime.getFullYear()}年{String(currentTime.getMonth() + 1).padStart(2, '0')}月{String(currentTime.getDate()).padStart(2, '0')}日 {currentTime.toLocaleDateString('zh-CN', { weekday: 'long' })}
                  </div>

                  {/* 数字时钟显示 */}
                  <div className="text-white text-7xl font-mono font-light mb-4 tracking-wider transition-all duration-300 group-hover:scale-[1.05] group-hover:text-shadow-lg" style={{fontFamily: 'Monaco, "Lucida Console", monospace', textShadow: '0 0 20px rgba(255, 255, 255, 0.3)'}}>
                    {String(currentTime.getHours()).padStart(2, '0')}:{String(currentTime.getMinutes()).padStart(2, '0')}:{String(currentTime.getSeconds()).padStart(2, '0')}
                  </div>

                  {/* 天气信息 */}
                  <div className="text-white/80 text-base transition-all duration-300 group-hover:text-white/90">
                    {weather ? (
                      <>
                        重庆市 {weather.current_condition[0].lang_zh[0].value} {weather.current_condition[0].temp_C}°C
                      </>
                    ) : (
                      '天气数据加载中'
                    )}
                  </div>
                </div>
              </div>

              {/* 功能卡片网格 */}
              <div className="grid grid-cols-2 gap-6 p-2">

                {/* 博客卡片 */}
                <div className={`backdrop-blur-sm rounded-2xl p-4 border hover:scale-105 hover:shadow-2xl hover:rotate-1 transition-all duration-500 cursor-pointer group overflow-hidden ${!isAnimating ? 'animate-scale-in' : ''}`} style={{background: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.15)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)', animationDelay: '0.6s'}}>
                  <BookOpen className="w-6 h-6 mb-2 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 text-white" />
                  <h3 className="font-medium mb-1 text-white text-sm transition-all duration-300 group-hover:text-white/90 group-hover:scale-105 origin-left">博客</h3>
                  <p className="text-xs text-white/70 transition-all duration-300 group-hover:text-white/80 group-hover:scale-105 origin-left">技术分享</p>
                </div>

                {/* 应用卡片 */}
                <div className={`backdrop-blur-sm rounded-2xl p-4 border hover:scale-105 hover:shadow-2xl hover:-rotate-1 transition-all duration-500 cursor-pointer group overflow-hidden ${!isAnimating ? 'animate-scale-in' : ''}`} style={{background: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.15)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)', animationDelay: '0.7s'}}>
                  <Layers className="w-6 h-6 mb-2 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 text-white" />
                  <h3 className="font-medium mb-1 text-white text-sm transition-all duration-300 group-hover:text-white/90 group-hover:scale-105 origin-left">应用</h3>
                  <p className="text-xs text-white/70 transition-all duration-300 group-hover:text-white/80 group-hover:scale-105 origin-left">日常应用</p>
                </div>

                {/* 网址集卡片 */}
                <div className={`backdrop-blur-sm rounded-2xl p-4 border hover:scale-105 hover:shadow-2xl hover:rotate-1 transition-all duration-500 cursor-pointer group overflow-hidden ${!isAnimating ? 'animate-scale-in' : ''}`} style={{background: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.15)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)', animationDelay: '0.8s'}}>
                  <Globe className="w-6 h-6 mb-2 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 text-white" />
                  <h3 className="font-medium mb-1 text-white text-sm transition-all duration-300 group-hover:text-white/90 group-hover:scale-105 origin-left">网址集</h3>
                  <p className="text-xs text-white/70 transition-all duration-300 group-hover:text-white/80 group-hover:scale-105 origin-left">常用链接</p>
                </div>

                {/* 音乐卡片 */}
                <div className={`backdrop-blur-sm rounded-2xl p-4 border hover:scale-105 hover:shadow-2xl hover:-rotate-1 transition-all duration-500 cursor-pointer group overflow-hidden ${!isAnimating ? 'animate-scale-in' : ''}`} style={{background: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.15)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)', animationDelay: '0.9s'}}>
                  <Music className="w-6 h-6 mb-2 group-hover:scale-105 group-hover:rotate-6 transition-all duration-300 text-white" />
                  <h3 className="font-medium mb-1 text-white text-sm transition-all duration-300 group-hover:text-white/90 group-hover:scale-105 origin-left">音乐</h3>
                  <p className="text-xs text-white/70 transition-all duration-300 group-hover:text-white/80 group-hover:scale-105 origin-left">在线播放</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}

        {/* 底部版权信息 */}
        {isLoaded && (
          <div
            className={`absolute bottom-4 sm:bottom-6 inset-x-0 flex justify-center px-4 sm:px-8 ${!isAnimating ? 'animate-fade-in-up' : ''}`}
            style={{animationDelay: '1.0s', zIndex: 20}}
          >
            <div className="backdrop-blur-sm rounded-xl p-3 sm:p-4 border text-center max-w-full" style={{background: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.1)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'}}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-white/70 text-xs sm:text-xs transition-all duration-300 hover:text-white/80">
                <span className="text-center">Copyright © 2025 Rodrick</span>
                <span className="hidden sm:inline">•</span>
                <span className="text-center">Made by Daiverse</span>
                <span className="hidden sm:inline">•</span>
                <a
                  href="https://beian.miit.gov.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/90 transition-all duration-300 cursor-pointer text-center break-all"
                >
                  渝ICP备2021013019号-1
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;