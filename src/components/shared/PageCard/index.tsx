import { Link } from 'react-router-dom';

export interface PageCardProps {
  path: string;
  title: string;
  description: string;
  emoji: string;
  className?: string;
}

export function PageCard({
  path,
  title,
  description,
  emoji,
  className = '',
}: PageCardProps) {
  return (
    <Link
      to={path}
      className={`page-card ${className}`}
      aria-label={`Navigate to ${title}`}
    >
      <div className="page-card-emoji" aria-hidden="true">
        {emoji}
      </div>
      <h2 className="page-card-title">{title}</h2>
      <p className="page-card-description">{description}</p>
    </Link>
  );
}
