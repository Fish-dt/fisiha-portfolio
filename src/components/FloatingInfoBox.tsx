import React from "react";

export default function FloatingInfoBox({ text, style }: { text: string; style?: React.CSSProperties }) {
  return (
    <div
      className="absolute bg-white/10 backdrop-blur-md border border-white/30 shadow-xl rounded-xl px-4 py-2 text-xs font-semibold text-purple-700 transition-transform duration-200 hover:scale-105"
      style={style}
    >
      {text}
    </div>
  );
}