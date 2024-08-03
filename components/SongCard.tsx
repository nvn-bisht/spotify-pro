import Link from "next/link";
import { Play } from "lucide-react";

import type { Quality, Type } from "@/lib/types";

import { cn, getHref, getImageSrc } from "@/lib/utils";

import { ImageWithFallback } from "./ImageWithFallback";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { PlayButton2 } from "./shared/PlayButton2";

export type SongCardProps = {
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

export function SongCard(props: SongCardProps) {
  const {
    url,
    type,
    image,
    name,
    subtitle,
    explicit,
    aspect = "square",
    hidePlayButton,
    isCurrentSeason,
    className,
  } = props;

  const imageSrc = getImageSrc(image, "high");
  const Wrapper = type === "radio_station" ? "div" : Link;

  return (
    <Card
      title={name}
      className={cn(
        "group w-32 cursor-pointer    border-0 transition-shadow duration-200  sm:w-36 sm:border-solid md:w-40 lg:w-48 bg-neutral-400/5 hover:bg-neutral-400/10 ",
        aspect === "video" && "w-44 !border-none sm:w-48 md:w-64 lg:w-72  ",
        isCurrentSeason &&
          "ring-2 ring-ring ring-offset-2 ring-offset-background",
        className
      )}
    >
      <CardContent className="size-full p-2">
        <div
          className={cn(
            "relative w-full overflow-hidden rounded-md",
            aspect === "square" ? "aspect-square" : "aspect-video",
            ["radio_station", "artist"].includes(type) && "rounded-full border"
          )}
        >
          {/* <Wrapper href={getHref(url, type)} className="absolute inset-0 z-10">
            <span className="sr-only">View {name}</span>
          </Wrapper> */}

          <ImageWithFallback
            src={imageSrc}
            fallback={`/images/placeholder/${type}.jpg`}
            width={200}
            height={200}
            alt={name}
            className={cn(
              "size-full object-cover transition-transform duration-300 group-hover:scale-110",
              !imageSrc && "dark:invert",
              imageSrc.includes("default") && "dark:invert"
            )}
          />

          {/* <Skeleton className="absolute inset-0 -z-10 size-full hover:scale-110" /> */}

          {!hidePlayButton && (
            <div className="absolute inset-0 hidden from-transparent to-black group-hover:bg-gradient-to-b lg:group-hover:flex">
              <PlayButton2
                type={type}
                token={url.split("/").pop()!}
                className="group/play z-20 m-auto aspect-square w-12 rounded-full bg-muted/75 duration-200 hover:w-16 active:w-14"
              >
                <Play
                  strokeWidth={10}
                  className="m-auto h-full w-6 p-0.5 duration-200 group-hover/play:w-8"
                />
              </PlayButton2>
            </div>
            // <div
            //   className="
            //   absolute
            //   bottom-2
            //   right-2
            //   mb-1
            // "
            // >
            //   <PlayButton />
            // </div>
          )}
        </div>

        <div className="mt-1 flex w-full flex-col items-center justify-between">
          <h4 className="w-full font-semibold lg:text-lg">
            <Wrapper
              href={getHref(url, type)}
              className="mx-auto flex max-w-fit items-center"
            >
              {explicit && (
                <Badge className="mr-1 rounded px-1 py-0 font-bold duration-0">
                  E
                </Badge>
              )}
              <span className="truncate text-start text-white font-semibold w-full">
                {name}
              </span>
            </Wrapper>
          </h4>

          <span
            className=" text-neutral-400 
            text-sm 
            pb-4 
            w-full 
            truncate text-center capitalize"
          >
            {subtitle}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
