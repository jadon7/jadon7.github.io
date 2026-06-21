# Neon Apex — Hover Racing

Neon Apex 是一个从零实现的 Three.js 悬浮赛车游戏，包含三圈竞速、五名 AI 对手、护盾、离子加速、补给、障碍、暂停/重开/胜负流程，以及桌面、手柄和移动触控输入。

生产构建位于仓库的 `hover-racer/` 目录，可直接作为静态页面部署。完整可维护源码随本 PR 一并提供。

## 本地运行

```bash
npm install
npm run dev
```

生产构建与验证：

```bash
npm test
npm run typecheck
npm run build
npm run verify:browser
```

## 操作

- `W / ↑`：加速
- `S / ↓`：制动
- `A D / ← →`：转向
- `Space`：离子加速
- `Shift`：空气制动
- `Esc / P`：暂停
- `R`：重开
- `M`：静音
- `Q`：切换高画质/性能画质

移动端使用屏幕上的左右、BRAKE、THRUST 和 BOOST 按钮。

## 安全

游戏不需要任何 Tripo、Gemini、ElevenLabs 或其他生成式 API 密钥。车辆、赛道、纹理、粒子和音效均在本地程序化生成。第三方密钥不得进入浏览器代码、静态资源或 Git 历史。

验证结果见 `QA_REPORT.md`。