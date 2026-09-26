import Chapter01Intro from "@/components/chapters/Chapter01Intro";
import Chapter02Capability from "@/components/chapters/Chapter02Capability";
import Chapter03Proof, {
  type ProjectAssets,
} from "@/components/chapters/Chapter03Proof";
import Chapter04Process from "@/components/chapters/Chapter04Process";
import Chapter05About from "@/components/chapters/Chapter05About";
import Chapter06Contact from "@/components/chapters/Chapter06Contact";
import OtherWork from "@/components/chapters/OtherWork";
import ChapterCounter from "@/components/site/ChapterCounter";
import { hasPublicAsset } from "@/lib/assets";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { projects } from "@/lib/projects";

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";
  const t = getDictionary(locale);

  // §7 / §8 — only reference an icon or screenshot that actually exists, so
  // the page never ships a 404 (or a wasted `priority` preload) for it.
  const assets: ProjectAssets = Object.fromEntries(
    projects.map((project) => [
      project.slug,
      {
        icon: hasPublicAsset(project.icon ?? ""),
        image: hasPublicAsset(project.image ?? ""),
      },
    ])
  );

  return (
    <>
      <ChapterCounter chapters={t.chapters} />

      <main>
        {/* INTRO */}
        <Chapter01Intro t={t} />
        {/* CAPABILITY */}
        <Chapter02Capability t={t} />
        {/* PROOF */}
        <Chapter03Proof t={t} assets={assets} />
        <OtherWork t={t} />
        {/* PROCESS */}
        <Chapter04Process t={t} />
        {/* ABOUT */}
        <Chapter05About t={t} />
        {/* CONTACT */}
        <Chapter06Contact t={t} />
      </main>
    </>
  );
}
