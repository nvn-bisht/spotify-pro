import { getAlbumDetails } from "@/actions/jiosaavn-api";
import { Album } from "@/lib/types";
import ItemHeader from "@/components/itemHeader/ItemHeader";

export const revalidate = 0;

type AlbumDetailsPageProps = {
  params: { name: string; id: string };
};

const Liked = async ({ params }: AlbumDetailsPageProps) => {
  const { name, id } = params;
  const album: Album = await getAlbumDetails(id);

  return (
    <div
      className="
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <ItemHeader type={album} />

      {/* Main content */}
    </div>
  );
};

export default Liked;
