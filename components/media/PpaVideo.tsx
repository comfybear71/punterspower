type PpaVideoProps = {
  src: string;
  poster?: string;
  caption?: string;
  alt?: string;
  className?: string;
  /** Background/hero style: muted autoplay loop, no controls */
  ambient?: boolean;
  /** Stretch to fill a positioned parent (hero backgrounds) */
  fill?: boolean;
  /** Gallery/embed style: controls + optional muted loop */
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  aspect?: "video" | "square" | "photo" | "auto";
};

const aspectClass = {
  video: "aspect-video",
  square: "aspect-square",
  photo: "aspect-[4/3]",
  auto: "",
} as const;

export function PpaVideo({
  src,
  poster,
  caption,
  alt = "PPA campaign video",
  className = "",
  ambient = false,
  fill = false,
  autoPlay,
  muted,
  loop,
  controls,
  aspect = "video",
}: PpaVideoProps) {
  const isAmbient = ambient;
  const shouldAutoPlay = autoPlay ?? isAmbient;
  const shouldMute = muted ?? (isAmbient || shouldAutoPlay);
  const shouldLoop = loop ?? isAmbient;
  const showControls = controls ?? !isAmbient;

  if (fill) {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <video
          className="h-full w-full object-cover"
          src={src}
          poster={poster}
          autoPlay={shouldAutoPlay}
          muted={shouldMute}
          loop={shouldLoop}
          controls={showControls}
          playsInline
          preload="auto"
          aria-label={alt}
        />
        {isAmbient ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#121212]/75 via-[#121212]/30 to-[#0f3d26]/45"
          />
        ) : null}
      </div>
    );
  }

  return (
    <figure className={`overflow-hidden bg-[#0a1a12] ${className}`}>
      <div className={`relative w-full overflow-hidden ${aspectClass[aspect]}`}>
        <video
          className="h-full w-full object-cover"
          src={src}
          poster={poster}
          autoPlay={shouldAutoPlay}
          muted={shouldMute}
          loop={shouldLoop}
          controls={showControls}
          playsInline
          preload={isAmbient ? "auto" : "metadata"}
          aria-label={alt}
        >
          Your browser does not support embedded videos.
        </video>
        {isAmbient ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-[#121212]/25 to-[#121212]/40"
          />
        ) : null}
      </div>
      {caption ? (
        <figcaption className="border-t border-ppa-gold/30 bg-[#121212] px-3 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.14em] text-ppa-gold sm:px-4 sm:text-sm">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
