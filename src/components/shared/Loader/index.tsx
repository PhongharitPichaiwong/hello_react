interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

export function Loader({ size = 'md', text, className = '' }: LoaderProps) {
  const sizeClasses = {
    sm: 'loader-sm',
    md: 'loader-md',
    lg: 'loader-lg',
  };

  return (
    <div className={`loader-container ${className}`}>
      <div className={`loader ${sizeClasses[size]}`} />
      {text && <span className="loader-text">{text}</span>}
    </div>
  );
}

export function ActivityIndicator() {
  return <Loader size="md" />;
}
