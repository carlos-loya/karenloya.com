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
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Center flower */}
      <circle cx="24" cy="16" r="3" fill="currentColor" />
      <ellipse cx="24" cy="11" rx="2.5" ry="4" fill="currentColor" opacity="0.6" />
      <ellipse cx="24" cy="21" rx="2.5" ry="4" fill="currentColor" opacity="0.6" />
      <ellipse cx="19" cy="13.5" rx="2.5" ry="4" fill="currentColor" opacity="0.6" transform="rotate(-60 19 13.5)" />
      <ellipse cx="29" cy="13.5" rx="2.5" ry="4" fill="currentColor" opacity="0.6" transform="rotate(60 29 13.5)" />
      <ellipse cx="19" cy="18.5" rx="2.5" ry="4" fill="currentColor" opacity="0.6" transform="rotate(60 19 18.5)" />
      <ellipse cx="29" cy="18.5" rx="2.5" ry="4" fill="currentColor" opacity="0.6" transform="rotate(-60 29 18.5)" />
      {/* Stem */}
      <path d="M24 22 Q24 32 24 42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Left leaf */}
      <path d="M24 30 Q18 26 16 30 Q18 32 24 30" fill="currentColor" opacity="0.5" />
      {/* Right leaf */}
      <path d="M24 35 Q30 31 32 35 Q30 37 24 35" fill="currentColor" opacity="0.5" />
      {/* Left small flower */}
      <circle cx="12" cy="22" r="2" fill="currentColor" opacity="0.7" />
      <ellipse cx="12" cy="18.5" rx="1.5" ry="2.5" fill="currentColor" opacity="0.4" />
      <ellipse cx="12" cy="25.5" rx="1.5" ry="2.5" fill="currentColor" opacity="0.4" />
      <ellipse cx="9" cy="22" rx="1.5" ry="2.5" fill="currentColor" opacity="0.4" transform="rotate(90 9 22)" />
      <ellipse cx="15" cy="22" rx="1.5" ry="2.5" fill="currentColor" opacity="0.4" transform="rotate(90 15 22)" />
      <path d="M12 25 Q12 34 14 42" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      {/* Right small flower */}
      <circle cx="36" cy="20" r="2" fill="currentColor" opacity="0.7" />
      <ellipse cx="36" cy="16.5" rx="1.5" ry="2.5" fill="currentColor" opacity="0.4" />
      <ellipse cx="36" cy="23.5" rx="1.5" ry="2.5" fill="currentColor" opacity="0.4" />
      <ellipse cx="33" cy="20" rx="1.5" ry="2.5" fill="currentColor" opacity="0.4" transform="rotate(90 33 20)" />
      <ellipse cx="39" cy="20" rx="1.5" ry="2.5" fill="currentColor" opacity="0.4" transform="rotate(90 39 20)" />
      <path d="M36 23 Q35 34 34 42" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}
