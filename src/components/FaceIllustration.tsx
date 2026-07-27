export default function FaceIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 320"
      role="img"
      aria-label="美容鍼灸のイメージイラスト:顔の輪郭と鍼のポイント"
      className={className}
    >
      <circle cx="160" cy="160" r="150" fill="url(#bgGradient)" />
      <defs>
        <linearGradient id="bgGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fbe8e8" />
          <stop offset="100%" stopColor="#f3d9d9" />
        </linearGradient>
      </defs>

      {/* 顔の輪郭(横顔シルエット) */}
      <path
        d="M120 70
           C 170 60, 210 90, 214 130
           C 218 150, 232 155, 236 165
           C 232 172, 218 175, 214 182
           C 210 220, 185 250, 150 258
           C 120 264, 96 250, 90 224
           C 70 220, 58 205, 60 188
           C 48 182, 48 168, 60 160
           C 56 130, 78 90, 120 70 Z"
        fill="none"
        stroke="#7a2e3a"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.75"
      />

      {/* 鍼のポイント */}
      {[
        [150, 96],
        [190, 118],
        [205, 150],
        [175, 176],
        [140, 150],
        [125, 190],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <line
            x1={cx}
            y1={cy - 22}
            x2={cx}
            y2={cy}
            stroke="#a83b4a"
            strokeWidth="1.5"
            opacity="0.8"
          />
          <circle cx={cx} cy={cy} r="4" fill="#a83b4a" />
          <circle cx={cx} cy={cy - 22} r="2" fill="#a83b4a" opacity="0.6" />
        </g>
      ))}
    </svg>
  );
}
