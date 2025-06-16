import { Button, PageHeader, ThemeToggle } from '../../components';

const pages = [
  {
    url: '/mike',
    title: 'Mike Page',
    description:
      'Japanese auction platform with responsive design and CSS modules',
    emoji: '🏢',
  },
  {
    url: '/atom',
    title: 'Atom Page',
    description:
      'Japanese auction platform with responsive design and CSS modules',
    emoji: '⚛️',
  },
];

export function HomePage() {
  const handlePageOpen = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="home-container">
      <PageHeader
        title="🚀 React App"
        subtitle="Choose a page to navigate to:"
        actions={<ThemeToggle />}
        showAuthButton={true}
      />
      <div className="page-buttons-grid">
        {pages.map(page => (
          <div key={page.url} className="page-button-card">
            <div className="page-button-emoji">{page.emoji}</div>
            <h3 className="page-button-title">{page.title}</h3>
            <p className="page-button-description">{page.description}</p>
            <Button
              variant="primary"
              onClick={() => handlePageOpen(page.url)}
              className="page-open-button"
            >
              Open Page
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
