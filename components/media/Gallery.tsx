import type { PpaMediaAsset } from "@/lib/assets";
import { PpaImage } from "./PpaImage";
import { PpaVideo } from "./PpaVideo";

type GalleryProps = {
  items: PpaMediaAsset[];
  title?: string;
  eyebrow?: string;
  description?: string;
  className?: string;
};

export function Gallery({
  items,
  title = "Gallery",
  eyebrow = "Visuals",
  description,
  className = "bg-surface",
}: GalleryProps) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ppa-red">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-lg text-ink-muted">{description}</p>
          ) : null}
        </div>

        <ul className="mt-10 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const featured = index === 0;
            const itemClass = featured
              ? "sm:col-span-2 lg:col-span-2"
              : undefined;

            return (
              <li
                key={`${item.type}-${item.src}`}
                className={`group border border-line bg-[#0a1a12] shadow-[0_0_0_0_rgba(212,160,23,0)] transition hover:border-ppa-gold hover:shadow-[0_0_0_1px_rgba(212,160,23,0.45)] ${itemClass ?? ""}`}
              >
                {item.type === "video" ? (
                  <PpaVideo
                    src={item.src}
                    poster={item.poster}
                    caption={item.caption}
                    alt={item.alt}
                    muted
                    loop
                    controls
                    aspect="video"
                  />
                ) : (
                  <PpaImage
                    src={item.src}
                    alt={item.alt}
                    caption={item.caption}
                    aspect={featured ? "video" : "photo"}
                    priority={featured}
                    sizes={
                      featured
                        ? "(max-width: 768px) 100vw, 66vw"
                        : "(max-width: 768px) 100vw, 33vw"
                    }
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/** @deprecated Use Gallery — kept for existing imports */
export { Gallery as MediaGallery };
