import { checkHostname } from "@server/utils/functions";

export const capitalizeFirstLetter = (str: string) => {
  const lowerStr = str.toLowerCase();
  const result = lowerStr.charAt(0).toUpperCase() + lowerStr.slice(1);
  
  return result;
}

export const handleHostname = (url: string) => {
  const hostname = checkHostname(url) || "";
  return capitalizeFirstLetter(hostname);
}