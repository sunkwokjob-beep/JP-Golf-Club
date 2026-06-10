import type { Category } from "@/types/product";

export const categories: Category[] = [
  {
    id: "drivers",
    slug: "drivers",
    labelZh: "一號木",
    labelEn: "Drivers",
    iconName: "club",
    description: "追求距離與容錯，精選日本市場人氣型號。",
  },
  {
    id: "fairway-woods",
    slug: "fairway-woods",
    labelZh: "球道木",
    labelEn: "Fairway Woods",
    iconName: "wood",
    description: "穩定起飛，適合球道與開球備用選擇。",
  },
  {
    id: "hybrids",
    slug: "hybrids",
    labelZh: "混合桿",
    labelEn: "Hybrids",
    iconName: "sparkle",
    description: "取代長鐵，兼具距離與易打性。",
  },
  {
    id: "iron-sets",
    slug: "iron-sets",
    labelZh: "鐵桿套裝",
    labelEn: "Iron Sets",
    iconName: "layers",
    description: "由鍛造手感到高容錯設計，按程度精選。",
  },
  {
    id: "wedges",
    slug: "wedges",
    labelZh: "挖起桿",
    labelEn: "Wedges",
    iconName: "target",
    description: "短桿控制、旋轉與落點表現。",
  },
  {
    id: "putters",
    slug: "putters",
    labelZh: "推桿",
    labelEn: "Putters",
    iconName: "flag",
    description: "手感、配重與瞄準線並重。",
  },
];
