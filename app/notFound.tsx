import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
        <p className="text-muted-foreground mt-2">
          The page you're looking for doesn't exist.
        </p>
          
          <Link href="/">
            <Button className="mt-8 rounded-full">
              Go Home
            </Button>
          </Link>
      </div>
    </div>
  );
}
