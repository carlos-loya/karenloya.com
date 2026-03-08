interface WildflowerIconProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function WildflowerIcon({ className = '', width = 48, height = 48 }: WildflowerIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* === Center large flower (open bloom) === */}
      <path d="M40 52 Q40 42 40 34" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* Petals - large open flower */}
      <path d="M40 34 Q36 28 33 20 Q32 16 35 15 Q38 14.5 40 18" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="0.8" />
      <path d="M40 34 Q44 28 47 20 Q48 16 45 15 Q42 14.5 40 18" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="0.8" />
      <path d="M40 34 Q34 30 28 24 Q25 22 26 19 Q27.5 16.5 31 19 Q35 22 40 28" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="0.8" />
      <path d="M40 34 Q46 30 52 24 Q55 22 54 19 Q52.5 16.5 49 19 Q45 22 40 28" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="0.8" />
      {/* Center stamen */}
      <circle cx="38" cy="22" r="1" fill="currentColor" opacity="0.5" />
      <circle cx="42" cy="22" r="1" fill="currentColor" opacity="0.5" />
      <circle cx="40" cy="19.5" r="1" fill="currentColor" opacity="0.5" />
      <circle cx="40" cy="24" r="1.2" fill="currentColor" opacity="0.4" />

      {/* === Left flower (smaller bloom) === */}
      <path d="M36 58 Q28 50 22 40" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      {/* Petals */}
      <path d="M22 40 Q19 34 16 28 Q15 25 17.5 24.5 Q20 24 21 28 Q22 32 22 40" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="0.8" />
      <path d="M22 40 Q18 36 14 32 Q12 30 13 27.5 Q14.5 25.5 16.5 28 Q19 31 22 40" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="0.8" />
      <path d="M22 40 Q22 34 24 28 Q25 25 23 24 Q21 24 20.5 27 Q20 30 22 40" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="20" cy="29" r="0.8" fill="currentColor" opacity="0.5" />
      <circle cx="18.5" cy="30.5" r="0.8" fill="currentColor" opacity="0.5" />

      {/* === Right small bud === */}
      <path d="M44 56 Q52 48 56 40" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      {/* Closed bud petals */}
      <path d="M56 40 Q55 34 53 30 Q52 28 54 27 Q56 27 56.5 29 Q57 32 56 40" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="0.8" />
      <path d="M56 40 Q57 34 58 30 Q58.5 28 57 27 Q55.5 27.5 55.5 29.5" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="0.8" />

      {/* === Leaves === */}
      {/* Large leaf left of center stem */}
      <path d="M40 46 Q32 42 26 46 Q28 48 32 48 Q36 48 40 46" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="0.6" />
      <path d="M33 46 Q32 44 28.5 46" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
      {/* Large leaf right of center stem */}
      <path d="M40 50 Q48 46 54 50 Q52 52 48 52 Q44 52 40 50" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="0.6" />
      <path d="M47 50 Q48 48 51.5 50" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
      {/* Small leaf on left stem */}
      <path d="M28 48 Q24 46 22 49 Q24.5 50 28 48" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="0.5" />
      {/* Small leaf on right stem */}
      <path d="M50 48 Q53 45 56 47 Q53.5 49 50 48" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="0.5" />

      {/* === Foliage accents (elongated leaves behind) === */}
      <path d="M38 56 Q30 48 24 36 Q22 32 24 30" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
      <path d="M42 56 Q50 48 56 36 Q58 32 56 30" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />

      {/* Base gathering point */}
      <path d="M36 58 Q38 56 40 55 Q42 56 44 58" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}
