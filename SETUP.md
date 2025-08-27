# Dr-Banana Portfolio Website Setup

## 项目概述
这是一个使用React和TypeScript构建的个人作品集网站，包含个人简介、项目展示、简历和联系页面。

## 技术栈
- **React 18** - 前端框架
- **TypeScript** - 类型安全
- **Styled Components** - CSS-in-JS样式
- **Framer Motion** - 动画库
- **React Router** - 路由管理
- **React Icons** - 图标库

## 快速开始

### 前提条件
- Node.js (版本 16 或更高)
- npm 或 yarn

### 安装步骤

1. **克隆项目**
   ```bash
   git clone https://github.com/Dr-Banana/Dr-Banana.github.io.git
   cd Dr-Banana.github.io
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm start
   ```

4. **打开浏览器**
   访问 [http://localhost:3000](http://localhost:3000)

### Windows用户快速启动
双击运行 `start.bat` 文件，它会自动安装依赖并启动开发服务器。

## 项目结构

```
src/
├── components/          # 可复用组件
│   └── Header.tsx      # 导航栏组件
├── pages/              # 页面组件
│   ├── Home.tsx        # 首页
│   ├── Projects.tsx    # 项目展示页
│   ├── Resume.tsx      # 简历页
│   └── Contact.tsx     # 联系页
├── App.tsx             # 主应用组件
├── index.tsx           # 应用入口
└── index.css           # 全局样式
```

## 自定义内容

### 个人信息
在以下文件中更新您的个人信息：
- `src/pages/Home.tsx` - 首页个人介绍
- `src/pages/Resume.tsx` - 简历信息
- `src/pages/Contact.tsx` - 联系信息

### 项目展示
在 `src/pages/Projects.tsx` 中更新您的项目信息：
```typescript
const projects = [
  {
    id: 1,
    title: '项目名称',
    description: '项目描述',
    image: '🛒',
    category: 'frontend',
    tech: ['React', 'TypeScript'],
    github: 'GitHub链接',
    live: '在线演示链接'
  }
];
```

### 技能展示
在 `src/pages/Home.tsx` 中更新技能信息：
```typescript
const skills = [
  { name: '技能名称', level: 90 },
  // 更多技能...
];
```

## 部署到GitHub Pages

1. **构建生产版本**
   ```bash
   npm run build
   ```

2. **部署**
   ```bash
   npm run deploy
   ```

3. **配置GitHub Pages**
   - 在GitHub仓库设置中启用GitHub Pages
   - 选择 `gh-pages` 分支作为源

## 开发命令

- `npm start` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run test` - 运行测试
- `npm run deploy` - 部署到GitHub Pages

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 故障排除

### 常见问题

1. **依赖安装失败**
   ```bash
   npm cache clean --force
   npm install
   ```

2. **端口被占用**
   ```bash
   # 使用不同端口启动
   PORT=3001 npm start
   ```

3. **TypeScript错误**
   ```bash
   # 重新安装类型定义
   npm install @types/react @types/react-dom
   ```

## 贡献

欢迎提交Issue和Pull Request来改进这个项目！

## 许可证

MIT License 