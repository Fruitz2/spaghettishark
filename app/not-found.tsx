import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 bg-gradient-to-r from-accent via-foreground to-accent bg-clip-text text-7xl font-bold text-transparent md:text-9xl">
        404
      </h1>
      <p className="mb-8 text-2xl font-medium text-foreground/80 md:text-3xl">
        Lost at sea? This page doesn&apos;t exist.
      </p>
      <Button asChild size="lg" className="rounded-full">
        <Link href="/">
          Return to Surface
        </Link>
      </Button>
    </div>
  );
}
