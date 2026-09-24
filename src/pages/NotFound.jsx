import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-6xl font-bold gradient-text mb-4">404</p>
        <p className="text-muted-foreground mb-8">
          This page doesn&apos;t exist.
        </p>
        <Link to="/" className="btn-outline inline-flex">
          <ArrowLeft size={16} />
          Back home
        </Link>
      </div>
    </div>
  );
}
