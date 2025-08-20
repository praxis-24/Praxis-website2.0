const Card = ({ 
  children, 
  className = '',
  hoverable = false,
  ...props 
}) => {
  return (
    <div 
      className={`
        bg-base-100 rounded-xl shadow-lg p-6
        ${hoverable && 'hover:shadow-xl transition-shadow duration-300'}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;