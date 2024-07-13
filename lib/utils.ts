import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ImageQuality, Quality, StreamQuality } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageSrc(image: Quality, quality: ImageQuality) {
  if (typeof image === "string") {
    return image;
  } else if (quality === "low") {
    return image[0].link;
  } else if (quality === "medium") {
    return image[1].link;
  } else {
    return image[2].link;
  }
}
