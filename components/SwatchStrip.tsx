const SWATCHES = [
  { hex: "#446452", name: "Pine" },
  { hex: "#ADA8D3", name: "Lilac" },
  { hex: "#D4D91F", name: "Chartreuse" },
  { hex: "#F5BFCB", name: "Blush" },
];

export default function SwatchStrip({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-hidden="true">
      {SWATCHES.map((s) => (
        <span
          key={s.hex}
          className="h-3 w-3 rounded-full ring-1 ring-ink/10"
          style={{ backgroundColor: s.hex }}
        />
      ))}
    </div>
  );
}
