export type AssetType = "banner" | "product" | "brand" | "service";

export type AssetStatus = "needed" | "ready" | "missing";

export type SiteAsset = {
  id: string;
  name: string;
  file: string;
  usage: string;
  section: string;
  type: AssetType;
  status: AssetStatus;
  recommendedSize: string;
  connected: boolean;
  fallbackFile?: string;
};

export const siteAssets: SiteAsset[] = [
  {
    id: "hero-desktop",
    name: "Hero desktop banner",
    file: "/images/banners/hero-jp-golf-desktop.jpg",
    usage: "首頁 Hero desktop 主視覺",
    section: "HeroSection",
    type: "banner",
    status: "needed",
    recommendedSize: "2400 x 1100px JPG/WebP",
    connected: true,
    fallbackFile: "/brand/hero-jp-golf-desktop.png",
  },
  {
    id: "hero-mobile",
    name: "Hero mobile banner",
    file: "/images/banners/hero-jp-golf-mobile.jpg",
    usage: "首頁 Hero mobile 主視覺",
    section: "HeroSection",
    type: "banner",
    status: "needed",
    recommendedSize: "1200 x 1600px JPG/WebP",
    connected: true,
    fallbackFile: "/brand/hero-jp-golf-mobile.png",
  },
  {
    id: "brand-story-japan-sourcing",
    name: "Brand story image",
    file: "/images/brand/brand-story-japan-sourcing.jpg",
    usage: "Brand Story 左側形象圖",
    section: "BrandStorySection",
    type: "brand",
    status: "needed",
    recommendedSize: "1400 x 900px JPG/WebP",
    connected: true,
    fallbackFile: "/brand/fuji-texture-placeholder.svg",
  },
  {
    id: "banner-new-clubs",
    name: "New clubs banner",
    file: "/images/banners/banner-new-clubs-desktop.jpg",
    usage: "新品球杆推廣 banner",
    section: "NewClubsPromo",
    type: "banner",
    status: "needed",
    recommendedSize: "1200 x 520px JPG/WebP",
    connected: true,
    fallbackFile: "/images/products/titleist-gt2-driver-main.webp",
  },
  {
    id: "banner-preowned-selected",
    name: "Preowned clubs banner",
    file: "/images/banners/banner-preowned-selected-desktop.jpg",
    usage: "二手精選推廣 banner",
    section: "PreownedPromo",
    type: "banner",
    status: "needed",
    recommendedSize: "1200 x 520px JPG/WebP",
    connected: true,
    fallbackFile: "/images/products/scotty-cameron-select-newport-2-main.webp",
  },
  {
    id: "product-titleist-gt2-driver",
    name: "Titleist GT2 Driver main",
    file: "/images/products/product-titleist-gt2-driver-main.jpg",
    usage: "Titleist GT2 Driver 商品主圖",
    section: "ProductCard / ProductDetail",
    type: "product",
    status: "needed",
    recommendedSize: "1200 x 1200px JPG/WebP transparent or clean background",
    connected: true,
    fallbackFile: "/images/products/titleist-gt2-driver-main.webp",
  },
  {
    id: "product-ping-g430-max-driver",
    name: "PING G430 MAX Driver main",
    file: "/images/products/product-ping-g430-max-driver-main.jpg",
    usage: "PING G430 MAX Driver 商品主圖",
    section: "ProductCard / ProductDetail",
    type: "product",
    status: "needed",
    recommendedSize: "1200 x 1200px JPG/WebP transparent or clean background",
    connected: true,
    fallbackFile: "/images/products/ping-g430-max-driver-main.webp",
  },
  {
    id: "product-taylormade-qi10-driver",
    name: "TaylorMade Qi10 Driver main",
    file: "/images/products/product-taylormade-qi10-driver-main.jpg",
    usage: "TaylorMade Qi10 Driver 商品主圖",
    section: "ProductCard / ProductDetail",
    type: "product",
    status: "needed",
    recommendedSize: "1200 x 1200px JPG/WebP transparent or clean background",
    connected: true,
    fallbackFile: "/images/products/taylormade-qi10-driver-main.webp",
  },
  {
    id: "product-jp-forged-irons-set",
    name: "JP Forged Irons Set main",
    file: "/images/products/product-jp-forged-irons-set-main.jpg",
    usage: "JP Forged Irons Set 商品主圖",
    section: "ProductCard / ProductDetail",
    type: "product",
    status: "needed",
    recommendedSize: "1200 x 1200px JPG/WebP transparent or clean background",
    connected: true,
    fallbackFile: "/images/products/jp-forged-irons-set-main.webp",
  },
  {
    id: "product-scotty-newport2",
    name: "Scotty Cameron Select Newport 2 main",
    file: "/images/products/product-scotty-newport2-main.jpg",
    usage: "Scotty Cameron Select Newport 2 商品主圖",
    section: "ProductCard / ProductDetail",
    type: "product",
    status: "needed",
    recommendedSize: "1200 x 1200px JPG/WebP transparent or clean background",
    connected: true,
    fallbackFile: "/images/products/scotty-cameron-select-newport-2-main.webp",
  },
  {
    id: "product-callaway-paradym-fairway-wood",
    name: "Callaway Paradym Fairway Wood main",
    file: "/images/products/product-callaway-paradym-fairway-wood-main.jpg",
    usage: "Callaway Paradym Fairway Wood 商品主圖",
    section: "ProductCard / ProductDetail",
    type: "product",
    status: "needed",
    recommendedSize: "1200 x 1200px JPG/WebP transparent or clean background",
    connected: true,
    fallbackFile: "/images/products/callaway-paradym-fairway-wood-main.webp",
  },
  {
    id: "product-xxio-12-iron-set",
    name: "XXIO 12 Iron Set main",
    file: "/images/products/product-xxio-12-iron-set-main.jpg",
    usage: "XXIO 12 Iron Set 商品主圖",
    section: "ProductCard / ProductDetail",
    type: "product",
    status: "needed",
    recommendedSize: "1200 x 1200px JPG/WebP transparent or clean background",
    connected: true,
    fallbackFile: "/images/products/xxio-12-iron-set-main.webp",
  },
  {
    id: "product-srixon-utility-hybrid",
    name: "Srixon Utility Hybrid main",
    file: "/images/products/product-srixon-utility-hybrid-main.jpg",
    usage: "Srixon Utility Hybrid 商品主圖",
    section: "ProductCard / ProductDetail",
    type: "product",
    status: "needed",
    recommendedSize: "1200 x 1200px JPG/WebP transparent or clean background",
    connected: true,
    fallbackFile: "/images/products/srixon-utility-hybrid-main.webp",
  },
  {
    id: "product-vokey-sm10-wedge",
    name: "Vokey SM10 Wedge main",
    file: "/images/products/product-vokey-sm10-wedge-main.jpg",
    usage: "Vokey SM10 Wedge 商品主圖",
    section: "ProductCard / ProductDetail",
    type: "product",
    status: "needed",
    recommendedSize: "1200 x 1200px JPG/WebP transparent or clean background",
    connected: true,
    fallbackFile: "/images/products/vokey-sm10-wedge-main.webp",
  },
  {
    id: "product-mizuno-pro-245-irons",
    name: "Mizuno Pro 245 Irons main",
    file: "/images/products/product-mizuno-pro-245-irons-main.jpg",
    usage: "Mizuno Pro 245 Irons 商品主圖",
    section: "ProductCard / ProductDetail",
    type: "product",
    status: "needed",
    recommendedSize: "1200 x 1200px JPG/WebP transparent or clean background",
    connected: true,
    fallbackFile: "/images/products/mizuno-pro-245-irons-main.webp",
  },
];

export const assetFallbacks = Object.fromEntries(
  siteAssets.flatMap((asset) => (asset.fallbackFile ? [[asset.file, asset.fallbackFile]] : [])),
) as Record<string, string>;

export function getAssetById(id: string) {
  return siteAssets.find((asset) => asset.id === id);
}

export function getAssetFallback(file: string) {
  return assetFallbacks[file];
}
