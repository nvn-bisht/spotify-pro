// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { FaPlay } from "react-icons/fa";

// interface ListItemProps {}

// const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
//   const router = useRouter();

//   const onCLick = () => {
//     //add auth before push
//     router.push(href);
//   };

//   return (
//     <button
//       onClick={() => {}}
//       className="
//         relative
//         group
//         flex
//         items-center
//         rounded-md
//         overflow-hidden
//         gap-x-4
//         bg-neutral-100/10
//         cursor-pointer
//         hover:bg-neutral-100/20
//         transition
//         pr-4
//       "
//     >
//       <div className="relative min-h-[64px] min-w-[64px]">
//         <Image className="object-cover" src={image} fill alt="Image" />
//       </div>
//       <p className="font-medium truncate py-5">{name}</p>
//       <div
//         className="
//           absolute
//           transition
//           opacity-0
//           rounded-full
//           flex
//           items-center
//           justify-center
//           bg-green-500
//           p-4
//           drop-shadow-md
//           right-5
//           group-hover:opacity-100
//           hover:scale-110
//         "
//       >
//         <FaPlay className="text-black" />
//       </div>
//     </button>
//   );
// };

// export default ListItem;

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter();

  const onCLick = () => {
    //add auth before push
    router.push(href);
  };

  return (
    <button
      onClick={onCLick}
      className="
        relative 
        group 
        flex 
        flex-col
        items-start 
        gap-2
        p-4
        rounded-md 
        overflow-hidden 
        gap-x-4 
        bg-neutral-100/10 
        cursor-pointer 
        hover:bg-neutral-100/20 
        transition 
        w-[175px]
        h-[265px]
      "
    >
      <div className="relative">
        <Image
          width={143}
          height={143}
          className="rounded-md"
          src={image}
          alt="Image"
        />
        <div
          className="
            absolute 
            transition 
            opacity-0 
            rounded-full 
            flex 
            items-center 
            justify-center 
            bg-green-500 
            p-4
            drop-shadow-md 
            bottom-0 
            right-0 
            group-hover:opacity-100 
            hover:scale-110
           m-1
          "
        >
          <FaPlay className="text-black " />
        </div>
      </div>
      <p className="font-medium truncate py-1">{name}</p>
    </button>
  );
};

export default ListItem;
