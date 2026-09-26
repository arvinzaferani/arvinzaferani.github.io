import fs from "node:fs";
import path from "node:path";

/**
 * §1 / §8 / §9 — the owner supplies screenshots and the portrait later.
 * Checking at build time keeps a 404 (and a wasted `priority` preload) out of
 * the page for assets that do not exist yet, and lets the pending state render
 * on first paint instead of flashing a broken image.
 *
 * Server-only: runs while prerendering the static `/en` and `/fa` routes.
 */
const publicDir = path.join(process.cwd(), "public");

export function hasPublicAsset(assetPath: string): boolean {
  if (!assetPath.startsWith("/")) return false;

  const resolved = path.join(publicDir, assetPath);
  // Guard against traversal via a crafted assetPath.
  if (!resolved.startsWith(publicDir + path.sep)) return false;

  return fs.existsSync(resolved) && fs.statSync(resolved).isFile();
}
