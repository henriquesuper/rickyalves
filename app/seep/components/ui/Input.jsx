'use client';

export default function Input({
  label,
  type = 'text',
  error,
  className = '',
  ...props
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-[var(--seep-text-dark)]">
          {label}
        </label>
      )}
      <input
        type={type}
        className="w-full px-4 py-2.5 text-sm border border-[var(--seep-border)] rounded-lg bg-white text-[var(--seep-text-dark)] placeholder:text-[var(--seep-text-med)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--seep-gold)] focus:border-transparent transition-all duration-200"
        {...props}
      />
      {error && <span className="text-xs text-[var(--seep-danger)]">{error}</span>}
    </div>
  );
}

export function Textarea({ label, error, className = '', ...props }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-[var(--seep-text-dark)]">
          {label}
        </label>
      )}
      <textarea
        className="w-full px-4 py-2.5 text-sm border border-[var(--seep-border)] rounded-lg bg-white text-[var(--seep-text-dark)] placeholder:text-[var(--seep-text-med)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--seep-gold)] focus:border-transparent transition-all duration-200 resize-none"
        rows={4}
        {...props}
      />
      {error && <span className="text-xs text-[var(--seep-danger)]">{error}</span>}
    </div>
  );
}

export function Select({ label, options = [], error, className = '', ...props }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-[var(--seep-text-dark)]">
          {label}
        </label>
      )}
      <select
        className="w-full px-4 py-2.5 text-sm border border-[var(--seep-border)] rounded-lg bg-white text-[var(--seep-text-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--seep-gold)] focus:border-transparent transition-all duration-200"
        {...props}
      >
        <option value="">Selecione...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span className="text-xs text-[var(--seep-danger)]">{error}</span>}
    </div>
  );
}

export function CheckboxGroup({ label, options = [], selected = [], onChange, className = '' }) {
  const toggle = (value) => {
    const next = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];
    onChange(next);
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-[var(--seep-text-dark)]">
          {label}
        </label>
      )}
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const isSelected = selected.includes(opt.value);
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => toggle(opt.value)}
              className="px-4 py-2 text-sm rounded-lg border-2 transition-all duration-200 font-medium"
              style={{
                borderColor: isSelected ? 'var(--seep-gold)' : 'var(--seep-border)',
                backgroundColor: isSelected ? 'rgba(139,35,54,0.1)' : 'transparent',
                color: isSelected ? 'var(--seep-gold)' : 'var(--seep-text-med)',
              }}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function Toggle({ label, checked, onChange, className = '' }) {
  return (
    <label className={`flex items-center gap-3 cursor-pointer ${className}`}>
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={onChange}
        />
        <div
          className="w-10 h-5 rounded-full transition-colors duration-200"
          style={{
            backgroundColor: checked ? 'var(--seep-gold)' : '#D1D5DB',
          }}
        />
        <div
          className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200"
          style={{
            transform: checked ? 'translateX(20px)' : 'translateX(0)',
          }}
        />
      </div>
      {label && (
        <span className="text-sm text-[var(--seep-text-dark)]">{label}</span>
      )}
    </label>
  );
}
