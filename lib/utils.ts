import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ImageQuality, Quality, StreamQuality, Type } from "./types";

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

export function getHref(url: string, type: Type) {
  const re = /https:\/\/www.jiosaavn.com\/(s\/)?\w*/;
  return `/${url.replace(re, type)}`;
}

export function currentlyInDev() {
  alert("This feature is currently in development.");
}

export function formatDuration(seconds: number, format: "hh:mm:ss" | "mm:ss") {
  const date = new Date(seconds * 1000);

  return format === "hh:mm:ss"
    ? date.toISOString().slice(11, 19)
    : date.toISOString().slice(14, 19);
}

export function getDownloadLink(url: Quality, quality: StreamQuality) {
  if (typeof url === "string") {
    return url;
  } else if (quality === "poor") {
    return url[0].link;
  } else if (quality === "low") {
    return url[1].link;
  } else if (quality === "medium") {
    return url[2].link;
  } else if (quality === "high") {
    return url[3].link;
  } else {
    return url[4].link;
  }
}
