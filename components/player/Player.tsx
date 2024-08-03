"use client";

import usePlayer from "@/hooks/usePlayer";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import useGetSongById from "@/hooks/useGetSongById";
import PlayerContent from "../PlayerContent";

import useGetSongDataById from "@/hooks/useGetSongDataById";

const Player = () => {
  const player = usePlayer();
  // const { song } = useGetSongById(player.activeId);

  const songs = player.ids;
  const currentSongId = player.activeId;

  // const songUrl = useLoadSongUrl(song!);

  // For songs from api

  const { song, downloadUrl } = useGetSongDataById(songs, player.activeId);

  if (!player.activeId || !song || !currentSongId || !songs) {
    return null;
  }

  return (
    <div
      className="
        fixed 
        bottom-0 
        bg-black 
        w-full 
        py-2 
        h-[80px] 
        px-4
      "
    >
      {/* <PlayerContent key={songUrl} song={song} songUrl={songUrl} /> */}
    </div>
  );
};

export default Player;
