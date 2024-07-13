"use client";

import SongCard from "@/components/SongCard";
import SongItem from "@/components/SongItem";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import useOnPlay from "@/hooks/useOnPlay";
import { Modules } from "@/lib/types";
import { cn } from "@/lib/utils";

interface PageContentProps {
  homeData: Modules;
}

const SongSection: React.FC<PageContentProps> = ({ homeData }) => {
  //   const onPlay = useOnPlay(songs);
  //   if (songs.length === 0) {
  //     return <div className="mt-4 text-neutral-400">Upload Your First Song</div>;
  //   }

  return (
    <div
      className="

  gap-4 
  mt-4
"
    >
      {Object.entries(homeData).map(([key, section]) => {
        if ("random_songs_listid" in section || key === "discover") return null;

        return (
          <div key={key}>
            <header className="border-b pb-2">
              <h2 className="pl-2 font-heading text-2xl drop-shadow-md dark:bg-gradient-to-br dark:from-neutral-200 dark:to-neutral-600 dark:bg-clip-text dark:text-transparent sm:text-3xl md:text-4xl lg:pl-0 ">
                {section.title}
              </h2>

              <ScrollArea>
                <div
                  className={cn("flex sm:gap-2 xl:pb-6", {
                    "grid grid-flow-col grid-rows-2 place-content-start": [
                      "trending",
                      "albums",
                      "charts",
                    ].includes(key),
                  })}
                >
                  {section.data.map(
                    ({ id, name, url, subtitle, type, image, explicit }) => (
                      <SongCard
                        key={id}
                        name={name}
                        url={url}
                        subtitle={subtitle}
                        type={type}
                        image={image}
                        explicit={explicit}
                      />
                    )
                  )}
                </div>

                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </header>
          </div>
        );
      })}
    </div>
  );
};

export default SongSection;
