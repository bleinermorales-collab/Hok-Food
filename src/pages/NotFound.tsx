import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound = () => (
  <div className="min-h-screen bg-background flex items-center justify-center p-4">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-foreground mb-2">404</h1>
      <p className="text-muted-foreground mb-6">Página no encontrada</p>
      <Button asChild>
        <Link to="/">Volver al Dashboard</Link>
      </Button>
    </div>
  </div>
);

export default NotFound;
