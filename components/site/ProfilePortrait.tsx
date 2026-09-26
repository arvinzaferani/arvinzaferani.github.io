import PendingImage from "@/components/site/PendingImage";
import { hasPublicAsset } from "@/lib/assets";
import type { Dictionary } from "@/lib/dictionaries";

/** §9 — owner-supplied portrait (640×640), rendered as a circular editorial crop. */
export const profileImagePath = "/profile/profile.jpg";

/**
 * §9 — a portrait belongs to the About chapter, never the hero.
 * Treatment: clean circular crop, low-saturation monochrome, subtle grain.
 */
export default function ProfilePortrait({ t }: { t: Dictionary }) {
  return (
    <figure className="group relative h-40 w-40 shrink-0 self-end overflow-hidden rounded-full border border-border bg-card md:h-52 md:w-52">
      <PendingImage
        src={profileImagePath}
        alt={t.about.name}
        width={416}
        height={416}
        available={hasPublicAsset(profileImagePath)}
        sizes="208px"
        ratio="h-full w-full"
        label={t.about.portraitPending}
        hint={profileImagePath}
        className="block h-full w-full"
        imageClassName="h-full w-full object-cover grayscale-[0.85] contrast-[1.05] transition-all duration-700 group-hover:grayscale-0"
      />

      {/* Subtle grain, so the portrait reads as editorial rather than stock. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </figure>
  );
}
