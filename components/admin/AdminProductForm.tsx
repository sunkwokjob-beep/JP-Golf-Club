import type { ReactNode } from "react";
import type { Product } from "@/types/product";

const categories = [
  { value: "drivers", label: "一號木" },
  { value: "fairway-woods", label: "球道木" },
  { value: "hybrids", label: "混合桿" },
  { value: "iron-sets", label: "鐵桿套裝" },
  { value: "wedges", label: "挖起桿" },
  { value: "putters", label: "推桿" },
];

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-[0.14em] text-charcoal/55">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

const inputClass =
  "h-11 w-full rounded-md border border-champagne-gold/25 bg-white px-3 text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal/35 focus:border-champagne-gold focus:ring-2 focus:ring-champagne-gold/15";
const textareaClass =
  "min-h-28 w-full rounded-md border border-champagne-gold/25 bg-white px-3 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal/35 focus:border-champagne-gold focus:ring-2 focus:ring-champagne-gold/15";

export function AdminProductForm({ product, mode }: { product?: Product; mode: "new" | "edit" }) {
  const imagePath = product?.images[0] ?? "/images/products/product-titleist-gt2-driver-main.jpg";

  return (
    <form className="space-y-6 rounded-lg border border-champagne-gold/25 bg-white/82 p-5 shadow-sm lg:p-6">
      <div className="grid gap-5 lg:grid-cols-2">
        <Field label="商品名稱">
          <input className={inputClass} defaultValue={product?.name} placeholder="Titleist GT2 Driver" />
        </Field>
        <Field label="SKU">
          <input className={inputClass} defaultValue={product?.sku} placeholder="JPG-NEW-BRAND-MODEL-001" />
        </Field>
        <Field label="品牌">
          <input className={inputClass} defaultValue={product?.brand} placeholder="Titleist" />
        </Field>
        <Field label="型號">
          <input className={inputClass} defaultValue={product?.model} placeholder="GT2" />
        </Field>
        <Field label="分類">
          <select className={inputClass} defaultValue={product?.category ?? "drivers"}>
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="新品 / 二手">
          <select className={inputClass} defaultValue={product?.condition ?? "new"}>
            <option value="new">全新</option>
            <option value="preowned">二手</option>
          </select>
        </Field>
        <Field label="成色 rank">
          <select className={inputClass} defaultValue={product?.rank ?? ""}>
            <option value="">不適用</option>
            <option value="S">S</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </Field>
        <Field label="售賣狀態">
          <select className={inputClass} defaultValue={product?.status ?? "available"}>
            <option value="available">available / 現貨</option>
            <option value="reserved">reserved / 已預留</option>
            <option value="sold">sold / 已售出</option>
          </select>
        </Field>
        <Field label="價格">
          <input className={inputClass} type="number" defaultValue={product?.price} placeholder="4980" />
        </Field>
        <Field label="原價">
          <input className={inputClass} type="number" defaultValue={product?.originalPrice ?? ""} placeholder="可留空" />
        </Field>
        <Field label="庫存">
          <input className={inputClass} type="number" defaultValue={product?.stock ?? 1} placeholder="1" />
        </Field>
        <Field label="商品圖片路徑">
          <input className={inputClass} defaultValue={imagePath} placeholder="/images/products/product-titleist-gt2-driver-main.jpg" />
        </Field>
      </div>

      <Field label="Tags">
        <input className={inputClass} defaultValue={product?.tags.join(", ")} placeholder="新品到港, 高容錯, 日本直採" />
      </Field>

      <div className="rounded-md border border-champagne-gold/18 bg-[#fbf7ec] p-4">
        <h2 className="text-sm font-semibold text-jp-green-dark">規格資料</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Field label="Club Type">
            <input className={inputClass} defaultValue={product?.specs.clubType} placeholder="Driver" />
          </Field>
          <Field label="Shaft">
            <input className={inputClass} defaultValue={product?.specs.shaft} placeholder="Tour AD VF" />
          </Field>
          <Field label="Flex">
            <input className={inputClass} defaultValue={product?.specs.flex} placeholder="S" />
          </Field>
          <Field label="Loft">
            <input className={inputClass} defaultValue={product?.specs.loft} placeholder="10.5°" />
          </Field>
          <Field label="Length">
            <input className={inputClass} defaultValue={product?.specs.length} placeholder="45.5 in" />
          </Field>
          <Field label="Handedness">
            <input className={inputClass} defaultValue={product?.specs.handedness} placeholder="右手" />
          </Field>
          <Field label="Set Composition">
            <input className={inputClass} defaultValue={product?.specs.setComposition ?? ""} placeholder="5, 6, 7, 8, 9, PW" />
          </Field>
          <Field label="Grip">
            <input className={inputClass} defaultValue={product?.specs.grip ?? ""} placeholder="Golf Pride" />
          </Field>
          <Field label="Headcover">
            <input className={inputClass} defaultValue={product?.specs.headcover ?? ""} placeholder="有 / 無" />
          </Field>
          <Field label="Year">
            <input className={inputClass} defaultValue={product?.specs.year ?? ""} placeholder="2025" />
          </Field>
          <Field label="Origin">
            <input className={inputClass} defaultValue={product?.specs.origin} placeholder="日本" />
          </Field>
        </div>
      </div>

      <Field label="Description">
        <textarea className={textareaClass} defaultValue={product?.description} placeholder="商品簡介、適合球手、主要賣點。" />
      </Field>
      <Field label="Inspection Notes">
        <textarea className={textareaClass} defaultValue={product?.inspectionNotes} placeholder="檢測狀況、配件、成色說明。" />
      </Field>

      <div className="flex flex-col gap-3 border-t border-champagne-gold/20 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-charcoal/55">
          {mode === "new" ? "展示版本只建立表單 UI，提交後不會寫入資料。" : "展示版本會預填 mock data，儲存功能留待接 database。"}
        </p>
        <div className="flex gap-3">
          <button type="button" className="h-11 rounded-md border border-champagne-gold px-5 text-sm font-semibold text-jp-green hover:bg-champagne-gold/12">
            取消
          </button>
          <button type="button" className="h-11 rounded-md bg-jp-green px-5 text-sm font-semibold text-pearl-white hover:bg-jp-green-dark">
            {mode === "new" ? "建立商品 (Mock)" : "儲存修改 (Mock)"}
          </button>
        </div>
      </div>
    </form>
  );
}
