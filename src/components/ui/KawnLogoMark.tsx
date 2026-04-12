import Image from "next/image";
import { IMAGE_PATHS, IMAGE_SIZES } from "@/lib/images";

type Props = {
  /** Size + radius; default matches previous nav mark (36px, rounded-2xl). */
  className?: string;
  /** Decorative when “Kawn” label is shown beside the mark. */
  decorative?: boolean;
};

export function KawnLogoMark({
  className = "h-9 w-9 rounded-2xl",
  decorative = true,
}: Props) {
  return (
    <span
      className={`relative inline-flex shrink-0 overflow-hidden ring-1 ring-zinc-200/75 shadow-sm ${className}`}
    >
      <Image
        src={IMAGE_PATHS.logo}
        alt={decorative ? "" : "Kawn"}
        fill
        sizes={IMAGE_SIZES.logo}
        className="object-cover object-center"
        priority
      />
    </span>
  );
}
