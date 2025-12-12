export function interpretIntent(text) {
  const intent = text.toLowerCase();

  if (
    intent.includes("quick") ||
    intent.includes("summary") ||
    intent.includes("overview")
  ) {
    return "quick";
  }

  if (
    intent.includes("compare") ||
    intent.includes("decide") ||
    intent.includes("best")
  ) {
    return "decide";
  }

  if (
    intent.includes("learn") ||
    intent.includes("deep") ||
    intent.includes("detailed")
  ) {
    return "deep";
  }

  return "explore";
}
