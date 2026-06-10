import { FileImage, ImageIcon, Layers3, PackageSearch, Sparkles } from "lucide-react";
import { AdminAssetManager } from "@/components/admin/AdminAssetManager";
import { AdminStatCard } from "@/components/admin/AdminStatCard";
import { siteAssets } from "@/data/assets";

export default function AdminAssetsPage() {
  const bannerCount = siteAssets.filter((asset) => asset.type === "banner").length;
  const productCount = siteAssets.filter((asset) => asset.type === "product").length;
  const brandServiceCount = siteAssets.filter((asset) => asset.type === "brand" || asset.type === "service").length;
  const connectedCount = siteAssets.filter((asset) => asset.connected).length;
  const pendingCount = siteAssets.filter((asset) => asset.status !== "ready").length;

  return (
    <div className="space-y-7">
      <div className="rounded-lg border border-champagne-gold/25 bg-white/82 p-8 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-champagne-gold">Asset Center</p>
        <h1 className="mt-2 text-3xl font-semibold text-jp-green-dark">圖片素材管理中心</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-charcoal/62">
          目前素材由 public/images 資料夾管理，正式上線前可再接 Cloudinary / Supabase Storage / CMS。
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <AdminStatCard label="素材總數" value={siteAssets.length} helper="第一批展示素材" icon={<FileImage size={20} />} />
        <AdminStatCard label="Banner 數量" value={bannerCount} helper="Hero 與推廣 banner" icon={<ImageIcon size={20} />} />
        <AdminStatCard label="商品圖數量" value={productCount} helper="ProductCard / Detail" icon={<PackageSearch size={20} />} />
        <AdminStatCard label="Brand / Service" value={brandServiceCount} helper="品牌故事與服務素材" icon={<Sparkles size={20} />} />
        <AdminStatCard label="接入 / 待準備" value={`${connectedCount} / ${pendingCount}`} helper="已接前台 / 未有正式檔" icon={<Layers3 size={20} />} />
      </div>

      <AdminAssetManager assets={siteAssets} />
    </div>
  );
}
