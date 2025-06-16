import { ReactNode } from 'react';
import { AuthToggle } from '../AuthToggle';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  className?: string;
  showAuthButton?: boolean;
}

export function PageHeader({
  title,
  subtitle,
  actions,
  className = '',
  showAuthButton = true,
}: PageHeaderProps) {
  return (
    <header className={`home-header ${className}`}>
      <div className="home-header-content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className="header-actions">
        {showAuthButton && <AuthToggle variant="default" />}
        {actions}
      </div>
    </header>
  );
}
