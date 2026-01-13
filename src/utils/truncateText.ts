export function truncateText(text: string, maxLength: number, suffix = "…") {
  if (!text) return "";

  const segmenter = new Intl.Segmenter("ko", {
    granularity: "grapheme",
  });

  const segments = Array.from(segmenter.segment(text));

  if (segments.length <= maxLength) {
    return text;
  }

  return (
    segments
      .slice(0, maxLength)
      .map((s) => s.segment)
      .join("") + suffix
  );
}
