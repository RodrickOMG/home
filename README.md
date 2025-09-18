# Daiverse

🌟 基于 Vite 构建的现代化个人主页，集成了多种实用功能和优雅的动画效果

## ✨ 项目特性

### 🎯 核心功能
- **🏠 首页**: 实时时钟显示、天气信息、一言展示、社交链接导航
- **🛠️ 应用工具集**: 在线工具展示、精选应用推荐、分类浏览

### 🎨 用户体验
- 🚀 使用 Vite 快速开发和构建
- ⚡ 现代化 React 19 与 TypeScript 确保类型安全
- 🎨 使用 Tailwind CSS 构建美观响应式界面
- 🧭 React Router DOM 实现流畅的客户端路由
- 📱 完全响应式设计，支持桌面端和移动端
- ✨ 丰富的动画效果和交互动画

### 🔧 技术特性
- **Loading 动画**: 优雅的启动加载动画
- **背景切换**: 支持自定义背景图片和渐变背景
- **实时数据**: 集成第三方 API 提供实时信息
- **现代化架构**: 组件化开发，代码模块化组织

## 🛠️ 技术栈

### 前端框架
- **React 19**: 最新版本的 React，支持并发特性
- **TypeScript**: 提供类型安全和更好的开发体验
- **Vite**: 快速的构建工具，支持热重载

### 样式与 UI
- **Tailwind CSS**: 实用优先的 CSS 框架
- **HarmonyOS Sans**: 优雅的中文字体
- **Lucide React**: 现代化的图标库

### 路由与状态
- **React Router DOM**: 客户端路由管理
- **React Hooks**: 现代化的状态管理

### 开发工具
- **ESLint**: 代码质量检查
- **PostCSS**: CSS 处理工具
- **Autoprefixer**: CSS 浏览器兼容性处理

## 📡 API 集成

项目集成了多个第三方 API 提供实时数据服务：

### 🌤️ 天气 API
- **服务商**: [wttr.in](https://wttr.in)
- **接口地址**: `https://wttr.in/Chongqing?format=j1&lang=zh`
- **功能**: 获取重庆市实时天气信息
- **数据格式**: JSON
- **更新频率**: 页面加载时获取
- **使用位置**: 首页时钟区域显示当前天气和温度

```json
{
  "current_condition": [
    {
      "lang_zh": [{"value": "晴"}],
      "temp_C": "25"
    }
  ]
}
```

### 📝 一言 API
- **服务商**: [Hitokoto](https://hitokoto.cn)
- **接口地址**: `https://v1.hitokoto.cn/`
- **功能**: 获取随机名言警句
- **数据格式**: JSON
- **更新频率**: 每次页面刷新
- **使用位置**: 首页展示随机一言

```json
{
  "hitokoto": "生命如意志永存，青春永远年轻。",
  "from": "安妮七旬"
}
```

### 🔄 API 错误处理
- 网络请求失败时显示默认内容
- 天气数据获取失败显示"天气数据加载中"
- 一言获取失败显示预设文案

## 🚀 快速开始

### 环境要求

- **Node.js**: >= 16.0.0
- **包管理器**: npm 或 yarn 或 pnpm
- **浏览器**: 支持 ES6+ 的现代浏览器

### 安装步骤

```bash
# 1. 克隆仓库
git clone <repository-url>
cd daiverse

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev

# 4. 访问应用
# 浏览器自动打开 http://localhost:5173
```

### 可用脚本

```bash
# 开发环境
npm run dev          # 启动开发服务器
npm run preview      # 预览生产构建

# 构建
npm run build        # 构建生产版本

# 代码质量
npm run lint         # 运行 ESLint 检查
```

## 📁 项目结构

```
src/
├── components/           # 可复用组件
│   ├── LoadingScreen.tsx # 启动加载动画组件
│   └── Navigation.tsx    # 导航栏组件
├── pages/               # 页面组件
│   ├── Home.tsx         # 首页
│   └── Apps.tsx         # 应用工具集页面
├── data/                # 静态数据（预留）
├── styles/              # 样式文件
│   └── fonts.css        # 字体样式
├── assets/              # 静态资源
├── App.tsx              # 应用主组件
├── main.tsx             # 应用入口
└── index.css            # 全局样式

public/
├── images/              # 图片资源
│   ├── background.jpg   # 背景图片
│   ├── logo.png         # 网站Logo
│   └── icon/            # 图标资源
├── fonts/               # 字体文件
└── favicon.png          # 网站图标
```

### 🏗️ 架构说明

- **组件化设计**: 每个页面都是独立的组件，易于维护和扩展
- **路由管理**: 使用 React Router 实现多页面应用
- **状态管理**: 利用 React Hooks 进行局部状态管理
- **样式组织**: 使用 Tailwind CSS 的原子化 CSS 设计
- **API 集成**: 封装第三方 API 调用，提供错误处理

## 🎯 页面功能详解

### 🏠 首页 (Home)
- **实时时钟**: 显示当前日期时间
- **天气显示**: 集成 wttr.in API 显示重庆天气
- **一言展示**: 随机显示名言警句
- **社交链接**: GitHub、Bilibili、邮箱等链接
- **功能卡片**: 快速导航到应用等页面

### 🛠️ 应用工具集 (Apps)
- **工具展示**: 各种在线工具的介绍和链接
- **精选应用**: 高亮显示推荐工具
- **分类浏览**: 支持按功能类别筛选工具
- **新工具标记**: 新增工具的视觉标识

## 🔧 自定义配置

### 背景图片设置
将自定义背景图片放置在 `public/images/background.jpg` 替换默认图片

### 天气城市修改
在 `src/pages/Home.tsx` 中修改天气 API 的城市参数：

```typescript
const response = await fetch('https://wttr.in/YOUR_CITY?format=j1&lang=zh');
```

### 社交链接更新
在 `src/pages/Home.tsx` 中更新社交媒体链接

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来改进这个项目！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

