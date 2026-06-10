import type { NavItem } from "@/types/navigation";

export const primaryNavigation: NavItem[] = [
  { label: "首頁", href: "/" },
  { label: "新品球杆", href: "/new-clubs" },
  { label: "二手精選", href: "/pre-owned" },
  { label: "品牌", href: "/brand" },
  { label: "球杆類別", href: "/categories" },
  { label: "配件", href: "/accessories" },
  { label: "服務與保障", href: "/services" },
];

export const utilityNavigation: NavItem[] = [
  { label: "關於我們", href: "/about" },
  { label: "會員中心", href: "/account" },
  { label: "聯絡我們", href: "/contact" },
];
