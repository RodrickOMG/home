import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Play, Star, Code, Zap, Palette, Calculator, Globe, Database, Cpu, Smartphone, BookOpen, Clock, ArrowLeft, Home } from 'lucide-react';

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
`;

interface App {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  isNew?: boolean;
  isFeatured?: boolean;
  icon: React.ReactNode;
  gradient: string;
}

const Apps: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

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

  // 页面加载动画
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    const animationTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 400);

    return () => {
      clearTimeout(timer);
      clearTimeout(animationTimer);
    };
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

  const apps: App[] = [
    {
      id: 'wechat-reading-assistant',
      title: '微信读书助手',
      description: '自动化管理微信读书，支持自动签到、阅读进度统计、书架管理等功能，提升阅读体验。',
      category: '个人应用',
      tags: [],
      demoUrl: 'https://reading.daiverse.com',
      githubUrl: 'https://github.com/RodrickOMG/wechat-reading-assistant',
      isNew: true,
      isFeatured: true,
      icon: <BookOpen className="w-8 h-8" />,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'dify-task-manager',
      title: 'Dify定时任务管理',
      description: '基于Dify平台的智能任务调度系统，支持定时执行、条件触发、工作流编排等企业级功能。',
      category: '个人应用',
      tags: [],
      demoUrl: 'https://dify-tasks.daiverse.com',
      githubUrl: 'https://github.com/RodrickOMG/dify-task-manager',
      isNew: true,
      isFeatured: true,
      icon: <Clock className="w-8 h-8" />,
      gradient: 'from-purple-500 to-indigo-500'
    }
  ];

  const categories = ['全部', '个人应用'];
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const filteredApps = selectedCategory === '全部' 
    ? apps 
    : apps.filter(app => app.category === selectedCategory);

  const featuredApps = apps.filter(app => app.isFeatured);

  return (
    <>
      <style>{animationStyles}</style>
      <div
        className={`min-h-screen relative overflow-hidden transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={backgroundStyle}
      >
        {/* 背景遮罩层 */}
        {backgroundImage && (
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        )}

        {/* 主容器 */}
        {isLoaded && (
          <div className="relative z-10 min-h-screen p-8">
            <div className="max-w-7xl mx-auto">
              {/* 导航栏 */}
              <div className={`flex items-center mb-8 ${!isAnimating ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.1s'}}>
                <Link
                  to="/"
                  className="backdrop-blur-sm rounded-full p-3 border transition-all duration-300 hover:scale-105 hover:shadow-xl group mr-4"
                  style={{background: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.15)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'}}
                >
                  <ArrowLeft className="w-5 h-5 text-white transition-all duration-300 group-hover:scale-105" />
                </Link>
                <div className="backdrop-blur-sm rounded-full px-4 py-2 border transition-all duration-300"
                     style={{background: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.15)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'}}>
                  <span className="text-white text-sm font-medium">我的应用</span>
                </div>
              </div>

              {/* Header */}
              <div className={`text-center mb-12 ${!isAnimating ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
                <h1 className="text-5xl font-bold text-white mb-4" style={{fontFamily: '"HarmonyOS Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'}}>
                  我的应用
                </h1>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                  探索各种实用的在线工具和应用，提升开发效率和工作体验
                </p>
              </div>

              {/* Featured Apps */}
              <div className={`mb-12 ${!isAnimating ? 'animate-slide-in-left' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                  <Star className="mr-3 text-yellow-400" size={28} />
                  精选应用
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredApps.map((app, index) => (
                    <div
                      key={app.id}
                      className={`backdrop-blur-sm rounded-2xl border transition-all duration-500 hover:scale-105 hover:shadow-2xl group overflow-hidden ${!isAnimating ? 'animate-scale-in' : 'opacity-0'}`}
                      style={{
                        background: 'rgba(0, 0, 0, 0.3)',
                        borderColor: 'rgba(255, 255, 255, 0.15)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                        animationDelay: `${0.4 + index * 0.1}s`
                      }}
                    >
                      {/* New Badge */}
                      {app.isNew && (
                        <div className="absolute top-4 right-4 z-10">
                          <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                            NEW
                          </span>
                        </div>
                      )}

                      <div className="relative p-6">
                        {/* Icon */}
                        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${app.gradient} rounded-xl text-white mb-4 transition-all duration-300 group-hover:scale-110`}>
                          {app.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-3 transition-all duration-300 group-hover:text-white/90">
                          {app.title}
                        </h3>

                        {/* Description */}
                        <p className="text-white/80 text-sm mb-4 line-clamp-3 leading-relaxed">
                          {app.description}
                        </p>


                        {/* Actions */}
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-3">
                            {app.demoUrl && (
                              <a
                                href={app.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 backdrop-blur-sm rounded-lg border transition-all duration-300 hover:scale-105 hover:shadow-lg text-white"
                                style={{background: 'rgba(59, 130, 246, 0.3)', borderColor: 'rgba(59, 130, 246, 0.5)'}}
                              >
                                <ExternalLink size={14} className="mr-2" />
                                访问
                              </a>
                            )}
                            {app.githubUrl && (
                              <a
                                href={app.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 backdrop-blur-sm rounded-lg border transition-all duration-300 hover:scale-105 hover:shadow-lg text-white"
                                style={{background: 'rgba(107, 114, 128, 0.3)', borderColor: 'rgba(107, 114, 128, 0.5)'}}
                              >
                                <Github size={14} className="mr-2" />
                                源码
                              </a>
                            )}
                          </div>
                          <span className="text-xs text-white/60 backdrop-blur-sm rounded-full px-3 py-1" style={{background: 'rgba(255, 255, 255, 0.1)'}}>
                            {app.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div className={`mb-12 ${!isAnimating ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.7s'}}>
                <div className="flex flex-wrap justify-center gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm border ${
                        selectedCategory === category
                          ? 'text-white shadow-lg scale-105'
                          : 'text-white/70 hover:text-white hover:scale-105'
                      }`}
                      style={{
                        background: selectedCategory === category
                          ? 'rgba(59, 130, 246, 0.4)'
                          : 'rgba(0, 0, 0, 0.3)',
                        borderColor: selectedCategory === category
                          ? 'rgba(59, 130, 246, 0.6)'
                          : 'rgba(255, 255, 255, 0.15)',
                        boxShadow: selectedCategory === category
                          ? '0 8px 32px rgba(59, 130, 246, 0.3)'
                          : '0 8px 32px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* All Apps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredApps.map((app, index) => (
                  <div
                    key={app.id}
                    className={`backdrop-blur-sm rounded-2xl border transition-all duration-500 hover:scale-105 hover:shadow-2xl group overflow-hidden ${!isAnimating ? 'animate-scale-in' : 'opacity-0'}`}
                    style={{
                      background: 'rgba(0, 0, 0, 0.3)',
                      borderColor: 'rgba(255, 255, 255, 0.15)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                      animationDelay: `${0.8 + index * 0.05}s`
                    }}
                  >
                    {/* New Badge */}
                    {app.isNew && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                          NEW
                        </span>
                      </div>
                    )}

                    <div className="p-6">
                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${app.gradient} rounded-lg text-white mb-4 transition-all duration-300 group-hover:scale-110`}>
                        {React.cloneElement(app.icon as React.ReactElement, { className: 'w-6 h-6' })}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-2 transition-all duration-300 group-hover:text-white/90">
                        {app.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/70 text-sm mb-4 line-clamp-2 leading-relaxed">
                        {app.description}
                      </p>


                      {/* Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          {app.demoUrl && (
                            <a
                              href={app.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-all duration-300"
                            >
                              <ExternalLink size={14} className="mr-1" />
                              访问
                            </a>
                          )}
                          {app.githubUrl && (
                            <a
                              href={app.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-white/60 hover:text-white/80 text-sm font-medium transition-all duration-300"
                            >
                              <Github size={14} className="mr-1" />
                              源码
                            </a>
                          )}
                        </div>
                        <span className="text-xs text-white/50">
                          {app.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className={`mt-16 backdrop-blur-sm rounded-2xl p-8 text-center border ${!isAnimating ? 'animate-fade-in-up' : 'opacity-0'}`}
                   style={{
                     background: 'rgba(0, 0, 0, 0.4)',
                     borderColor: 'rgba(255, 255, 255, 0.15)',
                     boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                     animationDelay: '1.2s'
                   }}>
                <h3 className="text-2xl font-bold text-white mb-4">
                  有想法？一起构建更多工具！
                </h3>
                <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                  如果你有好的工具想法或者想要贡献代码，欢迎联系我或者提交 Pull Request
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://github.com/RodrickOMG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 backdrop-blur-sm rounded-lg border transition-all duration-300 hover:scale-105 hover:shadow-lg text-white"
                    style={{background: 'rgba(107, 114, 128, 0.3)', borderColor: 'rgba(107, 114, 128, 0.5)'}}
                  >
                    <Github className="mr-2" size={18} />
                    查看 GitHub
                  </a>
                  <Link
                    to="/"
                    className="inline-flex items-center px-6 py-3 backdrop-blur-sm rounded-lg border transition-all duration-300 hover:scale-105 hover:shadow-lg text-white"
                    style={{background: 'rgba(59, 130, 246, 0.3)', borderColor: 'rgba(59, 130, 246, 0.5)'}}
                  >
                    <Home className="mr-2" size={18} />
                    返回首页
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Apps;