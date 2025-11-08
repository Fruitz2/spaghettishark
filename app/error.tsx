"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
        Something went wrong!
      </h2>
      <p className="mb-8 text-lg text-foreground/70 md:text-xl">
        The pasta got tangled. Let's try again.
      </p>
      <Button
        onClick={reset}
        size="lg"
        className="rounded-full"
      >
        Try again
      </Button>
    </div>
  );
}
