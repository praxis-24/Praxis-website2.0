const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'btn';
  const variantStyles = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost'
  };
  const sizeStyles = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg'
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;