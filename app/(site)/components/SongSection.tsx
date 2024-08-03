"use client";

import { SongCard } from "@/components/SongCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import useOnPlay from "@/hooks/useOnPlay";
import { Modules } from "@/lib/types";
import { cn } from "@/lib/utils";

interface PageContentProps {
  homeData: Modules;
}

const SongSection: React.FC<PageContentProps> = ({ homeData }) => {
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
            <header className="border-b border-neutral-500/25 p-2">
              <h2 className="text-white text-2xl font-semibold mb-5">
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
                    ({ id, name, url, subtitle, type, image, explicit }) => {
                      return (
                        <SongCard
                          key={id}
                          name={name}
                          url={url}
                          subtitle={subtitle}
                          type={type}
                          image={image}
                          explicit={explicit}
                        />
                      );
                    }
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
