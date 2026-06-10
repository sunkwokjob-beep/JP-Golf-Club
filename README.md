# 極品高爾夫 / JP Golf Club

JP Golf Club 是一個面向香港及中國市場的高級高爾夫電商 MVP，主打日本直採全新及二手高爾夫球杆。

## Tech Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS v4
- lucide-react icons
- Mock product data

## Local Development

PowerShell 建議使用 `.cmd` shim，避免 Windows execution policy 擋住 `.ps1`：

```powershell
cd "C:\Users\r\Documents\新裝電腦\jp-golf-club"
pnpm.cmd dev
```

常用檢查：

```powershell
pnpm.cmd lint
pnpm.cmd build
```

本機預覽：

```text
http://localhost:3000
```

## MVP Scope

- 靜態高保真網站
- 繁體中文為主
- 首頁、商品列表、商品詳情、品牌、關於、服務、聯絡、會員 mockup、購物車 mockup
- 商品資料使用 `data/products.ts`
- 暫不接真實付款、庫存、會員或後台

## Future Integrations

- CMS: Sanity / Contentful / Strapi
- Commerce: Shopify products and variants
- Payments: Stripe, 支付寶, 微信支付
- Inquiry flow: WhatsApp 商品查詢連結
- i18n: 簡體中文及英文
