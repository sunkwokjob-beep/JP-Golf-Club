"use client";

import { Copy, ImageIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { ManagedImage } from "@/components/ui/ManagedImage";
import type { AssetType, SiteAsset } from "@/data/assets";

const filters: Array<{ label: string; value: AssetType | "all" }> = [
  { label: "All", value: "all" },
  { label: "Banners", value: "banner" },
  { label: "Products", value: "product" },
  { label: "Brand", value: "brand" },
  { label: "Services", value: "service" },
];

const typeLabels: Record<AssetType, string> = {
  banner: "Banner",
  product: "Product",
  brand: "Brand",
  service: "Service",
};

const statusLabels: Record<SiteAsset["status"], string> = {
  needed: "待準備",
  ready: "已準備",
  missing: "缺失",
};

const statusClasses: Record<SiteAsset["status"], string> = {
  needed: "border-champagne-gold/35 bg-champagne-gold/12 text-[#8a6a24]",
  ready: "border-success-green/25 bg-success-green/8 text-success-green",
  missing: "border-red-200 bg-red-50 text-red-700",
};

export function AdminAssetManager({ assets }: { assets: SiteAsset[] }) {
  const [activeFilter, setActiveFilter] = useState<AssetType | "all">("all");
  const filteredAssets = useMemo(
    () => assets.filter((asset) => activeFilter === "all" || asset.type === activeFilter),
    [activeFilter, assets],
  );

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;
          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={`h-10 rounded-md border px-4 text-sm font-semibold transition-colors ${
                isActive
                  ? "border-jp-green bg-jp-green text-pearl-white"
                  : "border-champagne-gold/30 bg-white text-jp-green hover:bg-champagne-gold/12"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="overflow-hidden rounded-lg border border-champagne-gold/25 bg-white/82 shadow-sm">
        <div className="flex items-center gap-3 border-b border-champagne-gold/18 px-5 py-4">
          <ImageIcon size={18} className="text-champagne-gold" />
          <div>
            <h2 className="font-semibold text-jp-green-dark">素材清單</h2>
            <p className="mt-1 text-sm text-charcoal/55">目前顯示 {filteredAssets.length} 個素材項目。</p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-[1180px] w-full text-left text-sm">
            <thead className="bg-jp-green-dark text-pearl-white">
              <tr>
                <th className="px-4 py-3 font-semibold">預覽圖</th>
                <th className="px-4 py-3 font-semibold">素材名稱</th>
                <th className="px-4 py-3 font-semibold">檔案路徑</th>
                <th className="px-4 py-3 font-semibold">用途</th>
                <th className="px-4 py-3 font-semibold">Section</th>
                <th className="px-4 py-3 font-semibold">類型</th>
                <th className="px-4 py-3 font-semibold">狀態</th>
                <th className="px-4 py-3 font-semibold">建議尺寸</th>
                <th className="px-4 py-3 font-semibold">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-champagne-gold/15">
              {filteredAssets.map((asset) => (
                <tr key={asset.id} className="bg-white/65 align-middle hover:bg-[#fbf7ec]">
                  <td className="px-4 py-3">
                    <div className="relative h-16 w-24 overflow-hidden rounded-md border border-light-grey bg-pearl-white">
                      <ManagedImage
                        src={asset.file}
                        fallbackSrc={asset.fallbackFile}
                        alt={`${asset.name} preview`}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-3 font-semibold text-jp-green-dark">{asset.name}</td>
                  <td className="px-4 py-3 font-mono text-xs text-charcoal/65">{asset.file}</td>
                  <td className="px-4 py-3 text-charcoal/70">{asset.usage}</td>
                  <td className="px-4 py-3 text-charcoal/70">{asset.section}</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full border border-champagne-gold/25 bg-pearl-white px-2.5 py-1 text-xs font-semibold text-jp-green">
                      {typeLabels[asset.type]}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClasses[asset.status]}`}>
                      {statusLabels[asset.status]}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs leading-5 text-charcoal/62">{asset.recommendedSize}</td>
                  <td className="px-4 py-3">
                    <button
                      type="button"
                      className="inline-flex h-9 items-center gap-2 rounded-md border border-champagne-gold/30 px-3 text-xs font-semibold text-jp-green transition-colors hover:bg-champagne-gold/12"
                      aria-label={`複製 ${asset.name} 路徑`}
                    >
                      <Copy size={14} />
                      複製路徑
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
