import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Play, Star, Code, Zap, Palette, Calculator, Globe, Database, Cpu, Smartphone } from 'lucide-react';

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
  const apps: App[] = [
    {
      id: 'react-playground',
      title: 'React 组件实验室',
      description: '在线编辑和预览 React 组件，支持实时编译和热更新，适合快速原型开发和组件测试。',
      category: '开发工具',
      tags: ['React', 'JavaScript', '在线编辑器'],
      demoUrl: '/apps/react-playground',
      githubUrl: 'https://github.com/username/react-playground',
      isNew: true,
      isFeatured: true,
      icon: <Code className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'css-generator',
      title: 'CSS 样式生成器',
      description: '可视化生成各种 CSS 效果，包括渐变、阴影、动画、边框等，支持实时预览和代码导出。',
      category: '设计工具',
      tags: ['CSS', '设计', '生成器'],
      demoUrl: '/apps/css-generator',
      githubUrl: 'https://github.com/username/css-generator',
      isFeatured: true,
      icon: <Palette className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'algorithm-visualizer',
      title: '算法可视化工具',
      description: '直观展示各种排序、搜索和图算法的执行过程，帮助理解算法原理和时间复杂度。',
      category: '教育工具',
      tags: ['算法', '可视化', '教育'],
      demoUrl: '/apps/algorithm-visualizer',
      githubUrl: 'https://github.com/username/algorithm-visualizer',
      icon: <Cpu className="w-8 h-8" />,
      gradient: 'from-green-500 to-teal-500'
    },
    {
      id: 'api-tester',
      title: 'API 接口测试器',
      description: '简洁的 REST API 测试工具，支持多种请求方法、请求头设置和响应格式化显示。',
      category: '开发工具',
      tags: ['API', '测试', 'HTTP'],
      demoUrl: '/apps/api-tester',
      githubUrl: 'https://github.com/username/api-tester',
      icon: <Globe className="w-8 h-8" />,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 'json-formatter',
      title: 'JSON 格式化工具',
      description: '在线 JSON 数据格式化、验证和美化工具，支持语法高亮和错误提示。',
      category: '实用工具',
      tags: ['JSON', '格式化', '验证'],
      demoUrl: '/apps/json-formatter',
      githubUrl: 'https://github.com/username/json-formatter',
      icon: <Database className="w-8 h-8" />,
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'color-palette',
      title: '配色方案生成器',
      description: '智能生成和谐的配色方案，支持多种色彩理论和导出格式，适合设计师使用。',
      category: '设计工具',
      tags: ['颜色', '设计', '调色板'],
      demoUrl: '/apps/color-palette',
      githubUrl: 'https://github.com/username/color-palette',
      isNew: true,
      icon: <Palette className="w-8 h-8" />,
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      id: 'unit-converter',
      title: '单位转换计算器',
      description: '支持长度、重量、温度、货币等多种单位的快速转换，界面简洁易用。',
      category: '实用工具',
      tags: ['计算器', '转换', '单位'],
      demoUrl: '/apps/unit-converter',
      githubUrl: 'https://github.com/username/unit-converter',
      icon: <Calculator className="w-8 h-8" />,
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'qr-generator',
      title: '二维码生成器',
      description: '快速生成各种类型的二维码，支持文本、URL、WiFi 密码等，可自定义样式和尺寸。',
      category: '实用工具',
      tags: ['二维码', '生成器', '工具'],
      demoUrl: '/apps/qr-generator',
      githubUrl: 'https://github.com/username/qr-generator',
      icon: <Smartphone className="w-8 h-8" />,
      gradient: 'from-gray-500 to-gray-700'
    },
    {
      id: 'performance-monitor',
      title: '性能监控面板',
      description: '实时监控网页性能指标，包括 FPS、内存使用、网络请求等，帮助优化应用性能。',
      category: '开发工具',
      tags: ['性能', '监控', '优化'],
      demoUrl: '/apps/performance-monitor',
      githubUrl: 'https://github.com/username/performance-monitor',
      icon: <Zap className="w-8 h-8" />,
      gradient: 'from-emerald-500 to-green-500'
    }
  ];

  const categories = ['全部', '开发工具', '设计工具', '实用工具', '教育工具'];
  const [selectedCategory, setSelectedCategory] = React.useState('全部');

  const filteredApps = selectedCategory === '全部' 
    ? apps 
    : apps.filter(app => app.category === selectedCategory);

  const featuredApps = apps.filter(app => app.isFeatured);

  return (
    <div className="min-h-screen py-8" style={{background: '#1a1a1a'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            应用工具集
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            探索各种实用的在线工具和应用，提升开发效率和工作体验
          </p>
        </div>

        {/* Featured Apps */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Star className="mr-2 text-yellow-500" size={24} />
            精选应用
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredApps.map((app) => (
              <div
                key={app.id}
                className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* New Badge */}
                {app.isNew && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      NEW
                    </span>
                  </div>
                )}

                <div className="relative p-6">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${app.gradient} rounded-xl text-white mb-4`}>
                    {app.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {app.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {app.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {app.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {app.demoUrl && (
                        <Link
                          to={app.demoUrl}
                          className="inline-flex items-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                        >
                          <Play size={14} className="mr-1" />
                          体验
                        </Link>
                      )}
                      {app.githubUrl && (
                        <a
                          href={app.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                        >
                          <Github size={14} className="mr-1" />
                          源码
                        </a>
                      )}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {app.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* All Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* New Badge */}
              {app.isNew && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    NEW
                  </span>
                </div>
              )}

              <div className="p-6">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${app.gradient} rounded-lg text-white mb-4`}>
                  {React.cloneElement(app.icon as React.ReactElement, { className: 'w-6 h-6' })}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {app.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {app.description}
                </p>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {app.demoUrl && (
                      <Link
                        to={app.demoUrl}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                      >
                        <Play size={14} className="mr-1" />
                        体验
                      </Link>
                    )}
                    {app.githubUrl && (
                      <a
                        href={app.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm font-medium"
                      >
                        <ExternalLink size={14} className="mr-1" />
                        源码
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            有想法？一起构建更多工具！
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            如果你有好的工具想法或者想要贡献代码，欢迎联系我或者提交 Pull Request
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <Github className="mr-2" size={18} />
              查看 GitHub
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              联系我
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;