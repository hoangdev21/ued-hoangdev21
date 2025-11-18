import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: 'default' | 'glass';
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  className = '',
  variant = 'default',
  ...props
}) => {
  const variantClasses = {
    default: 'border-gray-300 focus:ring-blue-500',
    glass: 'form-input'
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-gray-700 mb-2 animate-fade-in-up">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${variantClasses[variant]} ${error ? 'border-red-500 focus:ring-red-500' : ''} ${className}`}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-sm mt-2 animate-fade-in-up">{error}</p>
      )}
      {helperText && !error && (
        <p className="text-gray-500 text-sm mt-2 animate-fade-in-up">{helperText}</p>
      )}
    </div>
  );
};

export default Input;
