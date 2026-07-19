# 个人科研主页

一个使用纯 HTML、CSS 和 JavaScript 构建的响应式个人科研主页，无需安装任何框架或依赖。

## 本地运行

最简单的方式是直接双击 `index.html`，浏览器会打开网站。

若本机已安装 Python，也可以在项目目录运行：

```powershell
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 修改个人信息

在 `index.html` 中搜索并替换以下示例内容：

- 姓名：`李明远`
- 邮箱：`mingyuan.li@example.com`
- GitHub：`github.com/mingyuan-li`
- 地址、项目数据、研究简介

如需替换首页图片，将新图片放入 `assets` 文件夹，并修改 `index.html` 中 `assets/research-visual.svg` 的路径即可。

## 部署

### GitHub Pages

1. 将整个项目推送到 GitHub 仓库。
2. 进入仓库 `Settings` → `Pages`。
3. 在 `Build and deployment` 中选择 `Deploy from a branch`。
4. 选择 `main` 分支和 `/ (root)` 目录并保存。
5. 等待片刻后通过 GitHub 提供的网址访问。

### Netlify / Vercel

可直接拖入项目文件夹，或连接 GitHub 仓库。该项目无需构建命令，发布目录填写项目根目录即可。
