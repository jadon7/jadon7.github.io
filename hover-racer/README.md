# Neon Apex — Hover Racing

可直接部署的 Three.js 悬浮赛车游戏。打开本目录的 `index.html` 即可加载；GitHub Pages 合并后访问 `/hover-racer/`。

## 本地运行

```bash
npm install
npm run serve
```

打开 `http://127.0.0.1:5188/hover-racer/`；也可以在本目录运行静态服务器后直接打开根路径。

## 测试

```bash
npm test
node --check core.js
node --check audio.js
node --check game.js
```

浏览器验证可通过 `?qa=1&quality=balanced` 启用只读诊断与 QA 动作。`quality` 可设为 `balanced` 或 `high`。

## 操作

- `W / ↑` 加速，`S / ↓` 制动
- `A D / ← →` 转向
- `Space` 离子加速，`Shift` 空气制动
- `Esc / P` 暂停，`R` 重开，`M` 静音，`Q` 切换画质
- 移动端使用屏幕上的左右、BRAKE、THRUST、BOOST

Three.js 锁定到 0.184.0，并通过 jsDelivr import map 加载。游戏运行不需要任何生成式 API 密钥。