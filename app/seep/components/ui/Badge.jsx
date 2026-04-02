'use client';

const badgeStyles = {
  gold: {
    backgroundColor: 'var(--seep-light-gold)',
    color: '#8B7028',
    borderColor: 'var(--seep-gold)',
  },
  green: {
    backgroundColor: '#ECFDF5',
    color: '#065F46',
    borderColor: 'var(--seep-success)',
  },
  red: {
    backgroundColor: '#FEF2F2',
    color: '#991B1B',
    borderColor: 'var(--seep-danger)',
  },
  gray: {
    backgroundColor: '#F3F4F6',
    color: '#374151',
    borderColor: '#D1D5DB',
  },
  yellow: {
    backgroundColor: '#FFFBEB',
    color: '#92400E',
    borderColor: '#F59E0B',
  },
};

export default function Badge({ children, color = 'gold', dot = false, className = '' }) {
  const style = badgeStyles[color] || badgeStyles.gold;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium rounded-full border ${className}`}
      style={style}
    >
      {dot && (
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: style.borderColor }}
        />
      )}
      {children}
    </span>
  );
}
