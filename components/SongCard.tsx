import { Quality, Type } from "@/lib/types";
import { getImageSrc } from "@/lib/utils";
import Image from "next/image";

export type SliderCardProps = {
  name: string;
  type: Type;
  url: string;
  image: Quality;
  explicit?: boolean;
  subtitle?: string;
  className?: string;
  aspect?: "square" | "video";
  hidePlayButton?: boolean;
  isCurrentSeason?: boolean;
};
const SongCard = (data: SliderCardProps) => {
  const imageSrc = getImageSrc(data.image, "high");

  return (
    <div
      className=" relative 
        group 
        flex 
        flex-col 
        items-center 
        justify-center 
        rounded-md 
        overflow-hidden 
        gap-x-4 
        bg-neutral-400/5 
        cursor-pointer 
        hover:bg-neutral-400/10 
        transition 
        p-3"
    >
      <div
        className="
          relative 
          aspect-square 
          w-full
          h-full 
          rounded-md 
          overflow-hidden
        "
      >
        <Image
          className="object-cover"
          src={imageSrc || "/images/music-placeholder.png"}
          height={200}
          width={200}
          alt="image"
        />
      </div>
    </div>
  );
};

export default SongCard;
