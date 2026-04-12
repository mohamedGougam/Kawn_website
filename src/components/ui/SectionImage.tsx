import Image from "next/image";
import { imageFrame } from "@/lib/ui";

type SectionImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  objectPosition?: string;
  frameClassName?: string;
  ratio?: "4/3" | "16/10";
};

const ratioClass = {
  "4/3": "aspect-[4/3]",
  "16/10": "aspect-[16/10]",
} as const;

const shellFrame =
  "relative w-full max-w-full overflow-hidden rounded-[1.125rem] border border-zinc-200/80 bg-white sm:rounded-3xl";

/**
 * Section visuals — white frame, soft shadow, clean edges (aligned with app UI).
 */
export function SectionImage({
  src,
  alt,
  sizes,
  priority = false,
  className = "object-cover",
  objectPosition = "object-center",
  frameClassName,
  ratio = "4/3",
}: SectionImageProps) {
  const decor = frameClassName ?? imageFrame;
  return (
    <div className={`${shellFrame} ${ratioClass[ratio]} ${decor}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={85}
        priority={priority}
        className={`${className} ${objectPosition}`}
      />
    </div>
  );
}
