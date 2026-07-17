import Image, { type ImageProps } from "next/image";

type PpaImageProps = {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  fill?: boolean;
  /** Absolute fill of a positioned parent (hero backgrounds) */
  cover?: boolean;
  width?: number;
  height?: number;
  aspect?: "video" | "square" | "photo" | "auto";
};

const aspectClass = {
  video: "aspect-video",
  square: "aspect-square",
  photo: "aspect-[4/3]",
  auto: "",
} as const;

export function PpaImage({
  src,
  alt,
  caption,
  priority = false,
  className = "",
  imgClassName = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  fill = true,
  cover = false,
  width,
  height,
  aspect = "photo",
}: PpaImageProps) {
  if (cover) {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className={`object-cover ${imgClassName}`}
        />
      </div>
    );
  }

  const figureClass = `overflow-hidden bg-[#0a1a12] ${className}`;
  const frameClass = `relative w-full overflow-hidden ${aspectClass[aspect]}`;

  const imageProps: Omit<ImageProps, "alt" | "src"> = fill
    ? {
        fill: true,
        sizes,
        className: `object-cover ${imgClassName}`,
        priority,
      }
    : {
        width: width ?? 1200,
        height: height ?? 800,
        sizes,
        className: `h-auto w-full object-cover ${imgClassName}`,
        priority,
      };

  return (
    <figure className={figureClass}>
      <div className={frameClass}>
        <Image src={src} alt={alt} {...imageProps} />
      </div>
      {caption ? (
        <figcaption className="border-t border-ppa-gold/40 bg-[#121212] px-3 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.14em] text-ppa-gold sm:px-4 sm:text-sm">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
