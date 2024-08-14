import Image from "next/image";
import Header from "../shared/Header";
import { formatDuration, getHref, getImageSrc } from "@/lib/utils";
import {
  Album,
  Artist,
  Episode,
  Label,
  Mix,
  Playlist,
  ShowDetails,
  Song,
} from "@/lib/types";
import Link from "next/link";

interface ItemHeaderProps {
  type: Album | Song | Playlist | Artist | Episode | ShowDetails | Label | Mix;
}

const ItemHeader = async ({ type }: ItemHeaderProps) => {
  return (
    <Header>
      <div className="mt-20">
        <div
          className="
              flex 
              flex-col 
              md:flex-row 
              items-center 
              gap-x-5
            "
        >
          <div className="relative h-32 w-32 lg:h-44 lg:w-44">
            <Image
              className="object-cover rounded-md"
              fill
              src={getImageSrc(type.image, "high")}
              alt="Playlist"
            />
          </div>
          <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
            <p className="hidden md:block font-semibold text-sm">Playlist</p>
            <h1
              className="
                  text-white 
                  text-4xl 
                  sm:text-5xl 
                  lg:text-7xl 
                  font-bold
                "
            >
              {type.name}
            </h1>
            <div className="space-y-2 text-sm ">
              {(type.type === "song" || type.type === "episode") && (
                <>
                  {type.type === "song" && (
                    <p>
                      <Link
                        href={getHref(type.album_url, "album")}
                        className="hover:text-foreground"
                      >
                        {type.album}
                      </Link>
                      {" by "}
                      {type.artist_map.primary_artists.map(
                        ({ id, name, url }, i, arr) => (
                          <Link
                            key={id}
                            href={getHref(url, "artist")}
                            className="hover:text-foreground"
                          >
                            {name}
                            {i !== arr.length - 1 && ", "}
                          </Link>
                        )
                      )}
                    </p>
                  )}

                  {type.type === "episode" && <p>{type.header_desc}</p>}

                  <p className="capitalize">
                    {type.type}
                    {" · "}
                    {type.play_count.toLocaleString()} Plays{" · "}
                    {formatDuration(type.duration, "mm:ss")}
                    {" · "}
                    {type.language}
                  </p>
                </>
              )}

              {type.type === "album" && (
                <>
                  <p className="hidden lg:block">
                    by{" "}
                    {type.artist_map.artists.map(
                      ({ id, name, url }, i, arr) => (
                        <Link
                          key={id}
                          href={getHref(url, "artist")}
                          title={name}
                          className=""
                        >
                          {name}
                          {i !== arr.length - 1 && ","}
                        </Link>
                      )
                    )}
                    {" · "}
                    {type.song_count} Songs
                    {" · "}
                    {type.play_count.toLocaleString()} Plays
                    {" · "}
                    {formatDuration(type.duration, "mm:ss")}
                  </p>

                  <div className="text-center lg:hidden">
                    <p>
                      by{" "}
                      {type.artist_map?.artists.map(({ id, name, url }, i) => (
                        <Link
                          key={id}
                          href={getHref(url, "artist")}
                          title={name}
                          className=""
                        >
                          {name}
                          {i !== type.artist_map?.artists.length - 1 && ","}
                        </Link>
                      ))}
                    </p>

                    <p className="capitalize">
                      {type.type}
                      {" · "}
                      {type.play_count?.toLocaleString()} Plays
                    </p>
                  </div>
                </>
              )}

              {(type.type === "song" || type.type === "album") && (
                <p className="hidden w-fit text-sm text-muted-foreground lg:block">
                  <Link href={type.label_url ?? "#"}>
                    {type.copyright_text}
                  </Link>
                </p>
              )}

              {type.type === "playlist" && (
                <p className="capitalize">
                  {type.subtitle}
                  {" · "}
                  {type.subtitle_desc
                    .reverse()
                    .map(
                      (s, i, arr) => s + (i !== arr.length - 1 ? " · " : "")
                    )}
                </p>
              )}

              {type.type === "show" && (
                <p>
                  Podcast{" · "}
                  {type.fan_count.toLocaleString()} Fans
                </p>
              )}

              {type.type === "artist" && (
                <p>
                  Artist
                  {" · "}
                  {type.fan_count.toLocaleString()} Listeners
                </p>
              )}

              {type.type === "mix" && (
                <p>
                  {type.firstname}
                  {" · "}
                  {type.lastname}
                  {" · "}
                  {type.list_count} Songs
                </p>
              )}

              {type.type === "label" && <p>Record Label</p>}
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default ItemHeader;
