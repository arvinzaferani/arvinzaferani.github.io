import { isPlaceholder } from "@/lib/projects";

/**
 * §1 — an unfilled placeholder must never read as if it were real content.
 * Renders an explicit "content pending" affordance instead.
 */
export function PendingValue({
  value,
  fallback,
  className,
}: {
  value?: string;
  fallback: string;
  className?: string;
}) {
  if (!isPlaceholder(value)) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-foreground/35 ${className ?? ""}`}
      title={fallback}
    >
      <span className="inline-block h-1 w-1 rounded-full bg-foreground/25" />
      {fallback}
    </span>
  );
}
