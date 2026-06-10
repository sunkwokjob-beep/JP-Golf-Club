export const routes = {
  home: "/",
  newClubs: "/new-clubs",
  preOwned: "/pre-owned",
  brand: "/brand",
  categories: "/categories",
  accessories: "/accessories",
  about: "/about",
  services: "/services",
  contact: "/contact",
  account: "/account",
  cart: "/cart",
  product: (slug: string) => `/products/${slug}`,
};

export function whatsappProductUrl(productName?: string) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "85212345678";
  const message = productName
    ? `你好，我想查詢 ${productName} 的庫存、成色及交收安排。`
    : "你好，我想查詢極品高爾夫球杆。";

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
