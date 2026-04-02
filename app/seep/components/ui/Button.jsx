'use client';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary:
      'text-white focus:ring-[var(--seep-gold)]',
    outline:
      'border-2 border-[var(--seep-gold)] text-[var(--seep-gold)] hover:bg-[var(--seep-gold)] hover:text-white focus:ring-[var(--seep-gold)]',
    danger:
      'bg-[var(--seep-danger)] text-white hover:opacity-90 focus:ring-[var(--seep-danger)]',
    ghost:
      'text-[var(--seep-text-med)] hover:bg-[var(--seep-light-bg)] focus:ring-[var(--seep-gold)]',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      style={
        variant === 'primary'
          ? {
              background: disabled
                ? '#9CA3AF'
                : 'linear-gradient(135deg, #C6A94D 0%, #D4B96A 50%, #C6A94D 100%)',
              cursor: disabled ? 'not-allowed' : 'pointer',
            }
          : { cursor: disabled ? 'not-allowed' : 'pointer' }
      }
      {...props}
    >
      {children}
    </button>
  );
}
