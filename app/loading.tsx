export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="relative h-32 w-32">
        <div className="absolute inset-0 animate-ping rounded-full bg-accent/20" />
        <div className="absolute inset-0 animate-pulse rounded-full bg-accent/40" />
        <div className="absolute inset-4 animate-spin rounded-full border-4 border-accent/20 border-t-accent" />
      </div>
    </div>
  );
}
