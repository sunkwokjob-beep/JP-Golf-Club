export function formatHKD(amount: number) {
  return new Intl.NumberFormat("zh-HK", {
    style: "currency",
    currency: "HKD",
    maximumFractionDigits: 0,
  })
    .format(amount)
    .replace("HK$", "HKD ");
}
