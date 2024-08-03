import { useEffect, useMemo, useState } from "react";

const useGetSongDataById = (songs: any, id?: string) => {
  const [song, setSong] = useState(undefined);
  const [downloadUrl, setDownloadUrl] = useState(undefined);

  useEffect(() => {
    const currentSong = songs.find((song: any) => song.id === id);
    setSong(currentSong);
    setDownloadUrl(currentSong?.download_url[4]?.link);
  }, [songs, id]);

  return useMemo(
    () => ({
      song,
      downloadUrl,
    }),
    [song, downloadUrl]
  );
};

export default useGetSongDataById;
